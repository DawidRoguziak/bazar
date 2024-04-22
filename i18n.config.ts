import en from "~/app-modules/language/langs/en";
import pl from "~/app-modules/language/langs/pl";

export default defineI18nConfig(() => ({
    legacy: false,
    strategy: "no_prefix",
    defaultLocale: "en-US",
    detectBrowserLanguage: false,
    messages: {
        "en-US": en,
        "pl-PL": pl,
    },
}));
