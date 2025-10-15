import { Card } from "@/components/ui/card";
import { 
  Users, Target, Briefcase, Settings, 
  Search, UserCheck, TrendingUp, Globe,
  Database, Zap, FileCheck, Award
} from "lucide-react";
import { useTranslation } from "react-i18next";

const skillCategories = [
  {
    title: "Recruitment & Sourcing",
    icon: Search,
    skills: [
      "Technical Hiring",
      "Product & Analytics Hiring",
      "Leadership Hiring",
      "Data & AI Team Building",
      "Startup Hiring",
      "Boolean Search",
      "Talent Sourcing & Screening",
      "Behavioural Interviews"
    ]
  },
  {
    title: "HR Operations",
    icon: Settings,
    skills: [
      "Full-Cycle Recruitment",
      "Offer Negotiation",
      "Onboarding",
      "Background Verification",
      "Pipeline Development",
      "Employee Retention",
      "Reporting & Dashboards"
    ]
  },
  {
    title: "Stakeholder Management",
    icon: Users,
    skills: [
      "C-level Collaboration",
      "Vendor Management",
      "Cross-Functional Teams",
      "Talent Management",
      "Performance Management",
      "Professional Networking"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Database,
    skills: [
      "Zoho Recruit",
      "Workday",
      "LinkedIn Recruiter",
      "Naukri",
      "Monster",
      "Jira",
      "Glassdoor",
      "ATS Optimization"
    ]
  }
];

const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {t('skills.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          {t('skills.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-card to-muted/30 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-primary/5 hover:bg-primary/10 text-foreground rounded-full text-sm font-medium transition-colors duration-200 border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
