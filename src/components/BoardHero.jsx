import React from "react";

function BoardHero({ inProgressCount, resolvedCount, vectorSrc }) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <article className="relative overflow-hidden rounded-md bg-gradient-to-r from-violet-700 to-purple-500 px-5 py-12 text-center text-white shadow-soft">
        <img
          src={vectorSrc}
          alt="decorative support pattern"
          className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-35"
        />
        <div className="relative z-10">
          <p className="text-3xl font-medium">In-Progress</p>
          <p className="mt-2 font-display text-6xl font-bold leading-none">{inProgressCount}</p>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-md bg-gradient-to-r from-emerald-500 to-teal-700 px-5 py-12 text-center text-white shadow-soft">
        <img
          src={vectorSrc}
          alt="decorative support pattern"
          className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-30 [transform:scaleX(-1)]"
        />
        <div className="relative z-10">
          <p className="text-3xl font-medium">Resolved</p>
          <p className="mt-2 font-display text-6xl font-bold leading-none">{resolvedCount}</p>
        </div>
      </article>
    </section>
  );
}

export default BoardHero;
