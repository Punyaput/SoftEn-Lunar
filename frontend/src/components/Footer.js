'use client';
import { Leaf, Heart, Moon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <Moon className="footer-icon" />
          <span className="footer-text">SF222 Software Engineering Models and Analysis 🌑 | MVC Project</span>
        </div>

        <div className="footer-right">
          <p className="footer-description">
            Made with Django and NextJS <Heart className="heart-icon" /> <Leaf className="leaf-icon" />
          </p>
          <p className="footer-description">
            &copy; {new Date().getFullYear()} SoftEn Lunar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

