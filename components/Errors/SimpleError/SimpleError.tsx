import { Button } from "@/components/Buttons";
import { ComponentProps } from "react";

interface SimpleError {
  onReload: ComponentProps<typeof Button>["onClick"];
  testIds: {
    containerTestId: string;
    buttonTestId: string;
  };
}

export function SimpleError(props: SimpleError) {
  return (
    <div
      data-testid={props.testIds.containerTestId}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p style={{ marginBottom: "10px" }}>
        Ops! Something wrong happened. Please Try Agay
      </p>
      <Button
        data-testid={props.testIds.buttonTestId}
        $size="large"
        onClick={props.onReload}
      >
        Reload
      </Button>
    </div>
  );
}
