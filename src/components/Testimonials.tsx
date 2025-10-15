import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Raquel Grillo",
      role: "International HR Specialist",
      company: "Zitro Games",
      text: t('testimonials.raquel')
    },
    {
      name: "Soumyaranjan Chaini",
      role: "Growth at Prescience",
      company: "Prescience Decision Solutions",
      text: t('testimonials.soumya')
    },
    {
      name: "Vidya Naik",
      role: "Head of Talent Acquisition",
      company: "Prescience Decision Solutions",
      text: t('testimonials.vidya')
    },
    {
      name: "Anirban Majumder",
      role: "Co-Founder",
      company: "Prescience Decision Solutions",
      text: t('testimonials.anirban')
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-accent/10 overflow-hidden">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          {t('testimonials.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          {t('testimonials.subtitle')}
        </p>

        <div className="relative">
          <div className="flex gap-6 animate-scroll-horizontal pb-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[400px] p-6 bg-card/80 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
