const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and user-focused web interfaces.",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Router",
      "Responsive Design",
    ],
  },

  {
    title: "State & API Management",
    description: "Managing application state and integrating web APIs.",
    skills: [
      "Redux Toolkit",
      "REST APIs",
      "Axios",
      "Fetch API",
      "JSON",
      "LocalStorage",
    ],
  },

  {
    title: "Backend & Database",
    description: "Backend technologies and database fundamentals.",
    skills: [
      "Node.js",
      "Express.js",
      "SQL",
      "DBMS",
    ],
  },

  {
    title: "Programming",
    description: "Programming fundamentals and development concepts.",
    skills: [
      "C++",
      "OOP",
    ],
  },

  {
    title: "Development Tools",
    description: "Tools used for development, testing, and deployment.",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "VS Code",
      "Postman",
      "Netlify",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technical Expertise
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Technologies and development tools I use to build modern,
            responsive, and user-focused web applications.
          </p>

        </div>

        {/* Skill Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900"
            >

              {/* Category Title */}
              <h3 className="text-xl font-semibold text-white transition duration-300 group-hover:text-cyan-400">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {group.description}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2.5">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-cyan-400/60 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;