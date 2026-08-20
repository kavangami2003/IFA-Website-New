import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-[6px] font-display font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-dark focus-visible:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        // Champagne = the single primary action
        primary: "bg-stone text-charcoal hover:bg-champagne-deep",
        dark: "bg-charcoal text-white hover:bg-charcoal-card",
        ghost: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
        onDark: "bg-stone text-charcoal hover:bg-champagne-deep",
      },
      size: {
        md: "px-6 py-3 text-[15px]",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = VariantProps<typeof button> &
  ComponentProps<typeof Link> & { className?: string };

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <Link className={cn(button({ variant, size }), className)} {...props} />;
}
