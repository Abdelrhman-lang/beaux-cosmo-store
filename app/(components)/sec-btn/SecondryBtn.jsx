import { Button } from "@/components/ui/button";
import React from "react";

export default function SecondryBtn({ title, onClick, type, ...props }) {
  return (
    <Button variant={"secondary"} onClick={onClick} type={type} {...props}>
      {title}
    </Button>
  );
}
