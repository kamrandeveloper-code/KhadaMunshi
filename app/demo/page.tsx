import type { Metadata } from "next";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Live Demo: KhadMunshi Fertilizer Shop Software",
  description:
    "KhadMunshi ka live demo WhatsApp par book karein. Apne chand asli kisanon ka data daal kar dekhein ke khata, bill, stock aur supplier ka hisaab kaise chalta hai.",
  alternates: { canonical: "/demo" },
};

export default function Demo() {
  return (
    <>
      <section className="page-head">
        <div className="wrap narrow">
          <h1>KhadMunshi ka live demo</h1>
          <p className="lead">Video nahi, live. Aap apne kisanon ke naam daal kar dekhein ke aap ki dukaan par yeh kaise chalega.</p>
          <a className="btn btn-lg" href={waLink()} rel="noopener">WhatsApp: {SITE.whatsappDisplay}</a>
        </div>
      </section>
      <section className="section">
        <div className="wrap narrow">
          <h2>Demo mein kya dikhaya jata hai</h2>
          <ol className="steps">
            <li><b>Dashboard.</b> Lena (receivables), Dena (payables) aur sale ka total ek nazar mein.</li>
            <li><b>Naya bill.</b> Kisan chunein, khad ya dawai chunein, bill save. Stock apne aap kam.</li>
            <li><b>Kisan ka khata.</b> Har kisan ka alag khata: kitna baaki, kab liya, kab diya.</li>
            <li><b>Stock.</b> Kaunsi khad kitni bachi hai, aur kya khatam hone wali hai.</li>
            <li><b>Khareed aur supplier.</b> Supplier se liya hua maal aur uska lena dena.</li>
            <li><b>Mobile aur laptop.</b> Wahi hisaab har device par.</li>
          </ol>
          <h2>Demo ke liye aap ko kya chahiye</h2>
          <ul className="ticks">
            <li>10 se 15 minute</li>
            <li>Apne 3 se 5 kisanon ke naam aur unka mojooda baaki (sirf andaza kaafi hai)</li>
            <li>Apni dukaan ke 5 se 10 products</li>
          </ul>
          <p className="note-box">Hum aap ka asli data kisi public video mein nahi dikhate. Demo mein aap ke apne naam sirf aap dekhte hain.</p>
          <h2>Pehla message kya likhein</h2>
          <p>Bas itna kaafi hai: apna naam, shehar aur dukaan ka naam. Hum aap ko demo ka waqt bata dete hain.</p>
          <a className="btn" href={waLink("Assalam o Alaikum, mera naam ____ hai, shehar ____. Mujhe KhadMunshi ka live demo dekhna hai.")} rel="noopener">
            Message likhna shuru karein
          </a>
        </div>
      </section>
    </>
  );
}
