import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "April 2023 – Present",
      title: "Senior Software Engineer",
      company: "TEKsystems Global Services",
      location: "Remote",
      achievements: [
        "Built scalable AWS-integrated systems, implemented async processing and pagination resulting in 70% performance boost",
        "Developed observability tools using Quarkus, OpenTelemetry, and Grafana, reducing issue resolution time by 50%",
        "Integrated third-party SOAP APIs, Okta authentication, and FTP solutions, improving application security by 60%",
        "Led code quality improvements with PMD, JavaDoc, and SonarLint, reducing technical debt by 60%",
        "Spearheaded AWS Q Developer integration, enabling AI-assisted development and reducing debugging by 40%"
      ],
      techStack: ["Java", "Quarkus", "AWS", "Spring Boot", "OpenTelemetry", "Grafana", "Okta"]
    },
    {
      period: "Aug 2021 – March 2023",
      title: "Associate Software Engineer", 
      company: "TEKsystems Global Services",
      location: "Remote",
      achievements: [
        "Developed multi-tenant web applications using ReactJS with 70% configurable UI components",
        "Analyzed and implemented JSON-based configuration paradigm for scalable application architecture",
        "Collaborated with cross-functional teams to drive operational improvements and enhance customer satisfaction",
        "Demonstrated strong problem-solving abilities with timely bug fixes and feature implementations"
      ],
      techStack: ["ReactJS", "JavaScript", "HTML/CSS", "AWS", "JSON", "Multi-tenant Architecture"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A track record of delivering impactful solutions and driving technical excellence across diverse projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20 pb-16 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                {/* Experience Card */}
                <div className="card-hover p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-primary font-medium mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-4">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium">
            <span>4+ Years of Excellence</span>
            <TrendingUp className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;