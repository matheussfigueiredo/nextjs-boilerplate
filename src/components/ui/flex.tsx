import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const flexVariants = cva("flex", {
  variants: {
    orientation: {
      vertical: "flex-col",
      "vertical-reverse": "flex-col-reverse",
      horizontal: "flex-row",
      "horizontal-reverse": "flex-row-reverse",
    },
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    justify: {
      default: "justify-normal",
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      stretch: "justify-stretch",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    align: "center",
    justify: "default",
  },
});

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      orientation = "horizontal",
      align = "center",
      justify,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(flexVariants({ orientation, align, justify, className }))}
      />
    );
  }
);

Flex.displayName = "Flex";

export { Flex, flexVariants };
