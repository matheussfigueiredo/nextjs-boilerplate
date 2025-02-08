import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
}));

describe("RootLayout", () => {
  it("should render the children inside the layout", () => {
    render(
      <RootLayout>
        <p>Test content</p>
      </RootLayout>
    );
    expect(screen.getByText("Test content")).toBeDefined();
  });

  it("should have the correct language attribute in html", () => {
    render(
      <RootLayout>
        <p>Test content</p>
      </RootLayout>
    );
    expect(document.documentElement.lang).toBe("en");
  });
});
