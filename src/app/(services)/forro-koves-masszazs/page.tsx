import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Forró köves masszázs Budapest — Harmony Masszázs Stúdió",
  description: "Forró köves (hot stone) masszázs Budapest belvárosában. Bazaltkövekkel végzett hőterápiás masszázs a mély relaxációért. Időpontfoglalás: +36 30 123 4567.",
  alternates: { canonical: "https://harmonymassage.hu/forro-koves-masszazs" },
};

export default function ForroKovesMasszazsPage() {
  return (
    <ServicePage
      title="Forró köves masszázs"
      subtitle="Bazaltkövekkel végzett hőterápiás masszázs a mély ellazulásért és a vérkeringés javításáért."
      sections={[
        {
          heading: "Mi az a forró köves masszázs?",
          text: "A forró köves masszázs (hot stone massage) egy ősi terápiás módszer, amely a felmelegített bazaltkövek hőhatását kombinálja a masszázstechnikákkal. A bazaltkövek vulkanikus eredetűek, természetesen simák és kiválóan tartják a hőt. A köveket 50-60°C-ra melegítjük, majd a test kulcsfontosságú energiapontjaira helyezzük, miközben a meleg kövek segítségével masszírozzuk az izmokat.",
        },
        {
          heading: "Kinek javasolt?",
          text: "A forró köves masszázs különösen ajánlott azoknak, akik szeretik a meleg, átfogó relaxációt. Ideális izommerevség, stressz, szorongás és hideg időszakban érzett feszültség oldására. A hőhatás segíti a mélyebb izmok ellazulását is, így azok számára is megfelelő, akik a mélyizom masszázs intenzitása nélkül szeretnék elérni a mélyebb rétegek lazulását. Keringési problémákra és ízületi merevségre is hatékony.",
        },
        {
          heading: "Hogyan zajlik a kezelés?",
          text: "A kezelés előtt felmélegítjük a bazaltköveket a megfelelő hőmérsékletre. A masszázs során a terapeuta a meleg köveket a gerincoszlop mentén, a tenyerekbe, a lábfejekre és egyéb energiapontokra helyezi, majd kövekkel és kézzel váltakozva masszíroz. A meleg hatására az erek kitágulnak, javul a keringés, és az izmok könnyebben ellazulnak. A kezelés végén a testben kellemes melegség és mély ellazultság érezhető.",
        },
        {
          heading: "Milyen hatásai vannak?",
          text: "A forró köves masszázs számos jótékony hatással bír: mélyen ellazítja az izmokat a hőhatás révén, javítja a vér- és nyirokkeringést, csökkenti a stresszt és a szorongást, enyhíti az ízületi fájdalmakat, javítja az alvás minőségét, és segíti a méreganyagok kiürülését. A bazaltkövek egyenletes hőleadása mély, tartós relaxációt biztosít.",
        },
        {
          heading: "Mennyi ideig tart?",
          text: "A forró köves masszázs 90 perces kezelésben érhető el. Az előkészítés (kövek felmelegítése) és a kezelés utáni pihenés együttesen körülbelül 2 órát vesz igénybe. Javasoljuk, hogy a kezelés után ne siessen — hagyja, hogy a hatás teljesen kifejtse magát.",
        },
        {
          heading: "Mennyibe kerül?",
          text: "Az árakról kérjük, érdeklődjön telefonon a +36 30 123 4567 számon, vagy írjon emailt az info@harmonymassage.hu címre.",
        },
      ]}
      relatedServices={[
        { title: "Aromaterápiás masszázs", href: "/aromaterapias-masszazs" },
        { title: "Svéd masszázs", href: "/sved-masszazs" },
        { title: "Thai masszázs", href: "/thai-masszazs" },
      ]}
    />
  );
}
