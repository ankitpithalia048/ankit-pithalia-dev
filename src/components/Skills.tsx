import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "🖥️",
      skills: ["Java", "Spring Boot", "Quarkus", "Groovy Spock", "REST APIs", "Microservices"]
    },
    {
      title: "Frontend Development", 
      icon: "🎨",
      skills: ["ReactJS", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS (Lambda, S3, ECS)", "Terraform", "CloudFormation", "Docker", "CI/CD"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Postman", "OpenTelemetry", "Grafana", "Okta", "SOAP API"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "SQL Server"]
    },
    {
      title: "Testing & Quality",
      icon: "🧪",
      skills: ["JUnit", "Groovy Spock", "PMD", "SonarLint", "Unit Testing", "Integration Testing"]
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
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and best practices for building scalable, efficient software solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card-hover p-6 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Core Competencies</h3>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { skill: "Java & Spring Ecosystem", level: 95 },
              { skill: "AWS Cloud Services", level: 90 },
              { skill: "ReactJS & Frontend", level: 85 },
              { skill: "System Architecture", level: 88 },
              { skill: "DevOps & Automation", level: 82 }
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;