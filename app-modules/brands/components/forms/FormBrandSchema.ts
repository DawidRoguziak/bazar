import { object, string, z, ZodType } from "zod";
import { ACCEPTED_FILE_TYPES, MAX_UPLOAD_SIZE } from "~/constants/File";

export function getFromBrandSchema(t: Function): ZodType {
    return object({
        name: string().min(2).max(80),
        logo_url: string().optional(),
        logo_file: z
            .instanceof(File, { message: t("validation.required") })
            .optional(),
    }).superRefine(
        (
            args,
            ctx
        ): args is { name: string; logo_url: string; logo_file: File } => {
            if (!args.logo_url) {
                if (!args.logo_file) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: t("validation.required"),
                        path: ["logo_file"],
                    });

                    return z.NEVER;
                }

                console.log(args.logo_file?.size, MAX_UPLOAD_SIZE);
                if (MAX_UPLOAD_SIZE <= (args?.logo_file?.size ?? 0)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: t("validation.file_to_large", {
                            maxSize: MAX_UPLOAD_SIZE,
                        }),
                        path: ["logo_file"],
                    });

                    return z.NEVER;
                }

                if (
                    !ACCEPTED_FILE_TYPES.includes(args?.logo_file?.type ?? "")
                ) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: t("validation.we_accept_only", {
                            fileTypes: ACCEPTED_FILE_TYPES.join(","),
                        }),
                        path: ["logo_file"],
                    });
                }
            }

            return z.NEVER;
        }
    );
}
