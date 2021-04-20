/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";
import ReactDOM from "react-dom";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render, cleanup, waitForElement, wait, fireEvent, queryByAltText, getByText, getByAltText, getAllByTestId, prettyDOM, getByPlaceholderText, queryByText, queryAllByAltText } from "@testing-library/react";
/*
  We import the component that we are testing
*/
import axios from 'axios';
import Application from "components/Application";
import Empty from "components/Appointment/Empty";

beforeEach(() => {
  jest.resetModules();
});

afterEach(cleanup);

axios.defaults.baseURL = "http://localhost:8001";

/*
  A test that renders a React Component
*/

describe("Application", () => {
  it("defaults to Monday and changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);

    await wait(() => getByText("Monday"));
      fireEvent.click(getByText("Tuesday"));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
})