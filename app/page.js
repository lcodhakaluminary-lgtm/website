import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projects from "@/data/projects.json";
import events from "@/data/events.json";
import team from "@/data/team.json";
import { motion } from "framer-motion";

export default function HomePage(){
  return (
    <div className="min-h-screen">
      <Header />
      <main id="home">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-50 via-white to-white" />
          <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1>Leo Club of Dhaka Luminary</h1>
              <p className="mt-3 text-lg muted">Living the Luminary Spirit</p>
              <div className="mt-6 flex gap-3">
                <a href="#join" className="btn">Join the Club</a>
                <a href="#projects" className="btn btn-outline">Our Projects</a>
              </div>
              <div className="mt-6 text-sm muted">Next orientation: <strong>October 12, 2025</strong></div>
            </div>
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card text-center">
              <div className="mx-auto w-20 h-20 grid place-content-center rounded-full bg-white border shadow-soft">LEO</div>
              <h3 className="mt-3">Leadership • Experience • Opportunity</h3>
              <p className="muted">Affiliated with Lions Clubs International</p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-8">
              <h2>About the Club</h2>
              <p className="muted mt-1 max-w-2xl">Based in District 315 B1, Dhaka, Bangladesh. We develop leadership through service and fellowship.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {label:'Active Members', value:'75+'},
                {label:'Volunteer Hours (YTD)', value:'1,200'},
                {label:'Projects Completed', value:'18'}
              ].map(s => (
                <div key={s.label} className="card flex items-center gap-4">
                  <div className="text-2xl font-extrabold">{s.value}</div>
                  <div className="muted text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-8">
              <h2>Signature Projects</h2>
              <p className="muted">A snapshot of what we do throughout the year.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map(p => (
                <motion.div key={p.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card">
                  <h3>{p.title}</h3>
                  <p className="muted mt-1">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-8">
              <h2>Upcoming Events</h2>
              <p className="muted">Come join our next activities and service days.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map(e => (
                <motion.div key={e.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card">
                  <div className="text-sm muted">{new Date(e.date).toDateString()}</div>
                  <div className="font-bold text-lg mt-1">{e.title}</div>
                  <div className="text-sm mt-1">{e.where}</div>
                  <p className="muted mt-2">{e.desc}</p>
                  <a href="#join" className="link mt-2">Register Interest →</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-8">
              <h2>Executive Committee</h2>
              <p className="muted">2025–26 tenure</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map(m => (
                <div key={m.name} className="card text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gray-100 border grid place-content-center font-bold">{m.name.charAt(0)}</div>
                  <div className="mt-3 font-semibold">{m.name}</div>
                  <div className="muted text-sm">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-8">
              <h2>Gallery</h2>
              <p className="muted">Highlights from recent activities.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Array.from({length:8}).map((_,i)=>( 
                <div key={i} className="aspect-[4/3] rounded-xl border bg-gray-50 grid place-content-center text-muted">Photo</div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliations Section */}
        <section id="affiliations" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-8">
              <h2>Affiliations & Links</h2>
              <p className="muted">We are proud to be part of the Lions/Leo movement in Bangladesh.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3>Lions District 315 B1 — Bangladesh</h3>
                <p className="muted">District activities, leadership and reports.</p>
                <a className="link mt-2" href="https://lionsdistrict315b1.org/" target="_blank">Visit District Site →</a>
              </div>
              <div className="card">
                <h3>Leo Club — Green University of Bangladesh</h3>
                <p className="muted">Campus club with shared vision of service and leadership.</p>
                <a className="link mt-2" href="https://www.green.edu.bd/club/leo-club" target="_blank">See GUB Leo Club →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="join" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-8">
              <h2>Join the Movement</h2>
              <p className="muted">Fill the form and our membership team will reach out.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <form className="card space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! Demo form only.')}}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input className="border rounded-xl px-3 py-2" placeholder="Full name" required />
                  <input type="email" className="border rounded-xl px-3 py-2" placeholder="Email address" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input className="border rounded-xl px-3 py-2" placeholder="Phone number" required />
                  <input className="border rounded-xl px-3 py-2" placeholder="Institution (e.g., MIST)" />
                </div>
                <textarea rows={5} className="border rounded-xl w-full p-3" placeholder="Why do you want to join?" />
                <button className="btn w-full">Submit Interest</button>
                <p className="muted text-xs">This is a demo form. Connect to Google Forms or a backend later.</p>
              </form>
              <div className="space-y-4">
                <div className="card">Open to students and young professionals (ages 18–30). No prior experience required.</div>
                <div className="card">Meetings twice a month; service projects on weekends.</div>
                <div className="card">District 315 B1, Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
