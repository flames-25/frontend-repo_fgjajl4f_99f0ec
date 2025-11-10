import { useState, useEffect } from 'react';
import { Menu, X, Search, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Respect system preference on first load
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const hasClass = document.documentElement.classList.contains('dark');
    setDark(prefersDark || hasClass);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-emerald-600 text-white grid place-items-center font-bold">ن</div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">Nur Media</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#videos" className="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400">Videos</a>
            <a href="#audio" className="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400">Audio</a>
            <a href="#texts" className="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400">Texts</a>
            <a href="#about" className="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400">About</a>
          </div>

          <div className="flex items-center gap-2">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Toggle theme" onClick={() => setDark((d) => !d)} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 py-3 space-y-2">
            <a href="#videos" className="block px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200">Videos</a>
            <a href="#audio" className="block px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200">Audio</a>
            <a href="#texts" className="block px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200">Texts</a>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200">About</a>
          </div>
        )}
      </nav>
    </header>
  );
}
