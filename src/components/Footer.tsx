import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">レスキューロケーター</h3>
            <p className="text-sm">最先端の位置情報技術で緊急サービスを支援します。</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">ホーム</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">概要</Link></li>
              <li><Link to="/rescue-locator-explanation" className="hover:text-blue-400 transition-colors">システム説明</Link></li>
              <li><Link to="/instruction-manual" className="hover:text-blue-400 transition-colors flex items-center">
                <BookOpen size={14} className="mr-1" />
                取扱説明書・FAQ
              </Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">法的情報</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">プライバシーポリシー</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">利用規約</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">ソーシャルメディア</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 レスキューロケーター. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;