import { Button } from "@/components/ui/button";
import React from "react";

export default function MainBtn({ title }) {
  return (
    <Button variant={"default"} className={"main-btn relative"}>
      {title}
    </Button>
  );
}
