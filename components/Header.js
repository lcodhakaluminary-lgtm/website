import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Leo Club" width={42} height={42} className="rounded-full border" />
          <div className="leading-tight">
            <div className="font-black tracking-wide">LEO CLUB</div>
            <div className="text-xs text-gray-500 -mt-1">Dhaka Luminary</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#events" className="hover:text-black">Events</a>
          <a href="#team" className="hover:text-black">Team</a>
          <a href="#gallery" className="hover:text-black">Gallery</a>
          <a href="#join" className="btn btn-primary">Become a Member</a>
        </nav>
      </div>
    </header>
  );
}
