import { Play, BookOpen, Headphones } from 'lucide-react';

const videos = [
  {
    title: 'The Mercy of Allah',
    thumb: 'https://images.unsplash.com/photo-1523419409543-a5e549c1cfb7?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.youtube.com/watch?v=Jj8G5ZQ1kNE'
  },
  {
    title: 'Stories of the Prophets',
    thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.youtube.com/watch?v=0BFXxL7kwhQ'
  },
  {
    title: 'Quran Reflections',
    thumb: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.youtube.com/watch?v=W-4l2I7aY5Y'
  }
];

const audios = [
  {
    title: 'Soothing Nasheed',
    thumb: 'https://images.unsplash.com/photo-1525049369377-3b1ce5f0ef1f?q=80&w=1200&auto=format&fit=crop',
    link: 'https://soundcloud.com/'
  },
  {
    title: 'Remembrance (Dhikr)',
    thumb: 'https://images.unsplash.com/photo-1536599018102-9f803c0f6a29?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Quran Recitation',
    thumb: 'https://images.unsplash.com/photo-1546443046-ed1ce6ffd1e9?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  }
];

const texts = [
  {
    title: 'Fortress of the Muslim',
    thumb: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: '40 Hadith of An-Nawawi',
    thumb: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Seerah Highlights',
    thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  }
];

function Section({ id, icon: Icon, title, items }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-6 w-6 text-emerald-600" />
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <img src={item.thumb} alt={item.title} className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 p-4">
              <p className="text-white text-lg font-medium drop-shadow">{item.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function MediaGrid() {
  return (
    <div>
      <Section id="videos" icon={Play} title="Featured Videos" items={videos} />
      <Section id="audio" icon={Headphones} title="Beautiful Audio" items={audios} />
      <Section id="texts" icon={BookOpen} title="Timeless Texts" items={texts} />
    </div>
  );
}
