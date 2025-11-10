import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qv5C8m1eQxTBw7FR/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative isolate max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-600/20 px-3 py-1 text-sm">Islamic Media • Knowledge • Serenity</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Illuminate your heart with beautiful Islamic content
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Explore curated videos, nasheeds, and timeless texts from classical and contemporary sources — all in one tranquil space.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#videos" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 text-white px-5 py-3 font-medium shadow hover:bg-emerald-700 transition">Browse Videos</a>
            <a href="#texts" className="inline-flex items-center justify-center rounded-lg bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-5 py-3 font-medium border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-white/90 dark:hover:bg-neutral-900/90 transition">Read Texts</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white dark:from-neutral-950/70 dark:via-neutral-950/30 dark:to-neutral-950" />
    </section>
  );
}
