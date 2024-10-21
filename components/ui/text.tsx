import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";


const typoVariants = cva("", {
	variants: {
		variant: {
			default: "scroll-m-20 font-extrabold tracking-tight",
			fossday: "font-pixelify capitalize",
		},
		size: {
			h1: "font-extrabold text-7xl md:text-9xl",
			h2: "font-bold text-4xl capitalize md:text-6xl text-center",
			p: "text-xl md:text-2xl",
			span: "text-lg",
		},
        coloring: {
			white: "text-white",
            "fossday-yellow": "text-yellow-300 [text-shadow:1px_1px_orange]",
            "fossday-white": "text-white [text-shadow:4px_4px_hsl(var(--fossday-border))]",
            "fossday-white1": "text-white [text-shadow:1px_1px_hsl(var(--fossday-border))]"
        }
	},
	defaultVariants: {
		coloring: "white",
		variant: "default",
		size: "h1",
	},
});

export interface HeadProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof typoVariants> {
}

export const Text = React.forwardRef<HTMLHeadingElement, HeadProps>(
	({ className, variant, size, coloring, ...props }, ref) => {
        const Slot = size ?? "h1"
		return (
			<Slot
				ref={ref}
				{...props}
				className={cn(
					typoVariants({
						variant,
                        size,
						className,
                        coloring,
					})
				)}
			/>
		);
	},
);
