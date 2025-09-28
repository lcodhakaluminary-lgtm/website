"use client";

/**
 * Subtle, professional background:
 * - Solid paper white base
 * - Low-opacity dot grid
 * - Soft corner vignette
 */
export default function ProBackground() {
  return (
    <div className="fixed inset-0 -z-30">
      {/* Solid base */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* Dot grid (very subtle) */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)",
          backgroundSize: "22px 22px"
        }}
      />

      {/* Soft vignette highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 500px at 85% -10%, rgba(241,196,15,0.14), transparent 60%), radial-gradient(700px 420px at 10% -15%, rgba(241,196,15,0.12), transparent 65%)"
        }}
      />
    </div>
  );
}
