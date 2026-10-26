import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Free Sheets: Udhaar Tracker, Expiry List, Stock Planner",
  description:
    "Fertilizer aur pesticide dealers ke liye free Excel / Google Sheets: kisan udhaar tracker, expiry list, supplier reconciliation aur season stock planner.",
  alternates: { canonical: "/resources" },
};

const sheets = [
  { href: "/downloads/kisan-udhaar-tracker.csv", name: "Kisan udhaar tracker", desc: "Limit, baaki aur due date. Hara, peela, laal halat khud nikalti hai.", post: "rabi-season-udhaar-plan-fertilizer-dealer" },
  { href: "/downloads/expiry-tracker.csv", name: "Monthly expiry list", desc: "Batch aur expiry likhein, kitne din baqi hain sheet khud batati hai.", post: "pesticide-shop-expiry-batch-tracking" },
  { href: "/downloads/supplier-reconciliation.csv", name: "Supplier reconciliation", desc: "Apna record aur distributor statement milayein, farq nikaalein.", post: "match-supplier-ledger-with-company-statement" },
  { href: "/downloads/season-stock-planner.csv", name: "Season stock planner", desc: "Pichli bikri se is season ka order nikaalein.", post: "how-much-urea-dap-pesticide-to-stock-using-last-year-sales" },
];

export default function Resources() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Free sheets for dealers</h1>
        <p className="sub">Excel ya Google Sheets mein kholein. Formulas pehle se lage hain; misaal wali qataar mitakar apna data likhein.</p>
        <div className="grid3">
          {sheets.map((s) => (
            <div key={s.href} className="card">
              <h2 style={{ fontSize: "1.15rem" }}>{s.name}</h2>
              <p>{s.desc}</p>
              <p style={{ marginTop: 14 }}>
                <a className="btn btn-sm" href={s.href} download>Download</a>{" "}
                <Link href={`/blog/${s.post}`}>Guide padhein</Link>
              </p>
            </div>
          ))}
        </div>
        <p className="sub" style={{ marginTop: 32 }}>Total {posts.length} guides <Link href="/blog">blog par</Link> maujood hain.</p>
      </div>
    </section>
  );
}
