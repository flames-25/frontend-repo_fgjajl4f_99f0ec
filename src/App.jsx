import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MediaGrid from './components/MediaGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <MediaGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
