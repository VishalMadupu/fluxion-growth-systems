import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Code2, ShoppingCart, Globe, TrendingUp, Film, Wrench } from "lucide-react";

const services = [
  { icon: Code2, title: "Web Development", desc: "Custom-built, high-performance websites engineered for scalability and speed. From landing pages to complex web portals, we deliver pixel-perfect, responsive experiences." },
  { icon: ShoppingCart, title: "E-Commerce Platforms", desc: "Secure, conversion-focused online stores with seamless payment integrations. We build storefronts that scale from first sale to millions in revenue." },
  { icon: Globe, title: "Web Applications", desc: "Scalable SaaS platforms and business applications tailored to your workflows. Real-time dashboards, admin panels, and customer-facing apps." },
  { icon: TrendingUp, title: "SEO & Growth", desc: "Data-driven strategies to increase visibility, traffic, and conversions. Technical SEO, content strategy, and performance optimization." },
  { icon: Film, title: "Creative & Media", desc: "High-quality video editing and visual storytelling for modern brands. Motion graphics, brand videos, and social media content." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Continuous monitoring, updates, and performance optimization. We keep your digital products running at peak performance 24/7." },
];

const Services = () => {
  return (
    <div className="pt-16">
      <Section
        title="Our Services"
        subtitle="Comprehensive digital solutions engineered for performance, scalability, and growth."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <GlassCard key={s.title} delay={i * 0.08}>
              <s.icon className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
