import type { Brand } from "~/app-modules/brands/types/Brand";

export function useBrandsApi() {
    async function saveBrandFile(file: File) {
        const formData = new FormData();

        formData.append("file", file);

        return $fetch("/api/brand-logos", {
            method: "POST",
            "Content-Type": "multipart/form-data",
            body: formData,
        });
    }

    async function submitBrand(newBrand: Brand) {
        let fileUploadResult = null;
        if (newBrand.logo_file) {
            fileUploadResult = await saveBrandFile(newBrand.logo_file);
        }

        console.log(fileUploadResult);
        return $fetch("/api/brands", {
            method: "POST",
            body: {
                name: newBrand.name,
                logo_url: fileUploadResult.file_url,
            },
        });
    }

    return {
        submitBrand,
    };
}
