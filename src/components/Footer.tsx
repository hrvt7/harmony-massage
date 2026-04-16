export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-card py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo + description */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M18 20a6 6 0 0 0-12 0" />
                  <circle cx="12" cy="10" r="4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <span className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
                Harmony Masszázs
              </span>
            </div>
            <p className="text-sm text-foreground-muted max-w-xs text-center md:text-left">
              Professzionális masszázs stúdió Budapest belvárosában. Testi-lelki harmónia, szakértő kezekben.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground-muted">
            <p className="font-heading font-semibold text-foreground-secondary text-xs uppercase tracking-wider">Navigáció</p>
            <a href="#szolgaltatasok" className="hover:text-primary transition-colors duration-200">Szolgáltatások</a>
            <a href="#nyitvatartas" className="hover:text-primary transition-colors duration-200">Nyitvatartás</a>
            <a href="#rolunk" className="hover:text-primary transition-colors duration-200">Rólunk</a>
            <a href="#kapcsolat" className="hover:text-primary transition-colors duration-200">Kapcsolat</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-foreground-muted">
            <p className="font-heading font-semibold text-foreground-secondary text-xs uppercase tracking-wider">Elérhetőségek</p>
            <a href="tel:+36301234567" className="hover:text-primary transition-colors duration-200">
              +36 30 123 4567
            </a>
            <a href="mailto:info@harmonymassage.hu" className="hover:text-primary transition-colors duration-200">
              info@harmonymassage.hu
            </a>
            <span>1065 Budapest, Nagymező utca 42.</span>
            <a href="/adatvedelem" className="hover:text-primary transition-colors duration-200">
              Adatvédelmi tájékoztató
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-border-light text-center text-xs text-foreground-muted leading-relaxed space-y-1">
          <p>
            <strong className="text-foreground-secondary">Harmony Masszázs Stúdió</strong> — Professzionális masszázs kezelések
          </p>
          <p>
            1065 Budapest, Nagymező utca 42. &middot; +36 30 123 4567
          </p>
          <p className="pt-2">
            &copy; {new Date().getFullYear()} Harmony Masszázs Stúdió. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
