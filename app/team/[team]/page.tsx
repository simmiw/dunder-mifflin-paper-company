import getEmployeesDetail from "@/lib/getEmployeesDetail/fetch";

import Link from "next/link";

export default async function TeamDetails({ params }) {
  const data = await getEmployeesDetail(params.team);

  return (
    <>
      {data.map((employee) => {
        return (
          <div key={employee.id}>
            <img className= "h-40 w-200"src={`${employee.thumbnail}`} />
            <div>Name: {employee.name}</div>
            <div>Email: {employee.email}</div>
            <div>Title: {employee.title}</div>
            <div>Barnch: {employee.branch}</div>
            <Link href={`${employee.about}`}>Know More: {employee.about} </Link>
          </div>
        );
      })}
    </>
  );
}
