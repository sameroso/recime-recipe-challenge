import { Button } from "@/components/Buttons";
import { ComponentProps } from "react";

interface SimpleError {
  onReload: ComponentProps<typeof Button>["onClick"];
}

export function SimpleError(props: SimpleError) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p style={{ marginBottom: "10px" }}>
        Ops! Something wrong happened. Please Try Agay
      </p>
      <Button $size="large" onClick={props.onReload}>
        Reload
      </Button>
    </div>
  );
}
