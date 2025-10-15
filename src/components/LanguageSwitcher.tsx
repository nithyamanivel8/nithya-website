import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'nl', label: 'NL' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ];

  return (
    <div className="flex items-center gap-2 rounded-full bg-muted/50 p-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={i18n.language === lang.code ? "default" : "ghost"}
          size="sm"
          className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
            i18n.language === lang.code
              ? "bg-primary text-primary-foreground shadow-sm"
              : "hover:bg-muted"
          }`}
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
