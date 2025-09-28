"use client";

import { motion } from "framer-motion";
import projects from "../data/projects.json";
import AnnouncementBar from "../components/AnnouncementBar";
import CounterStat from "../components/CounterStat";
import SearchableEvents from "../components/SearchableEvents";
import GalleryLightbox from "../components/GalleryLightbox";
import team from "../data/team.json";

const fadeUp = { initial:{opacity:0, y:24}, whileInView:{opacity:1, y:0}, viewport:{once:true, amount:0.2}, transition:{duration:.5} };

export default function Home(){
  return (
    <div className="min-h-screen">
      <AnnouncementBar />

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-50 via-white to-white" />
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">Leo Club of Dhaka Luminary</h1>
            <p className="mt-3 text-lg text-gray-600">Living the Luminary Spirit</p>
            <div className="mt-6 flex gap-3">
              <a href="#join" className="btn btn-primary">Join the Club</a>
              <a href="#projects" className="btn btn-outline">Our Projects</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Affiliated with Lions Clubs International</p>
          </motion.div>
          <motion.div {...fadeUp} className="card text-center">
            <div className="mx-auto w-20 h-20 rounded-full grid place-content-center border">
              <span className="font-extrabold">LEO</span>
            </div>
            <h3 className="mt-3 font-bold">Leadership • Experience • Opportunity</h3>
            <p className="text-gray-500">Developing leaders through service and fellowship.</p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT with animated counters */}
      <section id="about" className="py-12 md:py-20">
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
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Signature Projects</h2>
            <p className="text-gray-500">A snapshot of our year-round service.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map(p=>(
              <motion.div key={p.title} {...fadeUp} className="card">
                <h3 className="font-bold text-xl">{p.title}</h3>
                <p className="text-gray-500 mt-1">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS with search */}
      <section id="events" className="py-12 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Upcoming Events</h2>
            <p className="text-gray-500">Search and discover what’s next.</p>
          </motion.div>
          <SearchableEvents />
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-12 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Executive Committee</h2>
            <p className="text-gray-500">2025–26 tenure</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map(m=>(
              <motion.div key={m.name} {...fadeUp} className="card text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl grid place-content-center bg-gray-100 border font-bold">{m.name.charAt(0)}</div>
                <div className="mt-3 font-semibold">{m.name}</div>
                <div className="text-gray-500 text-sm">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY with lightbox */}
      <section id="gallery" className="py-12 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Gallery</h2>
            <p className="text-gray-500">Click photos to open lightbox.</p>
          </motion.div>
          <GalleryLightbox />
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="py-12 md:py-20">
        <div className="container">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Join the Movement</h2>
            <p className="text-gray-500">Fill the form and our membership team will reach out.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <form
              className="card space-y-3"
              action="https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/formResponse"
              method="POST"
              onSubmit={(e)=>{ if(!e.target.action.includes("REPLACE")) return; e.preventDefault(); alert('Demo form only — add your Google Form action URL.');}}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="entry.1111" className="border rounded-xl px-3 py-2" placeholder="Full name" required />
                <input name="entry.2222" type="email" className="border rounded-xl px-3 py-2" placeholder="Email address" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="entry.3333" className="border rounded-xl px-3 py-2" placeholder="Phone number" required />
                <input name="entry.4444" className="border rounded-xl px-3 py-2" placeholder="Institution (e.g., MIST)" />
              </div>
              <textarea name="entry.5555" rows={5} className="border rounded-xl w-full p-3" placeholder="Why do you want to join?" />
              <button className="btn btn-primary w-full">Submit Interest</button>
              <p className="text-gray-500 text-xs">Replace the form <em>action</em> with your Google Form POST URL and map the `entry.xxxx` field IDs.</p>
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
