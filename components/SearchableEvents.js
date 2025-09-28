"use client";
import { useMemo, useState } from "react";
import events from "../data/events.json";

export default function SearchableEvents() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return events;
    return events.filter(e =>
      (e.name||"").toLowerCase().includes(s) ||
      (e.date||"").toLowerCase().includes(s) ||
      (e.where||"").toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <>
      <div className="mb-4 flex items-center gap-2">
        <input
          className="border rounded-xl px-3 py-2 w-full md:w-80"
          placeholder="Search events (e.g., eye camp, Dec)"
          value={q}
          onChange={e=>setQ(e.target.value)}
        />
        <button className="btn btn-outline" onClick={()=>setQ("")}>Clear</button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map(e => (
          <div key={`${e.name}-${e.date}`} className="card">
            <div className="text-sm text-gray-500">{e.date}</div>
            <div className="font-bold text-lg mt-1">{e.name}</div>
            {e.where ? <div className="text-sm mt-1">{e.where}</div> : null}
            {e.desc ? <p className="text-gray-500 mt-2">{e.desc}</p> : null}
            <a href="#join" className="link mt-2 inline-block">Register Interest →</a>
          </div>
        ))}
      </div>
    </>
  );
}
