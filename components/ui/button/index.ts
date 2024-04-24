import { type VariantProps, cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary hover:bg-bazarHardPrimary !text-white",
                outline:
                    "!text-bazarPrimary bg-transparent border-[2px] border-bazarPrimary hover:border-bazarHardPrimary hover:!text-bazarHardPrimary",
                ghost: "bg-bazarPrimary/10 hover:bg-bazarHardPrimary/20 !text-bazarPrimary hover:!text-bazarHardPrimary",
                link: "text-primary underline-offset-4 hover:underline",
                text: "text-bazarPrimary hover:border-bazarHardPrimary",
            },
            size: {
                default:
                    "text-body-semiBold-s leading-[17px] py-[14px] px-[32px] rounded-[43px]",
                sm: " text-body-semiBold-t py-[10px] px-[24px] rounded-[43px]",
                lg: "text-body-semiBold-m leading-[20px]  py-[16px] px-[40px] rounded-[43px]",
                icon: "flex justify-center w-[40px] h-[40px] rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
