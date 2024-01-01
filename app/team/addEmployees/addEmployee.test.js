import Form from "./addEmployee";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

const mockRouterPushFn = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockRouterPushFn,
    refresh: jest.fn(),
  }),
}));

describe("addEmployee", () => {
  let sut;

  beforeEach(() => sut = render(<Form />));

  it("should render the form", () => {
    expect(screen.getByLabelText(/Name/)).toBeVisible();
    expect(screen.getByLabelText(/Email/)).toBeVisible();
    expect(screen.getByLabelText(/Title/)).toBeVisible();
    expect(screen.getByLabelText(/Branch/)).toBeVisible();
    expect(screen.getByLabelText(/Team/)).toBeVisible();
    expect(screen.getByLabelText(/Image/)).toBeVisible();
    expect(screen.getByLabelText(/Know More/)).toBeVisible();
    expect(screen.getByText(/Submit/)).toBeVisible();
    expect(sut.container).toMatchSnapshot();
  });


  it("should submit the form when filled and valid", async () => {
    global.fetch = jest.fn().mockResolvedValue({ status: 201 });

    fireEvent.change(screen.getByLabelText(/Name/), {
      target: { value: "Michel Scott" },
    });

    fireEvent.change(screen.getByLabelText(/Email/), {
      target: { value: "michalscoot@gmail.com" },
    });

    fireEvent.change(screen.getByLabelText(/Title/), {
      target: { value: "Regional Manager" },
    });

    fireEvent.change(screen.getByLabelText(/Branch/), {
      target: { value: "Scanton" },
    });

    fireEvent.change(screen.getByLabelText(/Team/), {
      target: { value: "Sales" },
    });

    fireEvent.change(screen.getByLabelText(/Image/), {
      target: { value: "image.jpg" },
    });

    fireEvent.change(screen.getByLabelText(/Know More/), {
      target: { value: "More Details" },
    });

    fireEvent.click(screen.getByText(/Submit/));

    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:4000/employees",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: "Michel Scott",
          email: "michalscoot@gmail.com",
          title: "Regional Manager",
          branch: "Scanton",
          department: "Sales",
          thumbnail: "image.jpg",
          about: "More Details",
        }),
      }
    );
    expect(screen.getByText("Adding...")).toBeVisible();
    await waitFor(() => {
      expect(mockRouterPushFn).toBeCalledWith("/team");
    });
  });
});
