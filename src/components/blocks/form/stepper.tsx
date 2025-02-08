"use client";

import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import React from "react";

type StepperDirection = "horizontal" | "vertical";

type StepperVariant = "current" | "concluded" | "empty" | "last";

export type StepperItem = {
  id: string;
  title?: string;
  description?: string;
  component?: React.ReactNode;
  direction?: StepperDirection;
};

export interface StepperProps extends React.HTMLAttributes<HTMLOListElement> {
  steps: StepperItem[];
  activeStep?: number;
  direction?: StepperDirection;
  isTouchable?: boolean;
  setStep?: (index: number) => void;
}

const Stepper = React.forwardRef<HTMLOListElement, StepperProps>(
  (
    {
      direction = "horizontal",
      isTouchable = true,
      setStep,
      steps,
      activeStep,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <ol
        {...props}
        ref={ref}
        className={cn(
          "flex mx-auto h-[200px] items-center w-full text-sm font-medium text-center sm:text-base",
          direction.includes("vertical") &&
            "flex-col h-auto w-auto mx-0 sticky top-0",
          className
        )}
      >
        {steps.map((step, idx) => {
          let variant: StepperVariant = "empty";
          const isLast = idx === steps.length - 1;

          if (idx < activeStep!) variant = "concluded";
          if (idx === activeStep) variant = "current";

          return (
            <StepperTrigger
              key={`step-${step.id}`}
              variant={isLast ? "last" : variant}
              onClick={() => isTouchable && setStep?.(idx)}
              className={cn(
                direction.includes("vertical") &&
                  "h-[200px] w-[120px] mr-auto items-start flex-col after:mx-5 after:my-16 justify-start after:py-10 after:w-0.5 after:h-auto after:bottom-0"
              )}
            >
              <div className="group hover:cursor-pointer transition-all w-auto relative flex flex-col justify-center items-center gap-0.5">
                <StepperIndicator variant={variant} />
                <div className="absolute top-12 flex items-center flex-col">
                  {step.title && (
                    <h5 className="!my-0 text-base font-medium">
                      {step.title}
                    </h5>
                  )}
                  {step.description && (
                    <p className="!my-0 whitespace-nowrap text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            </StepperTrigger>
          );
        })}
      </ol>
    );
  }
);

Stepper.displayName = "Stepper";

interface StepperTriggerProps extends React.HTMLAttributes<HTMLLIElement> {
  variant: StepperVariant;
}

const StepperTrigger = React.forwardRef<HTMLLIElement, StepperTriggerProps>(
  ({ variant = "empty", className, ...props }, ref) => {
    if (variant.includes("empty")) {
      return (
        <li
          {...props}
          ref={ref}
          className={cn(
            "transition-all flex md:w-full items-center after:content-[''] after:w-full after:h-0.5 after:rounded-sm after:border-b after:border-border after:bg-muted-foreground/25 after:hidden sm:after:inline-block",
            className
          )}
        />
      );
    }

    if (variant.includes("current")) {
      return (
        <li
          {...props}
          ref={ref}
          className={cn(
            "transition-all flex md:w-full items-center after:content-[''] after:w-full after:h-0.5 after:rounded-sm after:border-b after:border-border after:bg-muted-foreground/25 after:hidden sm:after:inline-block",
            className
          )}
        />
      );
    }

    if (variant.includes("concluded")) {
      return (
        <li
          {...props}
          ref={ref}
          className={cn(
            "transition-all flex md:w-full items-center sm:after:content-[''] after:w-full after:h-0.5 after:rounded-sm after:border-b after:border-primary after:bg-primary after:hidden sm:after:inline-block",
            className
          )}
        />
      );
    }

    if (variant.includes("last")) {
      return (
        <li
          {...props}
          ref={ref}
          className={cn("flex items-center", className)}
        />
      );
    }
  }
);

StepperTrigger.displayName = "StepperTrigger";

interface StepperIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: StepperVariant;
}

const StepperIndicator = React.forwardRef<
  HTMLSpanElement,
  StepperIndicatorProps
>(({ variant = "empty", className, ...props }, ref) => {
  if (variant.includes("concluded")) {
    return (
      <span
        {...props}
        ref={ref}
        className={cn(
          "transition-all bg-primary group-hover:bg-primary/90 group-hover:border-primary/25 border-2 border-primary size-10 text-center text-background flex items-center justify-center text-lg rounded-full",
          className
        )}
      >
        <CheckIcon size={20} />
      </span>
    );
  }

  if (variant.includes("current")) {
    return (
      <span
        {...props}
        ref={ref}
        className={cn(
          "transition-all bg-background border-2 border-primary group-hover:border-primary/90 size-10 text-center text-primary flex items-center justify-center text-lg rounded-full",
          className
        )}
      >
        <span className="transition-all flex items-center rounded-full justify-center bg-primary group-hover:bg-primary/90 group-hover:border-primary/25 border border-primary size-8">
          <span className="transition-all size-3.5 border border-background group-hover:bg-primary/10 bg-primary rounded-full" />
        </span>
      </span>
    );
  }

  if (variant.includes("empty")) {
    return (
      <span
        {...props}
        ref={ref}
        className={cn(
          "transition-all bg-background group-hover:bg-primary/5 border-2 border-muted-foreground/25 size-10 text-center text-primary flex items-center justify-center text-lg rounded-full",
          className
        )}
      >
        <span className="transition-all bg-muted-foreground/25 border border-muted-foreground/05 size-3.5 rounded-full" />
      </span>
    );
  }
});

StepperIndicator.displayName = "StepperIndicator";

export { Stepper };
