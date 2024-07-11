import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center">
      <Link href="/">
        <Image
          src="/logo.webp"
          width={100}
          height={100}
          className="transition duration-300 ease-in-out transform hover:scale-105"
        />
      </Link>
    </header>
  );
}
