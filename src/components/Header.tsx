import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LifeBuoy, Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <LifeBuoy size={32} />
            <span className="text-xl font-bold">レスキューロケーター</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">ホーム</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">概要</Link>
            <Link to="/rescue-locator-explanation" className="hover:text-blue-200 transition-colors">システム説明</Link>
            <Link to="/instruction-manual" className="hover:text-blue-200 transition-colors flex items-center">
              <BookOpen size={16} className="mr-1" />
              取扱説明書・FAQ
            </Link>
            <Link to="/plan-comparison" className="hover:text-blue-200 transition-colors">プラン機能比較</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">お問い合わせ</Link>
            <Link to="/admin-login" className="hover:text-blue-200 transition-colors">管理者</Link>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-blue-700">
            <Link to="/" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>ホーム</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>概要</Link>
            <Link to="/rescue-locator-explanation" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>システム説明</Link>
            <Link to="/instruction-manual" className="hover:text-blue-200 transition-colors flex items-center" onClick={toggleMenu}>
              <BookOpen size={16} className="mr-1" />
              取扱説明書・FAQ
            </Link>
            <Link to="/plan-comparison" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>プラン機能比較</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>お問い合わせ</Link>
            <Link to="/admin-login" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>管理者</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;