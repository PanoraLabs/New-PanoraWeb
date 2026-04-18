import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // ── Standard shadcn variants (use semantic CSS tokens) ──
        default:
          "bg-primary text-primary-foreground rounded-full hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(13,43,26,0.2)]",
        secondary:
          "bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90",
        outline:
          "bg-transparent text-primary border border-primary/30 rounded-full hover:border-primary hover:bg-primary/5",
        ghost:
          "bg-transparent text-primary hover:bg-accent hover:text-accent-foreground rounded-full",
        link:
          "text-primary underline-offset-4 hover:underline p-0",
        // ── Custom project variants ──
        primary:
          "bg-forest text-white rounded-full hover:bg-moss hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(13,43,26,0.2)]",
        moss:
          "bg-moss text-white rounded-xl hover:bg-forest",
        nav:
          "bg-moss text-white rounded-full hover:bg-forest hover:-translate-y-px",
        "hero-cta":
          "bg-sprout text-forest rounded-full hover:bg-[#4dab6a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(93,187,122,0.35)] font-semibold",
        "hero-ghost":
          "bg-transparent text-white/80 border border-white/25 rounded-full hover:border-white/60 hover:text-white hover:bg-white/8",
      },
      size: {
        // Standard shadcn sizes
        default: "px-8 py-[14px] text-[15px]",
        xs:      "px-3 py-1 text-xs",
        sm:      "px-4 py-2 text-sm",
        lg:      "px-10 py-4 text-base",
        icon:       "h-9 w-9",
        "icon-xs":  "h-6 w-6",
        "icon-sm":  "h-8 w-8",
        "icon-lg":  "h-11 w-11",
        // Custom sizes
        nav:  "px-6 py-[10px] text-sm",
        full: "w-full py-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
