import type { Ref } from "vue";

type AppLanguages = "en-US" | "pl-PL";

type LanguageStore = {
    language: Ref<string>;
    availableLanguage: Ref<AppLanguages[]>;
    setLanguage: (language: AppLanguages) => void;
    getLanguage: () => void;
};

export const useLangStore = defineStore("langStore", (): LanguageStore => {
    const language = ref<AppLanguages>("en-US");
    const availableLanguage = ref<AppLanguages[]>(["pl-PL", "en-US"]);
    const { setLocale } = useI18n();

    function setLanguage(newLang: AppLanguages) {
        language.value = newLang;
        setLocale(newLang);
        window.localStorage.setItem("lang", newLang);
    }

    function getLanguage() {
        const lang = window.localStorage.getItem("lang");

        if (!availableLanguage.value.includes(lang as AppLanguages)) {
            setLanguage("en-US");
            return;
        }

        setLanguage(lang as AppLanguages);
    }

    return { language, availableLanguage, setLanguage, getLanguage };
});
