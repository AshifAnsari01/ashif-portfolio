const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-900 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Academic Background
          </h2>
        </div>

        {/* Education Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Bachelor of Technology
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Artificial Intelligence & Machine Learning
              </h3>

              <p className="mt-3 text-slate-400">
                Techno International New Town
              </p>
            </div>

            <span className="w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-400">
              2021 – 2025
            </span>

          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Degree
              </p>

              <p className="mt-2 font-medium text-white">
                B.Tech
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Graduation
              </p>

              <p className="mt-2 font-medium text-white">
                2025
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;