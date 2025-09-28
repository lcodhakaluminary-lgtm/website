"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FabContact(){
  const [show, setShow] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const dirDown = y > lastY.current + 4;           // scrolling down
      const nearTop = y < 240;                         // before threshold
      const nearBottom = (window.innerHeight + y) > (document.body.scrollHeight - 200);

      // show only after threshold, not near bottom, and not while scrolling down fast
      if (!nearTop && !nearBottom && !dirDown) setShow(true);
      else if (nearTop || nearBottom || dirDown) setShow(false);

      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 40 }}
      transition={{ duration: 0.25 }}
      className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 mb-[env(safe-area-inset-bottom)]"
      aria-hidden={!show}
    >
      <a
        href="https://wa.me/8801760719256" target="_blank" rel="noreferrer"
        className="rounded-full px-4 py-3 text-white bg-green-600 shadow-xl hover:scale-105 transition"
      >
        WhatsApp
      </a>
      <a
        href="tel:+8801760719256"
        className="rounded-full px-4 py-3 bg-[#f1c40f] text-black shadow-xl hover:scale-105 transition"
      >
        Call Us
      </a>
    </motion.div>
  );
}
