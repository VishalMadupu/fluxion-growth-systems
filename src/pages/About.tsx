import { motion } from "framer-motion";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import { Target, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Every project begins with understanding your business goals and engineering solutions that deliver measurable outcomes." },
  { icon: Lightbulb, title: "Innovation First", desc: "We leverage cutting-edge technologies and modern architectures to build future-proof digital systems." },
  { icon: Users, title: "Partnership Model", desc: "We work as an extension of your team, providing transparent communication and agile delivery." },
];

const About = () => {
  return (
    <div className="pt-16">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl md:text-[48px] font-bold leading-tight mb-6">
            About <span className="text-gradient">Fluxion</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fluxion is a premium digital engineering studio specializing in scalable web platforms, 
            high-performance applications, and growth-driven digital ecosystems. With over a decade 
            of experience, we've helped startups and enterprises alike turn complex challenges into 
            elegant, reliable solutions.
          </p>
        </motion.div>
      </Section>

      <Section title="Our Values" subtitle="The principles that guide every decision we make.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <GlassCard key={v.title} delay={i * 0.1}>
              <v.icon className="text-primary mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <GlassCard hover={false} className="text-center !p-12 md:!p-16">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We follow a rigorous engineering process: deep discovery, strategic planning, 
            iterative development, and continuous optimization. Every line of code is written 
            with performance, scalability, and maintainability in mind.
          </p>
        </GlassCard>
      </Section>
    </div>
  );
};

export default About;
