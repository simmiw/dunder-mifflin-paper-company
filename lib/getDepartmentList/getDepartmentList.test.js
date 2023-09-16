import getDepartmentList from "./fetch";

const mockData = [
  {
    name: "ABC",
    email: "abc@gmail.com",
    title: "Salesman",
    branch: "Scranton",
    department: "Sales",
    thumbnail:
      "https://pm1.aminoapps.com/7064/817afaf8f7cbbfb59b14dc9706a123dd51323a62r1-650-367v2_uhq.jpg",
    about: "https://theoffice.fandom.com/wiki/Danny_Cordray",
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockData),
  })
);

describe("getDepartmentList", () => {
  it("should make an API call", async () => {
    const data = await getDepartmentList();
    expect(fetch).toBeCalledWith(`${process.env.API_URL}/employees`, {
      next: {
        revalidate: 0,
      },
    });
    expect(data).toBe(mockData);
  });
});
