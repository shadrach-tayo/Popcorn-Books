import { render as renderUi } from "@testing-library/react";
import { ReactElement } from "react";
import AppProviders from "../context";

export function render(ui: ReactElement, { route, ...renderOptions}: { route: string }) {
  window.history.pushState({}, "Test page", route)
  const returnVal = renderUi(ui, {wrapper: AppProviders, ...renderOptions } )
  return returnVal
}

export * from "@testing-library/react"