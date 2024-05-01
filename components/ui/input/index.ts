import { type VariantProps, cva } from "class-variance-authority";

export { default as Input } from "./Input.vue";

export const inputVariants = cva(
    "flex w-full px-[16px] py-[14px] border rounded-[6px] !mt-0",
    {
        variants: {
            variant: {
                default:
                    "border-bazarGray-100 bg-white placeholder-bazarGray-400  text-bazarGray-900",
                warning:
                    "border-bazarWarning  bg-white placeholder-bazarGray-400  text-bazarGray-900",
                error: "border-bazarDanger  bg-white placeholder-bazarGray-400  text-bazarGray-900",
                success:
                    "border-bazarPrimary  bg-white placeholder-bazarGray-400  text-bazarGray-900",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export type InputVariants = VariantProps<typeof inputVariants>;
