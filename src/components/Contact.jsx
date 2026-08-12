const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I'm currently open to frontend development and entry-level
            MERN opportunities. If you have an opportunity or would
            like to connect, feel free to reach out.
          </p>

        </div>

        {/* Contact Content */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Get In Touch
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Let's talk about opportunities.
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm interested in frontend development roles and
              opportunities where I can contribute my React.js skills
              while continuing to grow toward full-stack MERN development.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">

              {/* Email */}
              <a
                href="mailto:ashif7366@gmail.com"
                className="group block rounded-xl border border-slate-800 bg-slate-950 p-5 transition duration-300 hover:border-cyan-400/50"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <p className="mt-2 text-sm font-medium text-slate-200 transition group-hover:text-cyan-400">
                  ashif7366@gmail.com
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:+919472854407"
                className="group block rounded-xl border border-slate-800 bg-slate-950 p-5 transition duration-300 hover:border-cyan-400/50"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </p>

                <p className="mt-2 text-sm font-medium text-slate-200 transition group-hover:text-cyan-400">
                  +91 9472854407
                </p>
              </a>

            </div>

          </div>

          {/* Recruiter CTA */}
          <div className="flex flex-col justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Open to Opportunities
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
                Ready to contribute and grow as a developer.
              </h3>

              <p className="mt-5 leading-7 text-slate-400">
                I'm looking for opportunities where I can work on
                real-world applications, contribute to a development
                team, and continue building my skills across the MERN
                stack.
              </p>

              {/* Availability */}
              <div className="mt-7 flex items-center gap-3">

                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                <span className="text-sm font-medium text-slate-300">
                  Open to frontend and entry-level MERN roles
                </span>

              </div>

            </div>

            {/* Gmail Button */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashif7366@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
            >
              Email Me
              <span className="ml-2">→</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;