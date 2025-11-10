export default function Footer() {
  return (
    <footer id="about" className="border-t border-neutral-200 dark:border-neutral-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Nur Media</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">Sharing light through authentic knowledge, sound media, and reflective texts.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">Explore</h4>
          <ul className="mt-3 space-y-2 text-neutral-600 dark:text-neutral-400">
            <li><a href="#videos" className="hover:text-emerald-600 dark:hover:text-emerald-400">Videos</a></li>
            <li><a href="#audio" className="hover:text-emerald-600 dark:hover:text-emerald-400">Audio</a></li>
            <li><a href="#texts" className="hover:text-emerald-600 dark:hover:text-emerald-400">Texts</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">About</h4>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">Crafted with care for seekers of beauty and truth. May it be of benefit.</p>
        </div>
      </div>
      <div className="py-6 text-center text-sm text-neutral-500 dark:text-neutral-500">© {new Date().getFullYear()} Nur Media. All rights reserved.</div>
    </footer>
  );
}
