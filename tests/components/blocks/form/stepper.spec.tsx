import { Stepper, StepperItem } from "@/components/blocks/stepper";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

const makeSut = (
  steps: StepperItem[] = [],
  activeStep: number = 0,
  setStep: (step: number) => void = vi.fn()
): React.ReactNode => {
  return <Stepper steps={steps} activeStep={activeStep} setStep={setStep} />;
};

const mockedData = () => {
  return [
    {
      id: "personal-information",
      title: "Personal Information",
      description: "Name and address.",
    },
    {
      id: "account-settings",
      title: "Account Settings",
      description: "Username and password.",
    },
    {
      id: "payment-details",
      title: "Payment Details",
      description: "Payment method.",
    },
  ];
};

vi.mock("lucide-react", () => ({
  CheckIcon: () => <div>CheckIcon</div>,
}));

describe("Stepper Component", () => {
  const steps = mockedData();

  it("should render the steps correctly", () => {
    render(makeSut(steps, 0));

    expect(screen.getByText("Personal Information")).toBeDefined();
    expect(screen.getByText("Account Settings")).toBeDefined();
    expect(screen.getByText("Payment Details")).toBeDefined();
  });

  it("should call the setStep function when a step is clicked", () => {
    const setStepMock = vi.fn();
    render(makeSut(steps, 0, setStepMock));

    const step2 = screen.getByText("Account Settings");
    fireEvent.click(step2);

    expect(setStepMock).toHaveBeenCalledWith(1);
  });
});
