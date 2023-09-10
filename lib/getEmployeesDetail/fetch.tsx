export default async function getEmployeesDetail(team) {
  const response = await fetch("http://localhost:4000/employees?department_like=" + team, {
    next: {
      revalidate: 0,
    },
  });

  return response.json();
}
