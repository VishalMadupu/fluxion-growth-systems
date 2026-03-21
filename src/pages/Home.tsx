import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, ShoppingCart, Globe, TrendingUp, Film, Wrench } from "lucide-react";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Clients Worldwide" },
  { value: "900+", label: "Projects Delivered" },
];

const services = [
  { icon: Code2, title: "Web Development", desc: "Custom-built, high-performance websites engineered for scalability and speed." },
  { icon: ShoppingCart, title: "E-Commerce Platforms", desc: "Secure, conversion-focused online stores with seamless payment integrations." },
  { icon: Globe, title: "Web Applications", desc: "Scalable SaaS platforms and business applications tailored to your workflows." },
  { icon: TrendingUp, title: "SEO & Growth", desc: "Data-driven strategies to increase visibility, traffic, and conversions." },
  { icon: Film, title: "Creative & Media", desc: "High-quality video editing and visual storytelling for modern brands." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Continuous monitoring, updates, and performance optimization." },
];

const whyUs = [
  { title: "Engineering Excellence", desc: "We combine clean architecture with modern technologies." },
  { title: "Scalable Systems", desc: "Built to grow with your business." },
  { title: "Fast Execution", desc: "Agile workflows with predictable delivery timelines." },
];

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding !pt-32 !pb-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" />
        
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-[56px] font-bold leading-tight md:leading-[64px] max-w-4xl mx-auto mb-6">
              Engineering Scalable{" "}
              <span className="text-gradient">Digital Experiences</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
              We build high-performance websites, applications, and automation systems that drive real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-primary/90 transition-all glow-button inline-flex items-center gap-2 justify-center"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="border border-border text-foreground px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-secondary transition-colors inline-flex items-center justify-center"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <GlassCard key={s.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">{s.value}</div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section title="Our Services" subtitle="End-to-end digital solutions engineered for performance and growth.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <GlassCard key={s.title} delay={i * 0.08}>
              <s.icon className="text-primary mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Why Fluxion */}
      <Section title="Why Fluxion" subtitle="What sets us apart from the rest.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyUs.map((w, i) => (
            <GlassCard key={w.title} delay={i * 0.1}>
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{w.title}</h3>
              <p className="text-muted-foreground text-sm">{w.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 text-center rounded-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Powerful?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's turn your vision into a scalable digital reality.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-primary/90 transition-all glow-button inline-flex items-center gap-2"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Home;
