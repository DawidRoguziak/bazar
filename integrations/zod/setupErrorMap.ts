import { z } from "zod";

export function setupErrorMap(t: any) {
    const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
        console.log("=-----------------------");
        console.log(issue.code === z.ZodIssueCode.custom);
        console.log(issue.message === "Input not instance of File");

        if (
            issue.code === z.ZodIssueCode.custom &&
            issue.message === "Input not instance of File"
        ) {
            return {
                message: t("validation.required"),
            };
        }

        if (
            issue.code === z.ZodIssueCode.invalid_type &&
            ctx.defaultError === "Required"
        ) {
            return {
                message: t("validation.required"),
            };
        }

        if (issue.code === z.ZodIssueCode.too_small) {
            return {
                message: t("validation.min_length", {
                    l: issue?.minimum ?? "ERROR",
                }),
            };
        }

        if (issue.code === z.ZodIssueCode.too_big) {
            return {
                message: t("validation.max_length", {
                    l: issue.maximum ?? "ERROR",
                }),
            };
        }

        return { message: ctx.defaultError };
    };

    z.setErrorMap(customErrorMap);
}
