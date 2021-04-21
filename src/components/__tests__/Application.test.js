import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, waitForElement, wait, fireEvent, queryByAltText, getByText, getByAltText, getAllByTestId, prettyDOM, getByPlaceholderText, queryByText, queryAllByAltText } from "@testing-library/react";
import axios from 'axios';
import Application from "components/Application";
import Empty from "components/Appointment/Empty";

beforeEach(() => {
  jest.resetModules();
});

afterEach(cleanup);

axios.defaults.baseURL = "http://localhost:8001";

describe("Application", () => {
  it("defaults to Monday and changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);

    await wait(() => getByText("Monday"));
      fireEvent.click(getByText("Tuesday"));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
})