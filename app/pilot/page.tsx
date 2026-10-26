import type { Metadata } from "next";
import Image from "next/image";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pilot Shop Program: Pehla Mahina Free",
  description:
    "Do fertilizer ya pesticide dukaanon ko KhadMunshi ka pehla mahina free. Aap ki dukaan ke asli before-after numbers, aap ki ijazat se, case study ban sakte hain.",
  alternates: { canonical: "/pilot" },
};

export default function Pilot() {
  return (
    <>
      <section className="page-head">
        <div className="wrap narrow">
          <p className="eyebrow">Pilot shop program</p>
          <h1>Do dukaanon ke liye KhadMunshi ka pehla mahina free</h1>
          <p className="lead">Hum aap ke saath dukaan par ek mahina chalate hain, aur dekhte hain ke register ke muqable mein kya badla.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap narrow">
          <Image
            src="/images/field-workers.jpg"
            alt="Punjab ke kisan khet mein kaam karte hue"
            width={1200}
            height={750}
            sizes="(max-width: 780px) 100vw, 780px"
            style={{ borderRadius: 16, marginBottom: 24 }}
            loading="lazy"
          />
          <h2>Aap ko kya milta hai</h2>
          <ul className="ticks">
            <li>Pehla mahina bilkul free.</li>
            <li>Purana hisaab (opening balance) daalne mein madad.</li>
            <li>Staff ko chand ghanton ki training.</li>
            <li>Mahine bhar WhatsApp par seedha rabta.</li>
          </ul>
          <h2>Hum aap se kya chahte hain</h2>
          <ul className="ticks">
            <li>Mahine bhar app mein bill aur khata rozana likhein.</li>
            <li>Shuru aur aakhir mein chand numbers batayein: mahine ke end par kul baaki nikaalne mein kitna waqt laga, aur kitne bill ghalat nikle.</li>
            <li>Ek chhoti baat-cheet, jis mein aap batayein ke kya achha laga aur kya nahi.</li>
          </ul>
          <p className="note-box">Aap ka naam, dukaan ka naam aur numbers sirf aap ki likhi hui ijazat se hi case study mein aate hain. Ijazat na ho to kuch publish nahi hota.</p>
          <h2>Kin dukaanon ke liye</h2>
          <p>Fertilizer, pesticide ya beej ki dukaan, jahan kisan udhaar par maal lete hain aur kam az kam 50 kisanon ka khata chalta hai. Pakistan aur India dono se dukaandar apply kar sakte hain.</p>
          <a className="btn btn-lg" href={waLink("Assalam o Alaikum, mujhe KhadMunshi ke pilot shop program mein shamil hona hai. Dukaan ka naam ____, shehar ____.")} rel="noopener">
            Pilot ke liye WhatsApp: {SITE.whatsappDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
