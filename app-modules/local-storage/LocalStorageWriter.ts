export default class LocalStorageWriter {
    static save(key: string, data: string): void {
        window.localStorage.setItem(key, data);
    }

    static clear(key: string): void {
        window.localStorage.removeItem(key);
    }

    static saveJSON(key: string, data: any): void {
        if (typeof data === "object") {
            window.localStorage.setItem(key, JSON.stringify(data));
        }
    }
}
