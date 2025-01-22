import { ButtonHTMLAttributes } from "react";

declare global {
  interface FooBar {
    id: number;
    test: string;
  }

  interface ActionType extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
  }
}

export {};
