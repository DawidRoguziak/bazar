import en from "~/langs/en";
import pl from "~/langs/pl";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en,
        pl,
    },
}));
