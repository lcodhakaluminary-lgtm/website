"use client";
import { useEffect, useState } from "react";

export default function CounterStat({ value = 0, label }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const target = typeof value === "string" ? parseInt(value) : value;
    const duration = 800;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(target * p));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value]);

  return (
    <div className="card flex items-center gap-4">
      <div className="text-2xl font-extrabold">{n.toLocaleString()}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}
