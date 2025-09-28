"use client";
import { useRef } from "react";

export default function MagneticButton({ children, className="", href="#" }) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    btn.style.transform = `translate(${dx * 0.06}px, ${dy * 0.06}px)`;
  };
  const onLeave = () => {
    const btn = ref.current;
    if (!btn) return;
    btn.style.transform = `translate(0,0)`;
  };

  return (
    <a
      href={href}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      className={`btn btn-primary will-change-transform ${className}`}
    >
      {children}
    </a>
  );
}
