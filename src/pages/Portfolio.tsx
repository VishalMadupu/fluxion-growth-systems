import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { ExternalLink } from "lucide-react";
import bitsndbricksImg from "@/assets/portfolio-bitsndbricks.jpg";

const projects = [
  {
    title: "BitsndBricks",
    category: "Construction Tech",
    desc: "Next-gen platform connecting technology and construction — enabling professionals to find projects, bid on work, and connect with verified contractors seamlessly.",
    image: bitsndbricksImg,
    url: "https://bitsndbricks.com/",
  },
  { title: "AI Workflow Platform", category: "Web App", desc: "Intelligent automation platform with real-time dashboards and ML-powered insights.", image: null, url: null },
  { title: "E-commerce System", category: "E-commerce", desc: "Full-featured storefront with multi-currency support and advanced analytics.", image: null, url: null },
  { title: "SaaS Dashboard", category: "Web App", desc: "Enterprise analytics dashboard with real-time data visualization and role-based access.", image: null, url: null },
  { title: "Brand Identity Platform", category: "Creative", desc: "Digital asset management system with automated brand guideline enforcement.", image: null, url: null },
];

const Portfolio = () => {
  return (
    <div className="pt-16">
      <Section
        title="Our Work"
        subtitle="A selection of projects that showcase our engineering excellence."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <GlassCard
              key={p.title}
              delay={i * 0.1}
              className={`group cursor-pointer ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <a
                href={p.url || "#"}
                target={p.url ? "_blank" : undefined}
                rel={p.url ? "noopener noreferrer" : undefined}
                className="block"
              >
                <div className={`rounded-lg bg-secondary/50 mb-6 flex items-center justify-center overflow-hidden ${i === 0 ? "h-72" : "h-48"}`}>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={512}
                    />
                  ) : (
                    <div className="text-muted-foreground/30 text-6xl font-bold">
                      {p.title.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{p.category}</span>
                    <h3 className="text-lg font-semibold mt-1 mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm">{p.desc}</p>
                  </div>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-4" size={18} />
                </div>
              </a>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
