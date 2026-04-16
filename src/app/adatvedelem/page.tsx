import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  robots: { index: false, follow: false },
};

export default function AdatvedelemPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-extrabold text-foreground mb-8">Adatvédelmi tájékoztató</h1>

          <div className="prose prose-neutral max-w-none space-y-6 text-foreground-secondary leading-relaxed text-[0.95rem]">
            <p>
              <strong>Adatkezelő:</strong> Harmony Masszázs Stúdió<br />
              <strong>Székhely:</strong> 1065 Budapest, Nagymező utca 42.<br />
              <strong>Email:</strong> info@harmonymassage.hu<br />
              <strong>Telefon:</strong> +36 30 123 4567
            </p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Milyen adatokat kezelünk?</h2>
            <p>
              A weboldalon keresztül az alábbi személyes adatokat gyűjthetjük: név, telefonszám, email cím, üzenet tartalma.
              Ezeket kizárólag az Ön megkeresésének megválaszolására és időpontegyeztetésre használjuk.
            </p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. Az adatkezelés jogalapja</h2>
            <p>
              Az adatkezelés jogalapja az Ön hozzájárulása (GDPR 6. cikk (1) a) pont). A kapcsolatfelvételi űrlap kitöltésével
              Ön hozzájárul adatai kezeléséhez.
            </p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Sütik (cookie-k)</h2>
            <p>
              A weboldal technikai sütiket használ a működéshez, valamint — az Ön hozzájárulásával — analitikai sütiket
              (Google Analytics) a látogatottság méréséhez. Az analitikai sütik csak az Ön kifejezett beleegyezésével aktiválódnak.
            </p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Az Ön jogai</h2>
            <p>
              Ön jogosult a kezelt adataihoz hozzáférni, azok helyesbítését, törlését kérni, valamint az adatkezelés
              korlátozását vagy tiltakozhat az adatkezelés ellen. Kérjük, keresse az info@harmonymassage.hu email címen.
            </p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Adattárolás időtartama</h2>
            <p>
              A kapcsolatfelvételi űrlapon megadott adatokat a megkeresés megválaszolását követő 1 évig tároljuk,
              majd töröljük rendszereinkből.
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
