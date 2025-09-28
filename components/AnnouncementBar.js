"use client";

import news from "../data/news.json";

export default function AnnouncementBar() {
  const items = news
    .sort((a,b)=> new Date(b.date)-new Date(a.date))
    .map(n => `${new Date(n.date).toLocaleDateString()} — ${n.title}`);

  return (
    <div className="w-full border-b bg-yellow-50/70 text-[13px]">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-[ticker_30s_linear_infinite] py-2">
          {items.concat(items).map((t,i)=>(
            <span key={i} className="mx-6">🟡 {t}</span>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
