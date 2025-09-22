// Global type overrides for Raycast API compatibility with React 18

declare module "@raycast/api" {
  import { ReactElement, ReactNode } from "react";

  // Override the JSX component signatures to be compatible with React 18
  export const List: any;
  export const ActionPanel: any;
  export const Action: any;
  export const Icon: any;
  export const Toast: any;
  export function showToast(options: any): void;
  export function showHUD(message: string): void;
  export function getPreferenceValues<T>(): T;
}