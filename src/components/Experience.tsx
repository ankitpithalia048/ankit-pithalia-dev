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
        "Led by example in enforcing code quality through PMD rules, SonarLint integration, and business logic documentation, significantly reducing technical debt and setting coding standards for the team.",
        "Spearheaded complex integrations including third-party SOAP APIs, Okta authentication and FTP with Quarkus—delivering high-impact solutions in record time, even in unfamiliar territories.",
        "Boosted backend performance by 70% through async processing and pagination, enabling faster data handling",
        "Earned stakeholder trust through consistent delivery, proactive testing, spike research, and ownership—leading to role extension, cross-team collaboration, and expansion of the team.",
        "Invested in continuous learning with hands-on exploration of Honeycomb, OTEL, and AI tools like AWS Q Developer, while mentoring peers and contributing to onboarding through documentation and knowledge transfer.",
      ],
      techStack: [
        "Java",
        "Quarkus",
        "AWS",
        "Spring Boot",
        "OpenTelemetry",
        "Grafana",
        "Honeycomb",
        "Okta",
        "Terraform",
        "CI/CD",
        "GitHub Actions",
      ],
    },
    {
      period: "Aug 2021 – March 2023",
      title: "Associate Software Engineer",
      company: "TEKsystems Global Services",
      location: "Remote",
      achievements: [
        "Quickly ramped up on ReactJS, contributing as a key developer for a multi-tenant SaaS-based UI renderer project",
        "Designed a JSON-driven configuration model for UI rendering, enabling scalable and reusable components across tenants",
        "Implemented multilingual support with zero defects, completing ahead of schedule and improving localization strategy",
        "Successfully deployed first MTMP tenant to production with zero support tickets, receiving client appreciation",
        "Demonstrated strong business acumen by quickly learning ReactJS, delivering a functional application in a short span, and earning client appreciation for quality and customer-centric solutions",
      ],
      techStack: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "HTML/CSS",
        "JSON",
        "Multi-tenant Architecture",
      ],
    },
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
            A track record of delivering impactful solutions and driving
            technical excellence across diverse projects.
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
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 text-primary font-medium mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="break-words">{exp.period}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground break-words mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          <span className="break-words">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="break-words">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 bg-accent/10 p-3 rounded-lg self-start">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-4">
                      Key Achievements:
                    </h4>
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
                          <span className="break-words">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                          }}
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
