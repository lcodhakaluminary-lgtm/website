"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[]);

  return (
    <header className={`sticky top-0 z-50 border-b bg-white/70 backdrop-blur transition-all ${scrolled ? "py-2 shadow-sm" : "py-3"}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Leo Club" width={42} height={42} className="rounded-full border" />
          <div className="leading-tight">
            <div className="font-black tracking-wide">LEO CLUB</div>
            <div className="text-xs text-gray-500 -mt-1">Dhaka Luminary</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {["about","projects","events","team","gallery"].map(k=>(
            <a key={k} href={`#${k}`} className="hover:text-black link capitalize">{k}</a>
          ))}
          <a href="#join" className="btn btn-primary">Become a Member</a>
        </nav>
      </div>
    </header>
  );
}
