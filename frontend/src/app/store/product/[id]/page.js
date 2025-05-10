// app/store/product/[id]/page.js
import AddToCart from '@/components/AddToCart';
import './product-detail.css';
import Image from 'next/image';
import { fetchAPI } from '@/utils/api';

async function getProduct(id) {
  const product = await fetchAPI(`/api/products/${id}/`);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
}

export default async function ProductDetailPage({ params }) {
  const paramsawaiter = await params
  const product = await getProduct(paramsawaiter.id);

  return (
    <main className="product-detail-page">
      <div className="product-container">
        <div className="product-gallery">
          <Image 
            src={product.image_url} 
            alt={product.name}
            className="main-image"
            width={500}
            height={500}
          />
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          
          <div className="badges">
            <span className="Moony-badge">
              Lunar Product
            </span>
            {product.Lunar_powered && (
              <span className="Lunar-badge">🌑 Made on the Moon</span>
            )}
          </div>
          
          <p className="price">{product.price} THB</p>
          <p className="description">{product.description}</p>
          
          <AddToCart product={product} />
          
          <div className="impact-section">
            <h3>Cosmic Effects</h3>
            <ul className="impact-list">
              {product.cosmic_effects && product.cosmic_effects.length > 0 ? (
                product.cosmic_effects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))
              ) : (
                <li>No known effects... yet.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
