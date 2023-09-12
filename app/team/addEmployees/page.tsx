import Form from "./addEmployee";

export default function AddEmployees() {
  return (
    <main>
      <h2 className="text-center text-blue-600">Add Employees</h2>
      <div>{<Form />}</div>
    </main>
  );
}
