import { notFound } from "next/navigation";

interface Department {
  department: string;
}

export default async function getDepartmentList(): Promise<Department[]> {
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
