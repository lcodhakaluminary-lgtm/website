import projects from "../data/projects.json";
import events from "../data/events.json";
import team from "../data/team.json";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Leo Club of Dhaka Luminary</h1>
        <p className="mt-2 text-lg text-gray-600">Living the Luminary Spirit</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside">
          {projects.map((p, i) => (
            <li key={i}>
              <strong>{p.title}</strong>: {p.description}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Events</h2>
        <ul className="list-disc list-inside">
          {events.map((e, i) => (
            <li key={i}>
              <strong>{e.name}</strong> — {e.date}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <ul className="list-disc list-inside">
          {team.map((t, i) => (
            <li key={i}>
              {t.name} — {t.role}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
