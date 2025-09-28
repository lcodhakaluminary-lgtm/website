"use client";
export default function FabContact(){
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href="https://wa.me/8801XXXXXXXXX" target="_blank"
         className="rounded-full px-4 py-3 text-white bg-green-600 shadow-xl hover:scale-105 transition">
        WhatsApp
      </a>
      <a href="tel:+8801XXXXXXXXX"
         className="rounded-full px-4 py-3 bg-brand-gold text-black shadow-xl hover:scale-105 transition">
        Call Us
      </a>
    </div>
  );
}
