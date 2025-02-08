import { UserAvatar } from "@/components";
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

const AVATAR_IMAGE_URL = "https://github.com/matheussatoshi.png";
const AVATAR_ALT = "Matheus Satoshi";
const SHORT_AVATAR_ALT = "MS";

describe("UserAvatar tests", () => {
  it("Should be renders short alt text", () => {
    render(<UserAvatar src={AVATAR_IMAGE_URL} alt={AVATAR_ALT} />);

    expect(screen.getByText(SHORT_AVATAR_ALT));
  });
});
