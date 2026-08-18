import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs, stripHtml, formatDate, getCanonicalTarget, getRelatedPosts, extractFaqPairs, extractFirstImage, getPrunedRedirect } from "@/lib/blog";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = stripHtml(post.title);
  const description = stripHtml(post.excerpt).slice(0, 155);
  const canonicalTarget = getCanonicalTarget(slug);
  const firstImage = extractFirstImage(post.content);
  const ogImage = firstImage?.url || "https://www.getyourbucksworth.com/images/bucksworth-mascot-clean.jpg";

  return {
    title: title,
    description,
    // Blog posts with a canonical target are supporting content — noindex to
    // consolidate ranking signals on the primary service page.
    ...(canonicalTarget ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: canonicalTarget
        ? `https://www.getyourbucksworth.com${canonicalTarget}`
        : `https://www.getyourbucksworth.com/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: [{ url: ogImage, alt: firstImage?.alt || title }],
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    // Post may have been pruned (removed as a permanent duplicate) rather
    // than simply never having existed — send it to the real page with a
    // permanent redirect instead of 404ing on a URL that used to be live.
    const target = getPrunedRedirect(slug);
    if (target) permanentRedirect(target);
    notFound();
  }

  const title = stripHtml(post.title);

  // Article schema — author is Jordan Moore
  const articleImage = extractFirstImage(post.content);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: post.date,
    dateModified: post.modified,
    ...(articleImage ? {
      image: {
        "@type": "ImageObject",
        url: articleImage.url,
        caption: articleImage.alt,
      },
    } : {
      image: {
        "@type": "ImageObject",
        url: "https://www.getyourbucksworth.com/images/bucksworth-mascot-clean.jpg",
        caption: "Bucksworth Home Services",
      },
    }),
    author: {
      "@type": "Person",
      name: "Jordan Moore",
      jobTitle: "Founder & CEO",
      url: "https://www.getyourbucksworth.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Bucksworth Home Services",
      logo: {
        "@type": "ImageObject",
        url: "https://www.getyourbucksworth.com/images/bucksworth-mascot-clean.jpg",
      },
    },
    description: stripHtml(post.excerpt).slice(0, 155),
    mainEntityOfPage: `https://www.getyourbucksworth.com/blog/${slug}`,
  };

  // FAQ schema — extract Q&A pairs from content
  const faqPairs = extractFaqPairs(post.content);
  const faqSchema = faqPairs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPairs.map((pair) => ({
      "@type": "Question",
      name: pair.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: pair.answer,
      },
    })),
  } : null;

  // BreadcrumbList schema — matches visual breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getyourbucksworth.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getyourbucksworth.com/blog" },
      { "@type": "ListItem", position: 3, name: title, item: `https://www.getyourbucksworth.com/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">
        <article className="blog-article">
          <div className="blog-article-header">
            <div className="container" style={{ maxWidth: "800px" }}>
              {/* Breadcrumbs */}
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className="breadcrumb-sep">/</span>
                <Link href="/blog">Blog</Link>
                <span className="breadcrumb-sep">/</span>
                <span>{title.length > 50 ? title.slice(0, 50) + "..." : title}</span>
              </nav>

              {/* Category badges */}
              {post.categories.length > 0 && (
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                  {post.categories.map((cat) => (
                    <span
                      key={cat}
                      style={{
                        background: "var(--red)",
                        color: "white",
                        fontSize: "11px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        padding: "4px 12px",
                        borderRadius: "4px",
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              <h1
                className="blog-article-title"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />

              <div className="blog-article-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>&bull;</span>
                <span>Jordan Moore</span>
              </div>
            </div>
          </div>

          {/* Article body */}
          <div className="blog-article-body">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Related Posts */}
          {(() => {
            const related = getRelatedPosts(slug);
            if (related.length === 0) return null;
            return (
              <div style={{ background: "#f8f9fa", padding: "48px 0" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                  <h2 style={{
                    color: "var(--navy)",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "24px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "24px",
                    textAlign: "center",
                  }}>
                    Related Posts
                  </h2>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "20px",
                  }}>
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        style={{
                          display: "block",
                          background: "white",
                          borderRadius: "8px",
                          padding: "20px",
                          textDecoration: "none",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                          transition: "box-shadow 0.2s",
                        }}
                      >
                        {r.categories.length > 0 && (
                          <span style={{
                            background: "var(--red)",
                            color: "white",
                            fontSize: "10px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            padding: "3px 8px",
                            borderRadius: "3px",
                            display: "inline-block",
                            marginBottom: "8px",
                          }}>
                            {r.categories[0]}
                          </span>
                        )}
                        <h3 style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "var(--navy)",
                          lineHeight: 1.3,
                          margin: "0 0 8px",
                        }}
                          dangerouslySetInnerHTML={{ __html: r.title }}
                        />
                        <p style={{
                          fontSize: "13px",
                          color: "var(--g600)",
                          lineHeight: 1.5,
                          margin: 0,
                        }}>
                          {stripHtml(r.excerpt).slice(0, 120)}...
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* CTA */}
          <div className="blog-article-cta">
            <div className="container" style={{ maxWidth: "700px", textAlign: "center" }}>
              <h2 style={{ color: "var(--navy)", fontFamily: "'Oswald', sans-serif", fontSize: "28px" }}>
                Need Help With Your Arizona Home?
              </h2>
              <p style={{ color: "var(--g600)", marginBottom: "20px" }}>
                Bucksworth Home Services covers pest control, HVAC, plumbing, and weed control across 33 Arizona cities. Call for a free inspection.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="tel:+14804228388" className="btn-call">
                  Phoenix: (480) 422-8388
                </a>
                <a href="tel:+15202849930" className="btn-call" style={{ background: "var(--navy)" }}>
                  Tucson: (520) 284-9930
                </a>
              </div>
            </div>
          </div>

          {/* Back to blog */}
          <div style={{ textAlign: "center", padding: "32px 0 48px" }}>
            <Link href="/blog" className="btn-estimate">
              &larr; Back to Blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
