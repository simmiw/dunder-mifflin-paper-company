import getDepartmentList from "@/lib/getDepartmentList/fetch";
import Link from "next/link";

export default async function Team() {
  const data = await getDepartmentList();
  const set = new Set();
  data.forEach((e) => set.add(e.department));
  const departments = [...set];

  return (
    <>
      <h2 className="text-center mb-7">Dunder Mifflin Scanton Team</h2>
      {departments
        ? departments.map((dept) => {
            return <Link href ={`/team/${dept}`}>
            <h3 className="text-center mt-2">{dept}</h3>
            </Link>
          })
        : null}
        
    </>
  );
}
