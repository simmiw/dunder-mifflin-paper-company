import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";
import useSWR from "swr";
import endpoints from "@/endpoints";

export default async function Team() {
  const { data, error } = useSWR(endpoints.employees());
  if (error) return "Something went wrong";

  const set = new Set<string>();
  data?.forEach((e: { department: string }) => set.add(e.department));
  const departments = Array.from(set);

  return (
    <>
      <h2 className="text-center mb-7" key={"hello"}>
        Dunder Mifflin Scanton Team
      </h2>
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
