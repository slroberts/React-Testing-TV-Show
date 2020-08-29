import React from "react";
import {render, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import {fetchShow as mockFetchShow} from "../src/api/fetchShow";
import {episodesData} from "./fixtures/episodesData";

jest.mock("./api/fetchShow");

test("should reveal drop-down list when clicked", async () => {
  mockFetchShow.mockResolvedValueOnce(episodesData);

  const {getByText, queryAllByText} = render(<App />);
  await waitFor(() => {
    userEvent.click(getByText(/season/i));
  });
  expect(queryAllByText(/season/i)).toHaveLength(5);
});
