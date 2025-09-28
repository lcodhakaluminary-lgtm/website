"use client";
export default function Carousel({
  items = [], // [{title, text} or logos]
  renderItem
}) {
  // CSS keyframe scroll – lightweight
  return (
    <div className="overflow-hidden border rounded-2xl">
      <div className="flex gap-4 p-4 animate-[xscroll_25s_linear_infinite]">
        {items.concat(items).map((it, i) => (
          <div key={i} className="shrink-0 w-72">
            {renderItem ? renderItem(it) : (
              <div className="card h-full">{it.text}</div>
            )}
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes xscroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
    </div>
  );
}
