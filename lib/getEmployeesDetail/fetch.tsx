import { notFound } from "next/navigation";

export default async function getEmployeesDetail(team: string) {
  const response = await fetch(
    "http://localhost:4000/employees?department_like=" + team,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  const data = await response.json();

  if (!data.length) {
    return notFound();
  }

  return data;
}
