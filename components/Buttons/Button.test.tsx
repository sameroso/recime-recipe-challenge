import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { AppProvider } from "@/providers/appProvider";
import { Button } from "./Button";

describe("Page", () => {
  it("should snapshot a  medium button", () => {
    const { container } = render(
      <AppProvider>
        <Button />
      </AppProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should snapshot a medium button", () => {
    const { container } = render(
      <AppProvider>
        <Button $size="medium" />
      </AppProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should snapshot a large button", () => {
    const { container } = render(
      <AppProvider>
        <Button $size="large" />
      </AppProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should snapshot a small button", () => {
    const { container } = render(
      <AppProvider>
        <Button $size="small" />
      </AppProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should snapshot a primary button", () => {
    const { container } = render(
      <AppProvider>
        <Button $variant="primary" />
      </AppProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
