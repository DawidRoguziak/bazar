import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { DataTablePagination } from "~/components/generic/data/DataTablePagination";
import type { DataTableList } from "~/components/generic/data/DataTableList";

export type Brand = {
    guid: string;
    name: string;
    logo_url?: string;
    logo_file?: File;
};

export const BrandsRepository = (fetch: $Fetch<any, NitroFetchRequest>) => ({
    async getList<T = Brand>(
        pagination: DataTablePagination,
        search: string | undefined = undefined
    ): Promise<DataTableList<T>> {
        const query: Record<string, unknown> = {
            page_number: pagination.pageIndex,
            page_size: pagination.pageSize,
            pages_count: pagination.pageCount,
        };

        if (search) {
            query.search = search;
        }

        return fetch<DataTableList<T>>("/api/brands", {
            method: "GET",
            query,
        });
    },

    async uploadFile(file: File): Promise<{ file_url: string }> {
        const formData = new FormData();

        formData.append("file", file);

        return fetch("/api/brand-logos", {
            method: "POST",
            "Content-Type": "multipart/form-data",
            body: formData,
        });
    },

    async create(data: Partial<Brand>): Promise<Brand> {
        let fileUploadResult = null;
        if (data.logo_file) {
            fileUploadResult = await this.uploadFile(data.logo_file);
        }

        if (!fileUploadResult?.file_url) {
            return Promise.reject("Cannot upload file");
        }

        return fetch("/api/brands", {
            method: "POST",
            body: {
                name: data.name,
                logo_url: fileUploadResult?.file_url,
            },
        });
    },

    async deleteBrand(guid: string): Promise<void> {
        return fetch(`/api/brands/${guid}`, {
            method: "DELETE",
        });
    },

    async edit(brand: Brand): Promise<Brand> {
        let fileUploadResult = null;
        if (brand.logo_file) {
            fileUploadResult = await this.uploadFile(brand.logo_file);
        }

        if (!fileUploadResult?.file_url) {
            return Promise.reject("Cannot upload file");
        }

        return fetch(`/api/brands/${brand.guid}`, {
            method: "PUT",
            body: {
                ...brand,
                logo_url: fileUploadResult?.file_url,
            },
        });
    },
});
