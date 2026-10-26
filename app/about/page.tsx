import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "KhadMunshi ke baare mein",
  description:
    "KhadMunshi fertilizer aur pesticide dukaandaron ke liye banaya gaya hai. Naam ka matlab, hum kya banate hain, aur kyun.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap narrow">
          <h1>KhadMunshi: aapki dukaan ka digital munshi</h1>
          <p className="lead">Khata ka matlab hisaab ki kitab. Munshi woh bharosay ka munshi jo us kitab ko sambhalta hai.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap narrow prose">
          <Image
            className="hero-img"
            src="/images/farmer-india.jpg"
            alt="Hindustan ka kisan dhaan ke khet mein khad daalte hue"
            width={1000}
            height={1500}
            sizes="(max-width: 780px) 100vw, 780px"
            style={{ aspectRatio: "16/10", objectPosition: "50% 60%" }}
            loading="lazy"
          />
          <h2>Hum ne yeh kyun banaya</h2>
          <p>Fertilizer aur pesticide ki dukaan par hisaab register mein chalta hai, aur udhaar fasal ke hisaab se chalta hai: October mein diya, April mein mila. Is dauran kisan ka baaki, bill, stock aur supplier ka lena dena sab yaad rakhna padta hai.</p>
          <p>KhadMunshi isi masle ke liye hai: ek jagah, har kisan ka khata, bill banate hi stock kam, aur supplier ka hisaab saaf.</p>
          <h2>Hum kis ke liye hain</h2>
          <ul>
            <li>Fertilizer, pesticide aur beej ki dukaan chalane walay dealers</li>
            <li>Pakistan aur India dono mein</li>
            <li>Chhoti dukaan se le kar kai staff wali dukaan tak</li>
          </ul>
          <h2>Humara usool</h2>
          <ul>
            <li><b>Saaf baat.</b> Agar aap ke liye register ya Excel kaafi hai, to hum yehi kehte hain. Dekhein: <Link href="/blog/khata-register-excel-or-app-fertilizer-shop">register, Excel ya app</Link>.</li>
            <li><b>Aap ka data aap ka.</b> Demo mein hum bata dete hain ke data kahan rehta hai.</li>
            <li><b>Sirf wohi dikhana jo app mein hai.</b> Hum koi feature wada nahi karte jo abhi nahi hai.</li>
          </ul>
          <a className="btn" href={waLink()} rel="noopener">Live demo: {SITE.whatsappDisplay}</a>
        </div>
      </section>
    </>
  );
}
