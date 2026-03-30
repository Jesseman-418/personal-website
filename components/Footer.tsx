export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Jesse Man. Built with Next.js &amp;
          Tailwind.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Jesseman-418"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-brand-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jesse-man-devamirtham/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-brand-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:njessemandevamirtham@gmail.com"
            className="text-sm text-gray-500 hover:text-brand-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
