const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Professional Experience
          </h2>
        </div>

        {/* Experience Card */}
        <div className="relative border-l border-slate-700 pl-8">

          {/* Timeline Dot */}
          <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-slate-950" />

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

            {/* Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                  Web Development Internship
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  CodSoft
                </h3>
              </div>

              <span className="w-fit rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-400">
                Jul 2023 – Aug 2023
              </span>

            </div>

            {/* Description */}
            <p className="mt-6 max-w-3xl leading-7 text-slate-400">
              Gained hands-on experience in web development by building
              responsive web interfaces and implementing frontend
              functionality using modern web technologies.
            </p>

            {/* Responsibilities */}
            <div className="mt-7">

              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Key Contributions
              </h4>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Developed responsive web pages using HTML, CSS,
                  JavaScript, and React.js.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Built reusable frontend components and focused on
                  responsive user interfaces.
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Practiced debugging, browser testing, and improving
                  application functionality.
                </li>

              </ul>

            </div>

            {/* Technologies */}
            <div className="mt-7 flex flex-wrap gap-2">

              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;