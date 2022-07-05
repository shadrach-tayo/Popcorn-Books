import { render as renderUi, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { ReactElement } from "react";
import AppProviders from "../context";

export function render(ui: ReactElement, { route, ...renderOptions }: { route: string }) {
  window.history.pushState({}, "Test page", route)
  const returnVal = renderUi(ui, { wrapper: AppProviders, ...renderOptions })
  return returnVal
}

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => [
    ...screen.queryAllByLabelText(/loading/i),
    ...screen.queryAllByText(/loading/i),
  ])

export * from "@testing-library/react"
export * from '@testing-library/user-event'