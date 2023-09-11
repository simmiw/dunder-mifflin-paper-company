import getEmployeesDetail from "@/lib/getEmployeesDetail/fetch";

import Link from "next/link";

export default async function TeamDetails({ params }) {
  const data = await getEmployeesDetail(params.team);

  return (
    <>
      <div className="flex flex-wrap border border-blue-200 p-4 my-20">
        {data.map((employee) => {
          return (
            <>
              <div key={employee.id} className="w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <div className=" border border-blue-500 p-4 rounded-md">
                  <img
                    className="w-30 h-44 object-cover"
                    src={`${employee.thumbnail}`}
                  />
                  <div className="flex-wrap text-xl items-center">
                    <div>Name: {employee.name}</div>
                    <div>Email: {employee.email}</div>
                    <div>Title: {employee.title}</div>
                    <div>Barnch: {employee.branch}</div>
                    <Link
                      className="text-blue-600 hover:underline hover:bg-black-100 p-1 rounded "
                      href={`${employee.about}`}>
                      {" "}
                      Click to know more
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
