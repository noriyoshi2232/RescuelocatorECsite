import React from 'react';
import { CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AWSSettingsConfirmation: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">AWS設定完了</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle size={64} className="text-green-600" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">AWS設定が完了しました</h2>
          <p className="text-gray-600">
            設定内容を保存し、AWSアカウントの初期設定を開始しました
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Shield className="mr-2 text-blue-600" />
            次のステップ
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ArrowRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
              <span>登録されたメールアドレスに、AWS環境のセットアップ手順を送信しました</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
              <span>メールの手順に従って、AWSコンソールへのアクセスを設定してください</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
              <span>クレジットカード情報の登録は、AWSコンソールの支払い設定ページで行っていただきます</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-yellow-800">
            ※ AWS環境のセットアップには数分かかる場合があります。
            メールが届くまでしばらくお待ちください。
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="btn btn-primary text-center"
          >
            ホームに戻る
          </Link>
          <button 
            onClick={() => window.location.href = 'https://console.aws.amazon.com'}
            className="btn btn-secondary text-center"
          >
            AWSコンソールを開く
          </button>
        </div>
      </div>
    </div>
  );
};

export default AWSSettingsConfirmation;