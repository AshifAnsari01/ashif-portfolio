const projects = [
  {
    title: "Job Portal Dashboard",
    description:
      "A responsive job portal dashboard featuring authentication UI, job listings, search, filtering, profile management, notifications, and dashboard functionality.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
    ],
    github: "https://github.com/AshifAnsari01/job-portal-frontend",
    live: "https://ashif-job-portal.netlify.app/",
    featured: true,
  },

  {
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce application with product browsing, search, filtering, product details, shopping cart, wishlist, and centralized state management.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
    ],
    github: "https://github.com/AshifAnsari01/Ecommerce-Website",
    live: "https://shopeasereact.netlify.app/",
    featured: true,
  },

  {
    title: "Currency Converter",
    description:
      "A responsive currency conversion application that retrieves exchange-rate data through an API and converts values between currencies.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST API",
    ],
    github: "https://github.com/AshifAnsari01/Currency-Convertor",
    live: "https://currencyconvertor010.netlify.app/",
  },

  {
    title: "Movie Search App",
    description:
      "A movie search application that retrieves movie information from an API and displays results through a responsive interface.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST API",
    ],
    github: "https://github.com/AshifAnsari01/movie-search-app",
    live: "https://moviesearchapp001.netlify.app/",
  },

  {
    title: "Weather App",
    description:
      "A responsive weather application that retrieves weather information through an API and presents the results in a simple interface.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST API",
    ],
    github: "https://github.com/AshifAnsari01/Weather-app01",
    live: "",
  },

  {
    title: "Analog Clock",
    description:
      "A responsive analog clock built with JavaScript that dynamically displays the current time.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    github: "https://github.com/AshifAnsari01/Analog-Clock",
    live: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            A selection of applications I have built while developing
            my frontend and full-stack development skills.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className={`group flex flex-col rounded-2xl border bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 ${
                project.featured
                  ? "border-cyan-400/30 hover:border-cyan-400"
                  : "border-slate-800 hover:border-cyan-400/50"
              }`}
            >

              {/* Featured Badge */}
              {project.featured && (
                <span className="mb-5 w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                  Featured Project
                </span>
              )}

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-white transition duration-300 group-hover:text-cyan-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-6 flex gap-3 border-t border-slate-800 pt-5">

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="cursor-not-allowed rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-500">
                    Live Demo
                  </span>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;