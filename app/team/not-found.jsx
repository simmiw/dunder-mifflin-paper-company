import Link from "next/link";

export default function NotFound() {

  return (
    <>
    <main className="text-center">
        <h2 className="text-3xl md-3">There was a problem.</h2>
        <p>We couldn't find the page you were looking for</p>
        <p><Link href= "/team">Go back to the Teams Page</Link></p>
    </main>
    </>
  )
}
