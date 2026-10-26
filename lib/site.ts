export const SITE = {
  name: "KhadMunshi",
  tagline: "Aapki dukaan ka digital munshi",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://khadmunshi.com").replace(/\/$/, ""),
  whatsapp: "923196165027",
  whatsappDisplay: "+92 319 6165027",
  description:
    "KhadMunshi fertilizer aur pesticide dukaan ka software: kisan ka udhaar khata, bill, stock aur supplier ka hisaab. Mobile, laptop aur desktop par.",
};

export function waLink(message = "Assalam o Alaikum, mujhe KhadMunshi ka live demo dekhna hai.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
