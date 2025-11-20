import React, { useState } from 'react';
import { Mail, AlertCircle, CheckCircle, Lock } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [emailSettings, setEmailSettings] = useState({
    senderEmail: 'wdpc.im.here@wdpc.jp',
    smtpServer: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUsername: 'wdpc.im.here@wdpc.jp',
    smtpPassword: '',
  });
  const [testEmailAddress, setTestEmailAddress] = useState('');
  const [sendingStatus, setSendingStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmailSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = async () => {
    try {
      // In a production environment, this should be an API call to your backend
      // where the settings would be securely stored
      console.log('Settings would be saved securely on the backend');
      alert('メール設定が正常に保存されました。');
    } catch (error) {
      console.error('設定の保存中にエラーが発生しました:', error);
      alert('設定の保存中にエラーが発生しました。');
    }
  };

  const handleTestEmail = async () => {
    setSendingStatus('sending');
    try {
      // In a production environment, this would be an API call to your backend
      // which would handle the actual email sending
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSendingStatus('success');
      setTimeout(() => setSendingStatus('idle'), 3000);
    } catch (error) {
      console.error('メール送信エラー:', error);
      setSendingStatus('error');
      setTimeout(() => setSendingStatus('idle'), 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">管理者ダッシュボード</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-6">
          <Lock className="text-blue-600 mr-2" size={24} />
          <h2 className="text-2xl font-semibold">メールサーバー設定</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="senderEmail" className="block mb-1">送信者メールアドレス:</label>
            <input
              type="email"
              id="senderEmail"
              name="senderEmail"
              value={emailSettings.senderEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="smtpServer" className="block mb-1">SMTPサーバー:</label>
            <input
              type="text"
              id="smtpServer"
              name="smtpServer"
              value={emailSettings.smtpServer}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="smtpPort" className="block mb-1">SMTPポート:</label>
            <select
              id="smtpPort"
              name="smtpPort"
              value={emailSettings.smtpPort}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
            >
              <option value="587">587 (STARTTLS)</option>
              <option value="465">465 (SSL/TLS)</option>
            </select>
          </div>
          <div>
            <label htmlFor="smtpUsername" className="block mb-1">SMTPユーザー名:</label>
            <input
              type="text"
              id="smtpUsername"
              name="smtpUsername"
              value={emailSettings.smtpUsername}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="smtpPassword" className="block mb-1">SMTPパスワード:</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="smtpPassword"
                name="smtpPassword"
                value={emailSettings.smtpPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "非表示" : "表示"}
              </button>
            </div>
          </div>
        </div>
        <button 
          onClick={handleSaveSettings} 
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center"
        >
          <Lock className="mr-2" size={16} />
          設定を保存
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <Mail className="text-blue-600 mr-2" size={24} />
          <h2 className="text-2xl font-semibold">テストメール送信</h2>
        </div>
        <div className="mb-4">
          <label htmlFor="testEmail" className="block mb-1">テスト用メールアドレス:</label>
          <input
            type="email"
            id="testEmail"
            value={testEmailAddress}
            onChange={(e) => setTestEmailAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
            placeholder="test@example.com"
          />
        </div>
        <button 
          onClick={handleTestEmail} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center"
          disabled={sendingStatus === 'sending'}
        >
          <Mail className="mr-2" size={16} />
          {sendingStatus === 'sending' ? '送信中...' : 'テストメール送信'}
        </button>
        {sendingStatus === 'success' && (
          <div className="mt-4 p-2 bg-green-100 text-green-700 rounded flex items-center">
            <CheckCircle className="mr-2" size={16} /> テストメールが正常に送信されました。
          </div>
        )}
        {sendingStatus === 'error' && (
          <div className="mt-4 p-2 bg-red-100 text-red-700 rounded flex items-center">
            <AlertCircle className="mr-2" size={16} /> テストメールの送信に失敗しました。設定を確認してください。
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;