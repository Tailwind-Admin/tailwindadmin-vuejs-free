import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primaryemphasis",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
        outlinesecondary:
          "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white",
        outlinesuccess:
          "border border-success bg-transparent hover:bg-success text-success hover:text-white",
        outlinewarning:
          "border border-warning bg-transparent hover:bg-warning text-warning hover:text-white",
        outlineinfo:
          "border border-info bg-transparent hover:bg-info text-info hover:text-white",
        outlineerror:
          "border border-error bg-transparent hover:bg-error text-error hover:text-white",
        outlinewhite:
          "bg-transparent border border-white hover:bg-white text-white hover:text-primary",
        secondary: "bg-secondary text-white hover:bg-secondaryemphasis",
        success: "bg-success text-white hover:bg-successemphasis",
        warning: "bg-warning text-white hover:bg-warningemphasis",
        info: "bg-info text-white hover:bg-infoemphasis",
        error: "bg-error text-white hover:bg-erroremphasis",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        ghostprimary: "hover:bg-lightprimary hover:text-primary text-primary",
        ghostsecondary:
          "hover:bg-lightsecondary hover:text-black text-secondary",
        ghostsuccess: "hover:bg-lightsuccess hover:text-success text-success",
        ghostwarning: "hover:bg-lightwarning hover:text-warning text-warning",
        ghosterror: "hover:bg-lighterror hover:text-error text-error",
        ghostinfo: "hover:bg-lightinfo hover:text-info text-info",
        link: "text-primary underline-offset-4 hover:underline",
        lightprimary:
          "bg-lightprimary text-primary hover:bg-primary hover:text-white",
        lightsecondary:
          "bg-lightsecondary text-secondary hover:bg-secondary hover:text-white",
        lightsuccess:
          "bg-lightsuccess text-success hover:bg-success hover:text-white",
        lightwarning:
          "bg-lightwarning text-warning hover:bg-warning hover:text-white",
        lightinfo: "bg-lightinfo text-info hover:bg-info hover:text-white",
        lighterror: "bg-lighterror text-error hover:bg-error hover:text-white",
        white: "bg-white text-primary hover:bg-white/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
