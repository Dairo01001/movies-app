import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import { useLanguages } from "../hooks/useLanguages";
import { LanguagesContext } from "./Contexts";

const LanguagesProvider = ({ children }) => {
  const { locale, messages, changeLanguage } = useLanguages();

  return (
    <LanguagesContext.Provider value={{ changeLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LanguagesContext.Provider>
  );
};

LanguagesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LanguagesProvider;
