import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border section-padding !py-12">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gradient mb-3">Fluxion</h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Engineering scalable digital experiences. We build high-performance platforms that drive real business growth.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {["About", "Services", "Solutions", "Portfolio", "Contact"].map((l) => (
                <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>hello@fluxion.dev</span>
              <span>LinkedIn</span>
              <span>Twitter / X</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fluxion. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
