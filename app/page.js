"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import projects from "../data/projects.json";
import team from "../data/team.json";

// ⬇ turn these into client-only
const AnnouncementBar = dynamic(()=>import("../components/AnnouncementBar"), { ssr:false });
const SearchableEvents = dynamic(()=>import("../components/SearchableEvents"), { ssr:false });
const GalleryLightbox = dynamic(()=>import("../components/GalleryLightbox"), { ssr:false });
const ParallaxHero = dynamic(()=>import("../components/ParallaxHero"), { ssr:false });
const ScrollProgress = dynamic(()=>import("../components/ScrollProgress"), { ssr:false });
const MagneticButton = dynamic(()=>import("../components/MagneticButton"), { ssr:false });
const TiltCard = dynamic(()=>import("../components/TiltCard"), { ssr:false });

// keep simple ones inline:
import CounterStat from "../components/CounterStat";


export default function Home(){
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <FloatingBlobs />
      <AnnouncementBar />

      {/* HERO (parallax) */}
      <ParallaxHero />

      {/* ABOUT + counters with CTA magnets */}
      <section id="about" className="py-12 md:py-20 scroll-mt-24">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">About the Club</h2>
            <p className="text-gray-500 mt-1 max-w-2xl">
              Based in District 315 B1, Dhaka. We grow leadership by serving our community.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <CounterStat value={75} label="Active Members" />
            <CounterStat value={1200} label="Volunteer Hours (YTD)" />
            <CounterStat value={18} label="Projects Completed" />
          </div>
          <div className="mt-6 flex gap-3">
            <MagneticButton href="#join">Become a Member</MagneticButton>
            <MagneticButton href="#projects" className="btn btn-outline">Explore Projects</MagneticButton>
          </div>
        </div>
      </section>

      {/* PROJECTS – 3D Tilt Cards + stagger */}
      <section id="projects" className="py-12 md:py-20 scroll-mt-24">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Signature Projects</h2>
            <p className="text-gray-500">A snapshot of our year-round service.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true, amount:.2}} className="grid md:grid-cols-3 gap-6">
            {projects.map(p=>(
              <motion.div key={p.title} variants={item}>
                <TiltCard>
                  <h3 className="font-bold text-xl">{p.title}</h3>
                  <p className="text-gray-500 mt-1">{p.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EVENTS – search stays, cards hover lift via CSS */}
      <section id="events" className="py-12 md:py-20 scroll-mt-24">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Upcoming Events</h2>
            <p className="text-gray-500">Search and discover what’s next.</p>
          </motion.div>
          <SearchableEvents />
        </div>
      </section>

      {/* TEAM – stagger + tilt */}
      <section id="team" className="py-12 md:py-20 scroll-mt-24">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Executive Committee</h2>
            <p className="text-gray-500">2025–26 tenure</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true, amount:.2}} className="grid md:grid-cols-3 gap-6">
            {team.map(m=>(
              <motion.div key={m.name} variants={item}>
                <TiltCard className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl grid place-content-center bg-gray-100 border font-bold">{m.name.charAt(0)}</div>
                  <div className="mt-3 font-semibold">{m.name}</div>
                  <div className="text-gray-500 text-sm">{m.role}</div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY – lightbox already animated */}
      <section id="gallery" className="py-12 md:py-20 scroll-mt-24">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Gallery</h2>
            <p className="text-gray-500">Click photos to open lightbox.</p>
          </motion.div>
          <GalleryLightbox />
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="py-12 md:py-20 scroll-mt-24">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Join the Movement</h2>
            <p className="text-gray-500">Fill the form and our membership team will reach out.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <form className="card space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! Demo form.')}}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input className="border rounded-xl px-3 py-2" placeholder="Full name" required />
                <input type="email" className="border rounded-xl px-3 py-2" placeholder="Email address" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input className="border rounded-xl px-3 py-2" placeholder="Phone number" required />
                <input className="border rounded-xl px-3 py-2" placeholder="Institution (e.g., MIST)" />
              </div>
              <textarea rows={5} className="border rounded-xl w-full p-3" placeholder="Why do you want to join?" />
              <MagneticButton>Submit Interest</MagneticButton>
            </form>
            <div className="space-y-4">
              <div className="card">Open to students and young professionals (ages 18–30). No prior experience required.</div>
              <div className="card">Meetings twice a month; service projects on weekends.</div>
              <div className="card">District 315 B1, Dhaka, Bangladesh</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
