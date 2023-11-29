import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";
import useSWR from "swr";

export default async function Team() {
  const url = "http://localhost:4000/employees";
  const { data, error } = useSWR(url);

  const set = new Set<string>();
  data?.forEach((e: { department: string }) => set.add(e.department));
  const departments = Array.from(set);

  if (error) return "Something went wrong";

  return (
    <>
      <h2 className="text-center mb-7" key={"hello"}>
        Dunder Mifflin Scanton Team
      </h2>
      {<Suspense fallback={<Loading />}></Suspense>}
      {departments
        ? departments.map((dept) => {
            return (
              <Link href={`/team/${dept}`}>
                <h3 className="text-center mt-2">{dept}</h3>
              </Link>
            );
          })
        : null}
    </>
  );
}
