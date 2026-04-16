import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Kell-e előre időpontot foglalni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, minden kezelésre előzetes időpontfoglalás szükséges. Hívjon a +36 30 123 4567 számon.",
                },
              },
              {
                "@type": "Question",
                name: "Mennyi idő egy masszázs kezelés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A kezelések 60 vagy 90 perces időtartamban érhetőek el.",
                },
              },
              {
                "@type": "Question",
                name: "Fáj a masszázs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A legtöbb masszázstechnika kellemes, relaxáló érzés. A kezelés erősségét mindig az Ön tűrőképességéhez igazítjuk.",
                },
              },
              {
                "@type": "Question",
                name: "Milyen gyakran javasolt masszázsra járni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Általánosságban kéthetente vagy havonta javasolt a rendszeres masszázs.",
                },
              },
              {
                "@type": "Question",
                name: "Mit hozzak magammal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Semmit nem kell hoznia — törölközőt, masszázsolajat és egyszer használatos lepedőt mi biztosítunk.",
                },
              },
            ],
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Schedule />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
