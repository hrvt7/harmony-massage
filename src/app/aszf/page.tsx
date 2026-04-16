import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek",
  robots: { index: false, follow: false },
};

export default function AszfPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-extrabold text-foreground mb-8">Általános Szerződési Feltételek</h1>

          <div className="prose prose-neutral max-w-none space-y-6 text-foreground-secondary leading-relaxed text-[0.95rem]">
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Szolgáltató adatai</h2>
            <p>
              <strong>Név:</strong> Harmony Masszázs Stúdió<br />
              <strong>Székhely:</strong> 1065 Budapest, Nagymező utca 42.<br />
              <strong>Email:</strong> info@harmonymassage.hu<br />
              <strong>Telefon:</strong> +36 30 123 4567
            </p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. Időpontfoglalás és lemondás</h2>
            <p>
              A kezelésekre előzetes időpontfoglalás szükséges. Az időpont lemondását vagy módosítását legalább 24 órával
              a kezelés előtt kérjük jelezni. A 24 órán belüli lemondás vagy meg nem jelenés esetén a kezelés díjának
              50%-a felszámításra kerülhet.
            </p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Fizetés</h2>
            <p>
              A kezelések díját a helyszínen, a kezelés után kell rendezni. Készpénzes és bankkártyás fizetést egyaránt
              elfogadunk.
            </p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Egészségügyi nyilatkozat</h2>
            <p>
              Az első kezelés előtt kérjük, tájékoztassa a terapeutát az esetleges egészségügyi problémákról,
              allergiákról, terhességről vagy bármely olyan állapotról, amely befolyásolhatja a kezelést.
              Bizonyos állapotok esetén (pl. akut gyulladás, láz, fertőző betegség) a kezelés ellenjavallt lehet.
            </p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Felelősség</h2>
            <p>
              A stúdió felelőssége a szakszerű kezelés nyújtására terjed ki. A vendég felelőssége, hogy
              az egészségügyi állapotáról valós tájékoztatást adjon. A kezelésnek nem célja az orvosi
              diagnózis vagy gyógyítás helyettesítése.
            </p>

            <p className="text-foreground-muted text-sm mt-12">
              Utolsó frissítés: 2026. április
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
