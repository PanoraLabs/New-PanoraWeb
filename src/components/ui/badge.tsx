import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // ── Standard shadcn variants (use semantic CSS tokens) ──
        default:
          "bg-primary text-primary-foreground rounded-full px-2.5 py-0.5 text-xs hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5 text-xs hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground rounded-full px-2.5 py-0.5 text-xs hover:bg-destructive/80",
        outline:
          "border border-border text-foreground rounded-full px-2.5 py-0.5 text-xs",
        ghost:
          "text-muted-foreground rounded-full px-2.5 py-0.5 text-xs hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline text-xs",
        // ── Custom project variants ──
        hero:
          "gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full py-[6px] pl-2 pr-4 text-[13px] text-white/80",
        vault:
          "gap-1.5 bg-mist rounded-full px-3 py-1 text-[12px] text-moss",
        live:
          "gap-1.5 text-[12px] text-sprout",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
