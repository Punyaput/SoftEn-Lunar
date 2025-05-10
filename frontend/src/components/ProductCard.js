import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link href={`/store/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          className="product-image"
          width={500}
          height={500}
        />
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-footer">
            <span className="product-price">{product.price} THB</span>
            {product.lunar_powered && (
              <span className="badge lunar-badge">🌑 Lunar</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
