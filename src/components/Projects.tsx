import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Zap, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cloud Migration & AWS Integration – UNFI & Genesys",
      role: "Senior Software Engineer",
      company: "TEKsystems",
      description: "Built an enterprise-grade integration platform migrating from on-premises to AWS cloud infrastructure.",
      icon: <Zap className="w-6 h-6" />,
      achievements: [
        "Optimized data flow with async processing and pagination - 70% performance boost",
        "Developed distributed tracing with OpenTelemetry and Grafana - 50% faster issue resolution",
        "Integrated SOAP APIs, Okta authentication, and FTP solutions - 60% security improvement",
        "Achieved 90%+ test coverage with Groovy Spock and automated testing",
        "AI-assisted development with AWS Q Developer - 40% reduction in debugging time"
      ],
      techStack: ["Java", "Quarkus", "AWS", "AWS S3", "AWS Lambda", "AWS ECS","AWS EKS","AWS EventBridge", "OpenTelemetry", "Grafana", "Honeycomb", "Groovy Spock", "Postman", "Terraform", "AWS Cloudformation", "GitHub", "Compass"],
      metrics: {
        performance: "70%",
        coverage: "90%",
        security: "60%"
      }
    },
    {
      title: "Ascension Multi-Tenant Web App",
      role: "Frontend Developer", 
      company: "TEKsystems",
      description: "Developed a ReactJS-based multi-tenant configurable web platform for enterprise applications.",
      icon: <Users className="w-6 h-6" />,
      achievements: [
        "Developed 70% of configurable UI components using React architecture",
        "Researched and implemented JSON-based configuration paradigm",
        "Collaborated with cross-functional teams to drive operational improvements",
        "Enhanced customer satisfaction through efficient system implementations"
      ],
      techStack: ["ReactJS", "JavaScript", "HTML5", "CSS3", "JSON Configuration", "Multi-tenant Architecture", "GitLab"],
      metrics: {
        configurable: "70%",
        efficiency: "100%",
        satisfaction: "High"
      }
    }
  ];

  const achievements = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Performance Optimization",
      value: "70%",
      description: "Average performance improvement across projects"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Code Coverage",
      value: "90%+",
      description: "Test coverage maintained across all projects"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Collaboration",
      value: "100%",
      description: "Successful cross-functional project delivery"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
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
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing impactful enterprise solutions that drove significant business value and technical excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {project.role} • {project.company}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: metricIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-3 bg-primary/5 rounded-lg"
                      >
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center card-hover p-6"
            >
              <div className="mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{achievement.value}</div>
              <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;