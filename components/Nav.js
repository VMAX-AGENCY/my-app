import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center items-center">
        <li className="py-3 px-3 transition duration-300 ease-in-out transform hover:translate-y-1 text-green-800 font-light text-sm">
          <Link href="/">Home</Link>
        </li>
        <li className="py-3 px-3 transition duration-300 ease-in-out transform hover:translate-y-1 hover:text-green-800 font-light text-sm">
          <Link href="/about">About</Link>
        </li>
        <li className="py-3 px-3 transition duration-300 ease-in-out transform hover:translate-y-1 hover:text-green-800 font-light text-sm">
          <Link href="/services">Services</Link>
        </li>
        <li className="py-3 px-3 transition duration-300 ease-in-out transform hover:translate-y-1 hover:text-green-800 font-light text-sm">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
