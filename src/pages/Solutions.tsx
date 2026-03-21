import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Rocket, Building2, Workflow, Brain } from "lucide-react";

const solutions = [
  { icon: Rocket, title: "Startup Launch Systems", desc: "Go from idea to production-ready product with our rapid MVP development and launch framework." },
  { icon: Building2, title: "Enterprise Web Platforms", desc: "Robust, secure, and scalable web infrastructure designed for enterprise-grade reliability." },
  { icon: Workflow, title: "Automation & Workflow Systems", desc: "Streamline operations with custom automation pipelines that save time and reduce errors." },
  { icon: Brain, title: "AI-Driven Applications", desc: "Leverage machine learning and AI to build intelligent features that give you a competitive edge." },
];

const Solutions = () => {
  return (
    <div className="pt-16">
      <Section
        title="Solutions"
        subtitle="Purpose-built systems designed to solve real business challenges at scale."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <GlassCard key={s.title} delay={i * 0.1} className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <s.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Solutions;
