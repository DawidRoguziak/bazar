export function useBrandsApi() {
    async function saveBrandFile() {
        return $fetch("/api/brand-logo");
    }

    async function submitBrand() {
        const { data } = await saveBrandFile();
    }

    return {
        saveBrandFile,
    };
}
