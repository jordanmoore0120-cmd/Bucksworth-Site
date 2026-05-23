import { Metadata } from "next";
import Link from "next/link";
import { getPosts, getCategories, stripHtml, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Pest Control, HVAC & Home Tips | Bucksworth Home Services",
  description:
    "Expert home services tips from Bucksworth. Read about pest control, AC maintenance, plumbing, and weed control specific to Arizona homes across Phoenix and Tucson.",
  alternates: { canonical: "https://getyourbucksworth.com/blog" },
  openGraph: {
    title: "Blog | Pest Control, HVAC & Home Tips",
    description:
      "Expert home services tips from Bucksworth. Read about pest control, AC maintenance, plumbing, and weed control specific to Arizona homes.",
  },
};

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || "1", 10));
  const catSlug = params.category;

  // Get categories for sidebar
  const categories = getCategories();
  const activeCat = catSlug
    ? categories.find((c) => c.slug === catSlug)
    : undefined;

  // Get posts
  const { posts, total, totalPages } = getPosts(
    page,
    12,
    activeCat?.slug
  );

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="city-hero" style={{ padding: "60px 0 40px" }}>
        <div className="city-hero-inner">
          <p className="city-hero-eyebrow">Bucksworth Blog</p>
          <h1>
            Arizona Home Services{" "}
            <span className="orange">Tips &amp; Insights</span>
          </h1>
          <p className="city-hero-desc">
            {total.toLocaleString()} expert articles on pest control, HVAC,
            plumbing, and lawn care for Arizona homeowners.
            {activeCat ? ` Showing: ${activeCat.name}` : ""}
          </p>
        </div>
      </section>

      <section className="svc-cards-section">
        <div className="container">
          {/* Category filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "32px",
              justifyContent: "center",
            }}
          >
            <Link
              href="/blog"
              className={`blog-cat-pill${!activeCat ? " active" : ""}`}
            >
              All Posts
            </Link>
            {categories
              .filter((c) => c.count > 0)
              .sort((a, b) => b.count - a.count)
              .slice(0, 12)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog?category=${cat.slug}`}
                  className={`blog-cat-pill${activeCat?.slug === cat.slug ? " active" : ""}`}
                >
                  {cat.name} ({cat.count})
                </Link>
              ))}
          </div>

          {/* Post grid */}
          <div className="blog-grid">
            {posts.map((post) => {
              const excerpt = stripHtml(post.excerpt).slice(0, 160);

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card"
                >
                  <div className="blog-card-body">
                    {post.categories.length > 0 && (
                      <span className="blog-card-cat">{post.categories.join(", ")}</span>
                    )}
                    <h2
                      className="blog-card-title"
                      dangerouslySetInnerHTML={{
                        __html: post.title,
                      }}
                    />
                    <p className="blog-card-excerpt">{excerpt}&hellip;</p>
                    <time className="blog-card-date">
                      {formatDate(post.date)}
                    </time>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="blog-pagination"
              aria-label="Blog pagination"
            >
              {page > 1 && (
                <Link
                  href={`/blog?page=${page - 1}${catSlug ? `&category=${catSlug}` : ""}`}
                  className="blog-page-link"
                >
                  &larr; Previous
                </Link>
              )}
              <span className="blog-page-info">
                Page {page} of {totalPages} ({total.toLocaleString()} posts)
              </span>
              {page < totalPages && (
                <Link
                  href={`/blog?page=${page + 1}${catSlug ? `&category=${catSlug}` : ""}`}
                  className="blog-page-link"
                >
                  Next &rarr;
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>
    </main>
  );
}
