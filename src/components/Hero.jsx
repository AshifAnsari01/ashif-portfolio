const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 px-6 pt-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Main Content */}
        <div>

          {/* Name */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Md Ashif Ansari
            </span>
          </h1>

          {/* Professional Heading */}
          <h2 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
            Frontend Developer | Aspiring MERN Stack Developer
          </h2>

          {/* Introduction */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            B.Tech graduate in Artificial Intelligence and Machine
            Learning from Techno International New Town, completed in
            2025. I build responsive web applications using React.js,
            JavaScript, Redux Toolkit, React Router, Tailwind CSS,
            and REST APIs, while expanding my skills toward full-stack
            MERN development.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            {/* View Projects */}
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 text-center font-bold text-slate-950 transition duration-300 hover:bg-cyan-300"
            >
              View Projects
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Md-Ashif-Ansari-Resume.pdf"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-bold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6">

            {/* GitHub */}
            <a
              href="https://github.com/AshifAnsari01"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition duration-300 hover:text-cyan-400"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/md-ashif-ansari/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition duration-300 hover:text-cyan-400"
            >
              LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:ashif7366@gmail.com"
              className="text-slate-400 transition duration-300 hover:text-cyan-400"
            >
              Email
            </a>

          </div>

        </div>

        {/* Developer Visual */}
        <div className="hidden justify-center md:flex">

          <div className="flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 shadow-2xl shadow-cyan-400/10">

            <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-400/20">
              <img
                src="/profile.png"
                alt="Md Ashif Ansari"
                className="h-full w-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;