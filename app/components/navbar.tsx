import Link from "next/link";
import Image from "next/image";
import logo from "./dunder_mifflin_logo.png";

export default function Navbar() {
  return (
    <>
      <Image
        src={logo}
        width={40}
        placeholder="blur"
        alt="Dunder-Mifflin-Logo"
      />
      <nav>
        <div className="flex space-x-60 text-blue-400">
          <Link href="/">Home</Link>
          <Link href="/about">About </Link>
          <Link href="/team">Team</Link>
          <Link href= "/team/addEmployees">Add Employee</Link>
        </div>
      </nav>
    </>
  );
}
