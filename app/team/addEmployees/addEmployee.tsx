"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [branch, setBranch] = useState("");
  const [department, setDepartment] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [about, setAbout] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const addEmployee = {
      name,
      email: `${name}@gmail.com`,
      title,
      branch,
      department,
      thumbnail,
      about,
    };

    const res = await fetch(" http://localhost:4000/employees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addEmployee),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/team");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="w-1/2">
        <label>
          <span>Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          <span>Email:</span>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>

        <label>
          <span>Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>

        <label>
          <span>Branch:</span>
          <input
            type="text"
            value={branch}
            onChange={(e) => {
              setBranch(e.target.value);
            }}
          />
        </label>

        <label>
          <span>Team:</span>
          <input
            type="text"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          />
        </label>

        <label>
          <span>Image:</span>
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => {
              setThumbnail(e.target.value);
            }}
          />
        </label>

        <label>
          <span>Know More:</span>
          <input
            type="text"
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          />
        </label>

        <button className="btn-primary" disabled={isLoading}>
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Submit</span>}
        </button>
      </form>
    </main>
  );
}