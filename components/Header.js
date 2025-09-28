import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="container py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={42} height={42} className="rounded-full border" />
          <div className="leading-tight">
            <div className="font-black tracking-wide">LEO CLUB</div>
            <div className="text-xs text-muted -mt-1">Dhaka Luminary</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {['about','projects','events','team','gallery','affiliations','join'].map(k => (
            <a key={k} href={`#${k}`} className="hover:text-black">{k[0].toUpperCase()+k.slice(1)}</a>
          ))}
        </nav>
        <a href="#join" className="hidden md:inline-flex btn">Become a Member</a>
      </div>
    </header>
  )
}
