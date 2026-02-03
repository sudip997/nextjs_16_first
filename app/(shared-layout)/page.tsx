import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello from index page</h1>
      <br />
      <br />
      <a href="/about">About Us</a>
      <br />
      <Link href="/about">About Us</Link>
    </div>
  );
}
