import { Button } from "@/components/ui/button";
import React from "react";

export default function SecondryBtn({ title, onClick, ...props }) {
  return (
    <Button variant={"secondary"} onClick={onClick} {...props}>
      {title}
    </Button>
  );
}
