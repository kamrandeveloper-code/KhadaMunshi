import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog: Fertilizer aur Pesticide Dealers ke liye",
  description:
    "Kisan udhaar, expiry tracking, stock planning aur supplier hisaab par seedhi, practical guides. Pakistan aur India ke fertilizer dealers ke liye, free sheets ke saath.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>KhadMunshi Blog</h1>
        <p className="sub">Fertilizer aur pesticide dukaan ke liye practical guides, free downloadable sheets ke saath.</p>
        <div className="grid3">
          {posts.map((p, i) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card post-card">
              <Image
                src={p.image}
                alt={p.imageAlt}
                width={800}
                height={500}
                sizes="(max-width: 900px) 100vw, 360px"
                priority={i < 3}
              />
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <span>{p.country} · {p.readMinutes} min padhai</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
