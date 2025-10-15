import { Card } from "@/components/ui/card";
import { MapPin, Users, Briefcase, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
const EUMarket = () => {
  const {
    t
  } = useTranslation();
  const insights = [{
    icon: MapPin,
    title: t('euMarket.insights.location.title'),
    description: t('euMarket.insights.location.description')
  }, {
    icon: Users,
    title: t('euMarket.insights.diversity.title'),
    description: t('euMarket.insights.diversity.description')
  }, {
    icon: Briefcase,
    title: t('euMarket.insights.market.title'),
    description: t('euMarket.insights.market.description')
  }, {
    icon: TrendingUp,
    title: t('euMarket.insights.skills.title'),
    description: t('euMarket.insights.skills.description')
  }];
  return <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
      
    </section>;
};
export default EUMarket;