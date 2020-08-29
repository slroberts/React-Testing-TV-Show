import React from "react";
import {render} from "@testing-library/react";
import Episodes from "./Episodes";
import {episodesData} from "../fixtures/episodesData";

test("Re-renders with a list of episodes", () => {
  const {rerender, getAllByTestId, queryAllByTestId} = render(
    <Episodes episodes={[]} />
  );

  const episodesList = queryAllByTestId(/episode/i);
  expect(episodesList).toHaveLength(0);

  rerender(<Episodes episodes={episodesData.data._embedded.episodes} />);

  const episodes = getAllByTestId(/episode/i);

  expect(episodes).toHaveLength(26);
});
