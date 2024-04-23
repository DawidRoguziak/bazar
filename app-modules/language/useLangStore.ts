import type { Ref } from "vue";
import LocalStorageWriter from "~/app-modules/local-storage/LocalStorageWriter";
import { LocalStorageKeys } from "~/app-modules/local-storage/LocalStorageKeys";
import LocalStorageReader from "~/app-modules/local-storage/LocalStorageReader";

type AppLanguages = "en-US" | "pl-PL";

type LanguageStore = {
    language: Ref<string>;
    availableLanguage: Ref<AppLanguages[]>;
    langMap: Ref<Record<string, string>>;
    setLanguage: (language: AppLanguages) => void;
    getLanguage: () => void;
};

export const useLangStore = defineStore("langStore", (): LanguageStore => {
    const language = ref<AppLanguages>("en-US");
    const availableLanguage = ref<AppLanguages[]>(["pl-PL", "en-US"]);
    const langMap = ref<Record<string, string>>({
        "en-US": "EN",
        "pl-PL": "PL",
    });

    const { setLocale } = useI18n();

    function setLanguage(newLang: AppLanguages) {
        language.value = newLang;
        setLocale(newLang);
        LocalStorageWriter.save(LocalStorageKeys.BAZAR_LANGUAGE_KEY, newLang);
    }

    function getLanguage() {
        const lang = LocalStorageReader.read(
            LocalStorageKeys.BAZAR_LANGUAGE_KEY
        );

        if (!lang) {
            setLanguage("en-US");
            return;
        }

        if (!availableLanguage.value.includes(lang as AppLanguages)) {
            setLanguage("en-US");
            return;
        }

        setLanguage(lang as AppLanguages);
    }

    return { language, availableLanguage, langMap, setLanguage, getLanguage };
});
