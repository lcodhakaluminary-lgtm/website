import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Leo Club Logo" width={40} height={40} />
          <span className="font-bold text-xl">Leo Club of Dhaka Luminary</span>
        </div>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#events">Events</Link>
          <Link href="/#team">Team</Link>
        </nav>
      </div>
    </header>
  );
}
