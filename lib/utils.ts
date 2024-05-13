import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type NestedObject = { [key: string]: any };

export function getValueByPath(obj: NestedObject, path: string): any {
    const keys = path.split(".");

    // Recursive function to traverse the object
    function traverse(obj: NestedObject, keys: string[]): any {
        const key = keys.shift();
        if (key && obj.hasOwnProperty(key)) {
            if (keys.length === 0) {
                return obj[key];
            } else {
                return traverse(obj[key], keys);
            }
        } else {
            return undefined;
        }
    }

    return traverse(obj, keys);
}
