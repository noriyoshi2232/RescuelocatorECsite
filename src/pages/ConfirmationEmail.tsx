import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConfirmationEmail: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">登録確認</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-green-600" />
        </div>
        <p className="mb-4 text-center text-lg">レスキューロケーターにご登録いただき、ありがとうございます。登録されたメールアドレスに確認メールを送信しました。</p>
        <p className="mb-6 text-center">メールをご確認の上、記載されている手順に従って次のステップにお進みください。</p>
        
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center"
          >
            ホームに戻る
          </Link>
        </div>
        
        <p className="mt-6 text-center text-sm text-gray-600">
          ご不明な点やご質問がございましたら、お気軽にサポートチームまでお問い合わせください。
        </p>
      </div>
    </div>
  );
};

export default ConfirmationEmail;