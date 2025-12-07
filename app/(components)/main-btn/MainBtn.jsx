import { Button } from "@/components/ui/button";
import React from "react";

export default function MainBtn({ title, onClick, ...props }) {
  return (
    <Button
      variant={"default"}
      className={"main-btn relative"}
      onClick={onClick}
      {...props}
    >
      {title}
    </Button>
  );
}
