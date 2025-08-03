import { motion } from "framer-motion";
import { Code, Cloud, Database, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Expert in Java, Spring Boot, ReactJS, and modern web technologies",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description:
        "AWS certified with hands-on experience in serverless and containerized solutions",
    },
    {
      icon: Database,
      title: "System Design",
      description:
        "Designing scalable, resilient systems with proper observability and monitoring",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Passionate about adopting new technologies and solving complex problems",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Designing Solutions,{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Not Just Visuals
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Result-oriented Software Developer with 4+ years of experience in
              full-stack development. Skilled in Java, AWS, DevOps, and
              enterprise software architecture. Passionate about writing clean,
              testable code and solving real-world problems with scalable
              technology.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Profile Image Container */}
            <div className="relative mx-auto w-80 h-80 mb-8">
              {/* Animated Background Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20"
              />

              {/* Profile Image Placeholder */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-6xl font-bold">
                <img
                  src="/about.png"
                  alt="Profile about picture of Ankit Kumar Pithalia"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">☁️</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">💡</span>
              </motion.div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="card-hover p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="card-hover p-6 text-center"
              >
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="card-hover p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">70%</div>
                <div className="text-sm text-muted-foreground">
                  Performance Boost
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="card-hover p-6 text-center"
              >
                <div className="text-3xl font-bold text-accent mb-2">90%</div>
                <div className="text-sm text-muted-foreground">
                  Test Coverage
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
