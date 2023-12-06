import Main from "./Main";
import {render} from "@testing-library/react";
import main from "./Main";

describe(Main, () => {
  it("Main displays Display Frame", () => {
      const {getByTestId} = render(main());
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const displayFrame = getByTestId("display_frame");
      expect(displayFrame).toBeInTheDocument();
  });

  it("Renders the get and post buttons",
      () => {
          const {getByRole} = render(main());

          // eslint-disable-next-line testing-library/prefer-screen-queries
          const getButton = getByRole("button", {name: "GET"});

          // eslint-disable-next-line testing-library/prefer-screen-queries
          const postButton = getByRole("button", {name: "POST"});
          expect(getButton).toBeInTheDocument();
          expect(postButton).toBeInTheDocument();
      });

});