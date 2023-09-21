import React from "react";
import { render, screen } from "@testing-library/react";
import TeamDetails from "./page";


jest.fn().mockResolvedValue([
    {
      id: 1,
      thumbnail: "thumbnail-url-1",
      name: "John Doe",
      email: "john@example.com",
      title: "Software Engineer",
      about: "about-url-1",
      branch: "Branch 1",
    },
    {
      id: 2,
      thumbnail: "thumbnail-url-2",
      name: "Jane Smith",
      email: "jane@example.com",
      title: "Product Manager",
      about: "about-url-2",
      branch: "Branch 2",
    },
  ]);

describe("TeamDetails Component", () => {
  it("renders employee details correctly", async () => {
    const sut =render(<TeamDetails params={{ team: "example" }} />);


    await screen.findByText("Name: John Doe");
    expect(screen.getByText("Name: John Doe")).toBeVisible();
    expect(screen.getByText("Email: john@example.com")).toBeVisible();
    expect(screen.getByText("Title: Software Engineer")).toBeVisible();
    expect(screen.getByText("Branch: Branch 1")).toBeVisible();
    expect(sut.container).toMatchSnapshot();

    const moreLink1 = screen.getByText("Click to know more");
    expect(moreLink1).toBeVisible();
    expect(moreLink1).toHaveAttribute("href", "about-url-1");

    const moreLink2 = screen.getByText("Click to know more");
    expect(moreLink2).toBeVisible();
    expect(moreLink2).toHaveAttribute("href", "about-url-2");
  });
});
