'use client';

import { useRouter } from 'next/navigation';
import './thankyou.css';

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <main className="thank-you-page">
      <div className="thank-you-box">
        <h1>🌑 Thank You!</h1>
        <p>Your Lunar Products purchase helps light up a brighter future. ⚡</p>
        <button onClick={() => router.push('/')}>Return to Home</button>
      </div>
    </main>
  );
}
