"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxHero() {
  const { scrollY } = useScroll();
  const yTitle = useTransform(scrollY, [0, 400], [0, -60]);
  const yBadge = useTransform(scrollY, [0, 400], [0, -30]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 hero-grad" />
      <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <motion.div style={{ y: yTitle, opacity }}>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Leo Club of Dhaka Luminary
          </h1>
          <p className="mt-3 text-lg text-gray-600">Living the Luminary Spirit</p>
          <div className="mt-6 flex gap-3">
            <a href="#join" className="btn btn-primary">Join the Club</a>
            <a href="#projects" className="btn btn-outline">Our Projects</a>
          </div>
          <p className="mt-4 text-sm text-gray-500">Affiliated with Lions Clubs International</p>
        </motion.div>

        <motion.div
          className="card text-center"
          style={{ y: yBadge, opacity }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto w-24 h-24 rounded-full grid place-content-center border bg-white shadow">
            <span className="font-extrabold text-xl">LEO</span>
          </div>
          <h3 className="mt-3 font-bold">Leadership • Experience • Opportunity</h3>
          <p className="text-gray-500">Developing leaders through service and fellowship.</p>
        </motion.div>
      </div>
    </section>
  );
}
