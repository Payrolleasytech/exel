import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer transform origin-center hover:scale-102",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[#2E5C7A] hover:text-white",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-primary hover:bg-[#D0E1F2] hover:text-primary text-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        form: "bg-white text-primary hover:text-primary hover:border-primary hover:outline-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
  href?: string;        // ✅ navigation
  isPrimary?: boolean;  // ✅ semantic variant
}

const ButtonExel = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, text, children, href, isPrimary, ...props }, ref) => {
    // Priority: isPrimary > variant > default
    const selectedVariant = isPrimary ? "default" : variant;

    const buttonClass = clsx(
      buttonVariants({ variant: selectedVariant, size, className })
    );

    const content = text || children;

    // ✅ Render Link + <a> if href is provided
    if (href) {
      return (
        <Link href={href} className={buttonClass}>
          {content}
        </Link>
      );
    }

    // ✅ Otherwise render a normal <button>
    return (
      <button className={buttonClass} ref={ref} {...props}>
        {content}
      </button>
    );
  }
);

ButtonExel.displayName = "Button";

export { ButtonExel, buttonVariants };
