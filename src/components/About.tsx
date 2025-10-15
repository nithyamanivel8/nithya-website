import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return <section id="about" className="py-20 px-4 bg-background">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
          {t('about.title')}
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t('about.para1').replace('4 years of experience', '<span class="font-semibold text-foreground">4 years of experience</span>') }} />

          <p dangerouslySetInnerHTML={{ __html: t('about.para2').replace('Technical, Product, and Data & AI hiring', '<span class="font-semibold text-foreground">Technical, Product, and Data & AI hiring</span>') }} />

          <p dangerouslySetInnerHTML={{ __html: t('about.para3').replace('The human connection.', '<span class="font-semibold text-foreground">The human connection.</span>') }} />

          <p className="text-xl font-medium text-primary italic pt-4">
            "{t('about.quote')}"
          </p>
        </div>
      </div>
    </section>;
};
export default About;