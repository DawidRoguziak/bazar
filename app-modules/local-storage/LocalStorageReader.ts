export default class LocalStorageReader {
    static read<T>(key: string): T | null {
        const data = window.localStorage.getItem(key);
        if (data) {
            return data as T;
        }

        return null;
    }

    static readJSON<T>(key: string): T | null {
        const item = window.localStorage.getItem(key);
        if (this.isJson(item)) {
            return JSON.parse(item as string);
        }
        return null;
    }

    private static isJson(item: string | null): boolean {
        if (!item) {
            return false;
        }

        try {
            JSON.parse(item as string);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
