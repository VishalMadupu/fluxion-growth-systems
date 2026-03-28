import Section from "@/components/Section";
import { motion } from "framer-motion";
import { Code2, ShoppingCart, Globe, TrendingUp, Film, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const cardBase =
    "glass-card-hover p-8 flex flex-col justify-start";

  const iconBox =
    "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5";

  const anim = (delay: number) => ({
    initial: { opacity: 0, y: 20 } as const,
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true, margin: "-50px" } as const,
    transition: { duration: 0.5, delay },
  });

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-main">
          {/* Heading */}
          <motion.div {...anim(0)} className="mb-16">
            <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mb-3">
              Core Specializations
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </motion.div>

          {/* Row 1 — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div {...anim(0.05)} className={cardBase}>
              <div className={iconBox}>
                <Code2 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Precision-coded frontends and robust backends optimized for speed, security, and infinite scalability.
              </p>
            </motion.div>

            <motion.div {...anim(0.1)} className={cardBase}>
              <div className={iconBox}>
                <ShoppingCart className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-Commerce Platforms</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Converting traffic into transactions with high-performance storefronts and seamless checkouts.
              </p>
            </motion.div>
          </div>

          {/* Row 2 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <motion.div {...anim(0.15)} className={cardBase}>
              <div className={iconBox}>
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Complex SaaS architectures delivered through intuitive, fluid user interfaces.
              </p>
            </motion.div>

            <motion.div {...anim(0.2)} className={cardBase}>
              <div className={iconBox}>
                <TrendingUp className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO & Growth</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Engineered visibility strategies to dominate search results and scale organic reach.
              </p>
            </motion.div>

            <motion.div {...anim(0.25)} className={cardBase}>
              <div className={iconBox}>
                <Film className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Creative & Media</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Editorial-grade design and motion graphics that define modern brand identities.
              </p>
            </motion.div>
          </div>

          {/* Row 3 — full-width card */}
          <motion.div
            {...anim(0.3)}
            className={`${cardBase} md:flex-row md:items-center md:justify-between`}
          >
            <div className="flex items-start gap-5 md:items-center">
              <div className={iconBox}>
                <Wrench className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                  Continuous optimization and 24/7 technical oversight for zero downtime.
                </p>
              </div>
            </div>
            <Link to="/contact" className="mt-5 md:mt-0 shrink-0">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
