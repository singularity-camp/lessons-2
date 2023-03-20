import { test } from "@jest/globals";
import { fireEvent, render, waitFor } from "@testing-library/react";
import MainPage from "./MainPage";

describe("MainPage", () => {
  test("shows submitted values", async () => {
    const changedValue = "Hello";

    const { getByTestId } = render(<MainPage />);

    fireEvent.change(getByTestId("Input-input"), {
      target: {
        value: changedValue,
      },
    });
    fireEvent.submit(getByTestId("Input-form"));

    await waitFor(() => getByTestId("Display-p"));

    expect(getByTestId("Display-p").textContent).toBe(changedValue);
  });
});
