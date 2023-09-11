import { notFound } from "next/navigation";

export default async function getDepartmentList() {
  const response = await fetch("http://localhost:4000/employees", {
    next: {
      revalidate: 0,
    },
  });

  if (!response.ok) {
    return notFound();
  }

  return response.json();
}
