const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Md Ashif Ansari. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">

          <a
            href="https://github.com/AshifAnsari01"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-500 transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/md-ashif-ansari/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-500 transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ashif7366@gmail.com"
            className="text-sm text-slate-500 transition hover:text-cyan-400"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;