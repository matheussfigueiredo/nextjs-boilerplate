import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";

describe("Home Page", () => {
  it("renders Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeDefined();
  });

  it("renders deploy button", () => {
    render(<Home />);
    const deployButton = screen.getByText("Deploy now");
    expect(deployButton).toBeDefined();
  });

  it("renders footer links", () => {
    render(<Home />);
    expect(screen.getByText("Learn")).toBeDefined();
    expect(screen.getByText("Examples")).toBeDefined();
    expect(screen.getByText("Go to nextjs.org →")).toBeDefined();
  });
});
