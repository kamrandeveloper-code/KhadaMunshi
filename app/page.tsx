import Image from "next/image";
import Link from "next/link";
import { SITE, waLink } from "@/lib/site";
import { posts } from "@/lib/posts";
import { DashboardLaptop, DashboardPhone, KhataPhone, StockPhone } from "@/components/AppPreview";

const features = [
  { t: "Har kisan ka alag khata", d: "Kitna baaki hai, kab liya, kab diya. Har bill aur adaigi tareekh ke saath, taake hisaab par jhagra na ho." },
  { t: "Bill 10 second mein", d: "Kisan chunein, khad ya dawai chunein, bill tayyar. Bill banate hi stock apne aap kam." },
  { t: "Lena aur Dena ek nazar mein", d: "Dashboard par kis se kitna lena hai aur kis ko kitna dena hai, mahine ke end ka intezar kiye bina." },
  { t: "Stock khatam hone se pehle khabar", d: "Kaunsi khad kitni bachi hai, kya kam ho rahi hai. Season se pehle sahi andaza." },
  { t: "Supplier ka hisaab saaf", d: "Distributor se maal liya? Khareed aur adaigi darj. Statement se milana aasan." },
  { t: "Mobile, laptop aur desktop", d: "Dukaan par laptop, ghar par mobile. Wahi hisaab, har jagah." },
];

const faqs = [
  { q: "KhadMunshi kis ke liye hai?", a: "Fertilizer, pesticide aur beej ki dukaan chalane walon ke liye: jahan kisan udhaar par maal lete hain aur hisaab fasal par hota hai." },
  { q: "Kya main purane register ka hisaab daal sakta hoon?", a: "Haan. Aap har kisan ka purana baaki opening balance ki tarah daal kar shuru kar sakte hain. Pehle sab se bade kisan daalein, baaki baad mein." },
  { q: "Kya yeh mobile par chalta hai?", a: "Haan, mobile, laptop aur desktop teeno par. Aap dukaan par bill banayein aur ghar se baaki dekhein." },
  { q: "Bill banane se stock khud kam hota hai?", a: "Haan. Jab aap bill save karte hain, us maal ka stock apne aap kam ho jata hai, aur supplier se khareed par barh jata hai." },
  { q: "Demo kaise milega?", a: "WhatsApp par message karein. Hum aap ko live demo dikhate hain, aur aap apne chand asli kisano ka data daal kar dekh sakte hain." },
  { q: "Kya mera data mehfooz hai?", a: "Aap ka hisaab aap ka hai. Demo ke dauran hum aap se poochte hain ke data kahan rakha jata hai aur backup kaise hota hai, taake aap faisla jaan kar karein." },
];

export default function Home() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: SITE.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS, Windows, Web",
        description: SITE.description,
        url: SITE.url,
        inLanguage: ["en", "ur-Latn"],
        audience: { "@type": "Audience", audienceType: "Fertilizer and pesticide dealers in Pakistan and India" },
      },
      {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        contactPoint: { "@type": "ContactPoint", telephone: "+" + SITE.whatsapp, contactType: "sales", availableLanguage: ["Urdu", "English"] },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Fertilizer aur pesticide dukaan ke liye</p>
            <h1>Fertilizer shop hai? Ab register mein nahi, mobile mein hisaab.</h1>
            <p className="lead">
              KhadMunshi kisan ka udhaar, bill, stock aur supplier ka hisaab ek jagah rakhta hai. Kisan ka udhaar yaad
              rakhna ab mushkil nahi.
            </p>
            <div className="cta-row">
              <a className="btn" href={waLink()} rel="noopener">WhatsApp par live demo</a>
              <a className="btn btn-ghost" href="#features">Kya kya milta hai</a>
            </div>
            <p className="note">Demo ke liye WhatsApp: {SITE.whatsappDisplay}</p>
          </div>
          <div className="hero-photo">
            <Image
              src="/images/farmer-punjab.jpg"
              alt="Punjab ka kisan bail gaadi par, jo har saal aap ki dukaan se khad aur dawai leta hai"
              width={1600}
              height={1067}
              priority
              sizes="(max-width: 900px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      <section className="section problem">
        <div className="wrap split">
          <div className="photo">
            <Image
              src="/images/ledger-page.jpg"
              alt="Haath se likhe hue khata register ka page, jis mein naam aur raqam ke kai column hain"
              width={1600}
              height={1064}
              sizes="(max-width: 900px) 100vw, 520px"
              loading="lazy"
            />
          </div>
          <div>
            <h2>Register ka masla: aap ko sab yaad rakhna padta hai</h2>
            <ul className="ticks bad">
              <li>Mahine ke end par kul baaki nikaalne mein poori shaam lag jati hai.</li>
              <li>Bheed ke din bill likhna chhoot jata hai, aur kisan ki raqam ghalat ho jati hai.</li>
              <li>Stock register alag, khata alag: kitni bori bachi hai, andaza hi rehta hai.</li>
              <li>Munshi chhutti par ho to hisaab uske saath chala jata hai.</li>
            </ul>
            <p>
              Hum ne yeh isliye banaya ke register ka kaam ek jagah ho jaye, aur aap ka waqt kisano ke saath guzre, panne
              palatne mein nahi.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="wrap">
          <h2 className="center">Dukaan ka poora hisaab, ek app mein</h2>
          <p className="center sub">Khata, bill, stock aur supplier. Jo cheezein aap register mein rozana likhte hain.</p>
          <div className="grid3">
            {features.map((f) => (
              <article key={f.t} className="card">
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <h2 className="center">Ek nazar mein dekhein</h2>
          <p className="center sub">Neeche ki screens demo data ke saath hain. Naam aur raqam asli kisano ke nahi.</p>
          <div className="phones">
            <DashboardPhone />
            <KhataPhone />
            <StockPhone />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split rev">
          <div>
            <h2>Dukaan par laptop, ghar par mobile</h2>
            <p>
              Sirf mobile nahi, laptop aur desktop par bhi available hai. Aap ki dukaan par bill banta hai, aur aap ghar par
              baith kar dekh sakte hain ke aaj kitni sale hui aur kis se kitna lena hai.
            </p>
            <ul className="ticks">
              <li>Wahi dashboard har device par</li>
              <li>Ek se zyada log bill bana sakte hain</li>
              <li>Kisan ka baaki ek click par</li>
            </ul>
          </div>
          <DashboardLaptop />
        </div>
      </section>

      <section className="section season">
        <Image
          src="/images/wheat-sunset.jpg"
          alt="Gandum ki fasal ghuroob ke waqt, Rabi ka mausam"
          fill
          sizes="100vw"
          loading="lazy"
          className="bgimg"
        />
        <div className="wrap season-in">
          <h2>Rabi ka rush aa raha hai. Udhaar ka hisaab saaf rakhein.</h2>
          <p>
            DAP aur urea ke is mausam mein har kisan ki limit, due date aur baaki aap ke saamne ho. Hamari free Rabi udhaar
            guide aur tracker sheet se aaj hi shuru karein.
          </p>
          <Link className="btn" href="/blog/rabi-season-udhaar-plan-fertilizer-dealer">Rabi udhaar plan padhein</Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="center">Dealers ke liye seedhi, kaam ki baatein</h2>
          <div className="grid3">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card post-card">
                <Image src={p.image} alt={p.imageAlt} width={800} height={500} sizes="(max-width: 900px) 100vw, 360px" loading="lazy" />
                <h3>{p.title}</h3>
                <span>{p.readMinutes} min padhai</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow center">
          <h2>Pilot dukaan banein: pehla mahina free</h2>
          <p className="sub">Do dukaanon ko hum ek mahina free chalate hain, aur aap ke asli before-after numbers (aap ki ijazat se) case study banate hain.</p>
          <Link className="btn" href="/pilot">Pilot program dekhein</Link>{" "}
          <Link className="btn btn-ghost" href="/resources">Free sheets</Link>
        </div>
      </section>

      <section id="faq" className="section tint">
        <div className="wrap narrow">
          <h2 className="center">Aksar poochhe jane wale sawal</h2>
          {faqs.map((f) => (
            <details key={f.q} className="faq">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section final">
        <div className="wrap center">
          <h2>Live demo dekhna ho to WhatsApp karein</h2>
          <p className="lead">{SITE.name}: {SITE.tagline}.</p>
          <a className="btn btn-lg" href={waLink()} rel="noopener">WhatsApp: {SITE.whatsappDisplay}</a>
        </div>
      </section>
    </>
  );
}
