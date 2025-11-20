import React, { useState } from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでバックエンドにフォームデータを送信する処理を行います
    console.log('フォーム送信:', formData);
    alert('メッセージをお送りいただき、ありがとうございます。近日中にご連絡いたします。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">お問い合わせフォーム</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">お名前:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">メールアドレス:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">メッセージ:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              送信する
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">連絡先情報</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail size={24} className="text-blue-600" />
              <span>wdpc.im.here@wdpc.jp</span>
            </div>
            <div className="flex items-center space-x-4">
              <Globe size={24} className="text-blue-600" />
              <span>https://www.wdpc.info</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin size={24} className="text-blue-600" />
              <span>〒652-0898 神戸市兵庫区駅前通５－３－１１</span>
            </div>
          </div>
          <div className="mt-8">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;