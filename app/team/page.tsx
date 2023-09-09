import data from "../../data/data.json";

export default function Team() {
  const set = new Set();
  data.employees.forEach((e) => set.add(e.department));
  const departments = [...set];

  return (
    <>
      <h2>Dunder Mifflin Scanton Team</h2>
      {departments.map((dept) => {
        return <h3>{dept}</h3>;
      })}
    </>
  );
}
