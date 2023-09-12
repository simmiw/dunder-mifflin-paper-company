import getDepartmentList from "@/lib/getDepartmentList/fetch";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";

export default async function Team() {
  const data = await getDepartmentList();
  const set = new Set<string>();
  data.forEach((e: { department: string; }) => set.add(e.department));
  const departments = [...{set}];

  return (
    <>
      <h2 className="text-center mb-7">Dunder Mifflin Scanton Team</h2>
      { <Suspense fallback={<Loading />}></Suspense> }
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
