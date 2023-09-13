import getEmployeesDetail from "@/lib/getEmployeesDetail/fetch";

import Link from "next/link";

interface IProps {
  params: {
    team: string;
  };
}

export default async function TeamDetails({ params }: IProps) {
  const data = await getEmployeesDetail(params.team);

  return (
    <>
      <div className="flex flex-wrap border border-blue-200 p-4">
        {data.map(
          (employee: {
            id: number;
            thumbnail: any;
            name: string;
            email: string | number;
            title: string;
            about: any;
            branch: string;
          }) => {
            return (
              <>
                <div key={employee.id} className="w-1/2 md:w-1/3 lg:w-1/4 p-4">
                  <div className=" border border-blue-500 p-4 rounded-md">
                    <img className="w-40 h-40 " src={`${employee.thumbnail}`} />
                    <div className="flex-wrap text-xl items-center">
                      <div>Name: {employee.name}</div>
                      <div>Email: {employee.email}</div>
                      <div>Title: {employee.title}</div>
                      <div>Branch: {employee.branch}</div>
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
          }
        )}
      </div>
    </>
  );
}
