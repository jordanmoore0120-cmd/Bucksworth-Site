/* ──────────────────────────────────────────────
   RelatedPosts.tsx — Blog cross-links for service pages
   Shows relevant blog posts to boost internal linking
   ────────────────────────────────────────────── */

import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

interface RelatedPostsProps {
  posts: BlogPost[];
  cityName: string;
  serviceName?: string;
}

export default function RelatedPosts({ posts, cityName, serviceName }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  const heading = serviceName
    ? `${serviceName} Tips for ${cityName} Homeowners`
    : `Home Service Tips for ${cityName}`;

  return (
    <section className="related-posts-section">
      <div className="container">
        <h2 className="section-title">{heading}</h2>
        <p className="related-posts-intro">
          Read expert advice from Bucksworth&apos;s {cityName} service team:
        </p>
        <div className="related-posts-grid">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="related-post-card"
            >
              <span className="related-post-date">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <h3>{post.title}</h3>
              {post.excerpt && (
                <p
                  className="related-post-excerpt"
                  dangerouslySetInnerHTML={{
                    __html:
                      post.excerpt.length > 120
                        ? post.excerpt.slice(0, 120) + "…"
                        : post.excerpt,
                  }}
                />
              )}
              <span className="related-post-link">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
