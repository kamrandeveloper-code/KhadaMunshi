import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";
import { SITE, waLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `${SITE.url}/blog/${post.slug}`,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: SITE.url + post.image,
    inLanguage: "ur-Latn",
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="wrap narrow prose">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link>
        </nav>
        <h1>{post.title}</h1>
        <p className="meta">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
          {" · "}{post.country}{" · "}{post.readMinutes} min padhai
        </p>
        <Image
          className="hero-img"
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={750}
          priority
          sizes="(max-width: 760px) 100vw, 760px"
        />

        {post.download && (
          <a className="download" href={post.download.href} download>
            ⬇ {post.download.label}
          </a>
        )}

        {post.body.map((b, i) => {
          switch (b.t) {
            case "h2":
              return <h2 key={i}>{b.text}</h2>;
            case "p":
              return <p key={i}>{b.text}</p>;
            case "quote":
              return <blockquote key={i}>{b.text}</blockquote>;
            case "note":
              return <p className="note-box" key={i}>{b.text}</p>;
            case "ul":
              return <ul key={i}>{b.items.map((x) => <li key={x}>{x}</li>)}</ul>;
            case "ol":
              return <ol key={i}>{b.items.map((x) => <li key={x}>{x}</li>)}</ol>;
            case "table":
              return (
                <div className="tablewrap" key={i}>
                  <table>
                    <thead><tr>{b.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>{b.rows.map((r, ri) => <tr key={ri}>{r.map((c, ci) => <td key={ci}>{c}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              );
          }
        })}

        <aside className="cta-box">
          <h2>KhadMunshi ka live demo dekhein</h2>
          <p>Kisan khata, bill, stock aur supplier ka hisaab ek jagah. WhatsApp par demo book karein.</p>
          <a className="btn" href={waLink(`Assalam o Alaikum, mene "${post.title}" padha. Mujhe KhadMunshi ka live demo dekhna hai.`)} rel="noopener">
            WhatsApp: {SITE.whatsappDisplay}
          </a>
        </aside>
      </div>

      <div className="wrap">
        <h2 className="center more">Aur padhein</h2>
        <div className="grid3">
          {others.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card post-card">
              <Image src={p.image} alt={p.imageAlt} width={800} height={500} sizes="(max-width: 900px) 100vw, 360px" loading="lazy" />
              <h3>{p.title}</h3>
              <span>{p.readMinutes} min padhai</span>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
