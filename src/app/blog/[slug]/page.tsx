import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, stripHtml, formatDate } from "@/lib/wp";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered).slice(0, 155);
  const featImg =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: `${title} | Bucksworth Blog`,
    description,
    alternates: {
      canonical: `https://bucksworth-site.vercel.app/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      ...(featImg ? { images: [featImg] } : {}),
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const title = stripHtml(post.title.rendered);
  const catNames =
    post._embedded?.["wp:term"]?.[0]?.map((t) => t.name) || [];
  const featImg =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const featAlt =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || title;

  // Article schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      "@type": "Organization",
      name: "Bucksworth Home Services",
    },
    publisher: {
      "@type": "Organization",
      name: "Bucksworth Home Services",
      logo: {
        "@type": "ImageObject",
        url: "https://bucksworth-site.vercel.app/images/bucksworth-mascot-clean.jpg",
      },
    },
    ...(featImg ? { image: featImg } : {}),
    description: stripHtml(post.excerpt.rendered).slice(0, 155),
    mainEntityOfPage: `https://bucksworth-site.vercel.app/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
              {catNames.length > 0 && (
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                  {catNames.map((cat) => (
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
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <div className="blog-article-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>&bull;</span>
                <span>Bucksworth Home Services</span>
              </div>
            </div>
          </div>

          {/* Featured image */}
          {featImg && (
            <div className="blog-article-hero">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featImg}
                alt={featAlt}
                className="blog-article-hero-img"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          )}

          {/* Article body */}
          <div className="blog-article-body">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>

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
                <a href="tel:4804228388" className="btn-call">
                  Phoenix: (480) 422-8388
                </a>
                <a href="tel:5202849930" className="btn-call" style={{ background: "var(--navy)" }}>
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
