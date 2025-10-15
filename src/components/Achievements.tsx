import { Card } from "@/components/ui/card";
import { Award, FileCheck, Trophy, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const achievements = [
  {
    icon: Trophy,
    title: "Team of the Year (2023-24)",
    organization: "Prescience Decision Solutions",
    description: "Recognized for exceptional team performance and impact"
  },
  {
    icon: Star,
    title: "Individual Contributor Award",
    organization: "Prescience Decision Solutions",
    description: "Honored for impact hiring and outstanding recruitment results"
  }
];

const certifications = [
  {
    icon: FileCheck,
    title: "LinkedIn Recruiter: AI-Powered Talent Acquisition",
    provider: "LinkedIn Learning"
  },
  {
    icon: FileCheck,
    title: "Certified Naukri Maestro Recruiter",
    provider: "Naukri.com"
  },
  {
    icon: FileCheck,
    title: "Human Resource Management",
    provider: "University of Minnesota (Coursera)"
  }
];

const Achievements = () => {
  const { t } = useTranslation();
  
  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {t('achievements.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          {t('achievements.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary text-primary-foreground">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border border-border shadow hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-secondary/20 mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.provider}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
