import { StepperItem } from "@/components/blocks/stepper";
import * as React from "react";

type UseStepperProps = {
  init?: number;
  steps: StepperItem[];
};

export function useStepper({ init = 0, steps }: UseStepperProps) {
  const [activeStep, setActiveStep] = React.useState<number>(init);

  const onNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const onPrev = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const render = () => steps[activeStep].component || null;

  return { onNext, onPrev, activeStep, setActiveStep, render };
}
