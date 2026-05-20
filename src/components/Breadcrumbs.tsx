import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol
        className="breadcrumbs-list"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          className="breadcrumbs-item"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link href="/" itemProp="item">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {crumbs.map((crumb, i) => (
          <li
            key={i}
            className="breadcrumbs-item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span className="breadcrumbs-sep" aria-hidden>/</span>
            {crumb.href ? (
              <Link href={crumb.href} itemProp="item">
                <span itemProp="name">{crumb.label}</span>
              </Link>
            ) : (
              <span itemProp="name" className="breadcrumbs-current" aria-current="page">
                {crumb.label}
              </span>
            )}
            <meta itemProp="position" content={String(i + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
