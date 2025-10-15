import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    title: "HR & Talent Acquisition Specialist",
    company: "Zitro Games",
    companyUrl: "https://zitrogames.com/",
    location: "Bangalore, India",
    period: "Dec 2024 – Aug 2025",
    highlights: [
      "Led end-to-end recruitment for technical and product roles using Zoho & Workday ATS",
      "Launched hiring for 2 new game studios, delivering 25+ hires across engineering, product, creative, and QA within 3 months",
      "Cut average hiring cycle by 38% (45 → 28 days) through structured interview processes and ATS optimization",
      "Achieved 100% fill rate across all seniority levels with targeted hiring strategies",
      "Partnered with C-suite to define operational goals, headcount estimates, and phased recruitment roadmaps"
    ],
    color: "from-primary/10 to-primary/5"
  },
  {
    title: "Human Resources Associate",
    company: "Prescience Decision Solutions",
    companyUrl: "https://prescienceds.com/",
    location: "Bangalore, India",
    period: "Mar 2022 – Dec 2024",
    highlights: [
      "Scaled workforce by 73% in 24 months, hiring 120+ professionals across product, analytics, and delivery teams",
      "Built Data & AI team from scratch, reducing time-to-fill for niche data science roles from 40 to 25 days",
      "Implemented Zoho Recruit ATS and optimized workflows for better candidate experience",
      "Improved joining ratios to 90%+ through enhanced candidate engagement and streamlined onboarding",
      "Won Team of the Year Award (2023-24) and Individual Contributor Award for impact hiring"
    ],
    color: "from-secondary/10 to-secondary/5"
  },
  {
    title: "Recruitment Consultant",
    company: "Pan Asia Resources",
    companyUrl: "https://panasiagroup.net/",
    location: "APAC Region",
    period: "Sep 2021 – Mar 2022",
    highlights: [
      "Managed regional recruitment across 5 countries in Asia-Pacific",
      "Conducted offer negotiations and facilitated cross-border hiring",
      "Built strong vendor partnerships for specialized talent sourcing",
      "Delivered consistent results in fast-paced, deadline-driven environment"
    ],
    color: "from-accent/10 to-accent/5"
  }
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {t('experience.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          {t('experience.subtitle')}
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`p-6 md:p-8 bg-gradient-to-br ${exp.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                    {exp.title}
                  </h3>
                  <a 
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary mb-1 hover:underline inline-flex items-center gap-1 group"
                  >
                    {exp.company}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5 flex-shrink-0">●</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
