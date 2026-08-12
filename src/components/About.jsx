const About = () => {
  return (
    <section id="about" className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Frontend Developer Building Toward MERN
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* About */}
          <div>
            <p className="text-lg leading-8 text-slate-300">
              I’m Md Ashif Ansari, a frontend-focused developer and
              B.Tech graduate in Artificial Intelligence and Machine
              Learning from Techno International New Town, completed in
              2025.
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              I build responsive web applications using React.js,
              JavaScript, Redux Toolkit, React Router, Tailwind CSS,
              and REST APIs. I’m currently expanding my skills in
              Node.js, Express.js, and MongoDB as I progress toward
              full-stack MERN development.
            </p>
          </div>

          {/* Quick Information */}
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Education */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Education
              </p>

              <h3 className="mt-2 font-semibold text-white">
                B.Tech — AI & ML
              </h3>

              <p className="mt-1 text-sm text-cyan-400">
                2021 – 2025
              </p>
            </div>

            {/* Experience */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Experience
              </p>

              <h3 className="mt-2 font-semibold text-white">
                Web Development Intern
              </h3>

              <p className="mt-1 text-sm text-cyan-400">
                CodSoft · 2023
              </p>
            </div>

            {/* Current Focus */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 sm:col-span-2">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Current Focus
              </p>

              <h3 className="mt-2 font-semibold text-white">
                MERN Stack Development
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                React.js · Node.js · Express.js · MongoDB
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;