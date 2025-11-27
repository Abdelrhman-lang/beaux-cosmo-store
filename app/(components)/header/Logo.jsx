import { Menu } from "lucide-react";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Menu className="md:hidden" />
      <div>
        <img src="/logo_1.webp" alt="logo" />
      </div>
    </div>
  );
}
