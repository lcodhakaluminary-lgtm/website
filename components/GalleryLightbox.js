"use client";

import { useState } from "react";
import gallery from "../data/gallery.json";
import Image from "next/image";

export default function GalleryLightbox(){
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i)=>{ setIdx(i); setOpen(true); };
  const prev = ()=> setIdx((idx-1+gallery.length)%gallery.length);
  const next = ()=> setIdx((idx+1)%gallery.length);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {gallery.map((g,i)=>(
          <button key={i} onClick={()=>openAt(i)} className="aspect-[4/3] rounded-xl border bg-gray-50 overflow-hidden">
            <Image src={g.src} alt={g.caption||`Photo ${i+1}`} width={600} height={450} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 grid place-items-center p-4" onClick={()=>setOpen(false)}>
          <div className="relative max-w-4xl w-full" onClick={e=>e.stopPropagation()}>
            <Image src={gallery[idx].src} alt={gallery[idx].caption||"Photo"} width={1600} height={1200} className="w-full h-auto rounded-xl" />
            <div className="text-white/90 mt-2 text-sm">{gallery[idx].caption}</div>
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button className="btn btn-outline ml-2" onClick={prev}>‹ Prev</button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button className="btn btn-outline mr-2" onClick={next}>Next ›</button>
            </div>
            <button className="btn btn-primary absolute -top-4 right-0" onClick={()=>setOpen(false)}>Close ✕</button>
          </div>
        </div>
      )}
    </>
  );
}
