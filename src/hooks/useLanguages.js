import { useCallback, useState } from "react";
import en_US from "../languages/en-US.json";
import es_CO from "../languages/es-CO.json";

export function useLanguages() {
  const [locale, setLocale] = useState("en-US");
  const [messages, setMessages] = useState(en_US);

  const changeLanguage = useCallback((locale) => {
    switch (locale) {
      case "en-US":
        setLocale(locale);
        setMessages(en_US);
        break;
      case "es-CO":
        setLocale(locale);
        setMessages(es_CO);
        break;
      default:
        setLocale("en-US");
        setMessages(en_US);
    }
  }, []);

  return { changeLanguage, locale, messages };
}
