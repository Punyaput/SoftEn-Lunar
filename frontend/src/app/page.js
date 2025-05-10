import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero-section">
        <h1>🌙 Lunar Products - Made from the Moon 🌙</h1>
        <p>
          Change your life with extraterrestrial moon products. <br></br> 
          🌑 Earn Moon Points by checking in every night! <br></br>
          ⭐ Buy Lunar Products today.
        </p>
      </section>

      <section className="featured-products">
        <h2>🌟 Featured Products</h2>
        <ProductGrid />
      </section>
    </main>
  );
}