import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Shield, AlertCircle } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const PlanConfirmation: React.FC = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [termsRead, setTermsRead] = useState(false);
  const [privacyRead, setPrivacyRead] = useState(false);
  const termsRef = useRef<HTMLDivElement>(null);
  const privacyRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedPlan = searchParams.get('plan');

  const getPlanDetails = (plan: string | null) => {
    switch (plan) {
      case 'light':
        return { name: 'ライトプラン', price: '¥600,000' };
      case 'basic':
        return { name: 'ベーシックプラン', price: '¥2,000,000' };
      case 'premium':
        return { name: 'プレミアムプラン', price: '¥5,000,000' };
      case 'municipality':
        return { name: '政府自治体専用プラン', price: '¥1500,000 + 月額¥18,000' };
      case 'education':
        return { name: '教育保育機関専用プラン', price: '¥1,000,000/年 or ¥100,000/月' };
      default:
        return { name: '不明なプラン', price: '価格未定' };
    }
  };

  const planDetails = getPlanDetails(selectedPlan);

  const handleScroll = (element: HTMLDivElement, type: 'terms' | 'privacy') => {
    const { scrollTop, scrollHeight, clientHeight } = element;
    const isBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (isBottom) {
      if (type === 'terms') {
        setTermsRead(true);
      } else {
        setPrivacyRead(true);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted || !privacyAccepted) {
      return;
    }
    navigate(`/register?plan=${selectedPlan}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">プラン確認</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <div className="flex items-center justify-center mb-6">
          <Shield size={48} className="text-blue-600" />
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">{planDetails.name}</h2>
          <p className="text-xl text-gray-600">{planDetails.price}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">利用規約</h3>
              <div 
                ref={termsRef}
                className="h-64 overflow-y-auto border rounded p-4 mb-2"
                onScroll={(e) => handleScroll(e.currentTarget, 'terms')}
              >
                <TermsOfService />
              </div>
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    disabled={!termsRead}
                    className={`w-4 h-4 border-gray-300 rounded ${!termsRead ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    required
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="terms" className={`text-sm ${!termsRead ? 'text-gray-400' : ''}`}>
                    利用規約に同意します
                  </label>
                </div>
              </div>
              {!termsRead && (
                <p className="text-sm text-amber-600 mt-1">
                  ※ 利用規約を最後までお読みください
                </p>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">プライバシーポリシー</h3>
              <div 
                ref={privacyRef}
                className="h-64 overflow-y-auto border rounded p-4 mb-2"
                onScroll={(e) => handleScroll(e.currentTarget, 'privacy')}
              >
                <PrivacyPolicy />
              </div>
              <div className="flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    disabled={!privacyRead}
                    className={`w-4 h-4 border-gray-300 rounded ${!privacyRead ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    required
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="privacy" className={`text-sm ${!privacyRead ? 'text-gray-400' : ''}`}>
                    プライバシーポリシーに同意します
                  </label>
                </div>
              </div>
              {!privacyRead && (
                <p className="text-sm text-amber-600 mt-1">
                  ※ プライバシーポリシーを最後までお読みください
                </p>
              )}
            </div>
          </div>

          {(!termsAccepted || !privacyAccepted) && (
            <div className="flex items-center text-amber-600 text-sm mt-4">
              <AlertCircle size={16} className="mr-2" />
              <p>続行するには利用規約とプライバシーポリシーに同意する必要があります</p>
            </div>
          )}

          <div className="flex flex-col space-y-4 mt-8">
            <button
              type="submit"
              className={`btn ${
                termsAccepted && privacyAccepted ? 'btn-primary' : 'bg-gray-300 cursor-not-allowed'
              } w-full`}
              disabled={!termsAccepted || !privacyAccepted}
            >
              登録に進む
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn btn-secondary"
            >
              プラン選択に戻る
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanConfirmation;