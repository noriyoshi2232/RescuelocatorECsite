import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CreditCard, Building, AlertCircle, HelpCircle } from 'lucide-react';

// ツールチップコンポーネント
const Tooltip: React.FC<{ text: string }> = ({ text }) => (
  <div className="group relative inline-block">
    <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help ml-1" />
    <div className="hidden group-hover:block absolute z-10 w-64 p-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg -left-1/2">
      {text}
    </div>
  </div>
);

const AWSSettings: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // 1. 基本情報
    fullName: '',
    email: '',
    phone: '',

    // 2. AWS関連情報
    useOwnAccount: true,
    awsAccountId: '',
    awsBillingEmail: '',
    awsRegion: 'ap-northeast-1',
    subAccountConsent: false,
    billingPolicyConsent: false,

    // 3. セキュリティ関連情報
    password: '',
    confirmPassword: '',
    mfaEnabled: false,

    // 4. 課金ポリシー同意
    billingConsent: false,
    termsConsent: false,
    creditCardConsent: false,

    // 5. 請求先情報
    billingName: '',
    billingAddress: '',
    billingPhone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('パスワードが一致しません');
      return;
    }

    if (!formData.billingConsent || !formData.termsConsent || !formData.creditCardConsent) {
      alert('すべての必須同意事項に同意してください');
      return;
    }

    if (formData.useOwnAccount && !formData.awsAccountId) {
      alert('AWSアカウントIDを入力してください');
      return;
    }

    console.log('AWS設定フォーム送信:', formData);
    navigate('/aws-settings-confirmation');
  };

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <h1 className="text-3xl font-bold mb-8 text-center">AWS設定</h1>
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-8">
        <div className="flex items-start">
          <AlertCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
          <div className="text-sm text-blue-700">
            <p className="font-semibold mb-2">AWS設定のヘルプ</p>
            <ul className="list-disc list-inside space-y-1">
              <li>各項目の横にある<HelpCircle className="w-4 h-4 inline mx-1" />アイコンにマウスを合わせると、詳細な説明が表示されます</li>
              <li>必須項目には * マークが付いています</li>
              <li>入力例を参考に、正確な情報を入力してください</li>
              <li>不明な点がある場合は、サポートチームにお問い合わせください</li>
            </ul>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 1. 基本情報 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Shield className="mr-2 text-blue-600" />
            基本情報
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-1">
                氏名（フルネーム）* 
                <Tooltip text="姓名の間にスペースを入れて入力してください" />
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="例：山田 太郎"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                メールアドレス（ログイン用・AWS通知用）* 
                <Tooltip text="AWSからの通知やログイン認証に使用されます" />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="例：taro.yamada@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">
                電話番号（推奨）
                <Tooltip text="緊急連絡用の電話番号です。国際番号形式での入力を推奨します" />
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="例：+81-90-1234-5678"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </section>

        {/* 2. AWS関連情報 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Building className="mr-2 text-blue-600" />
            AWS関連情報
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="useOwnAccount"
                  checked={formData.useOwnAccount}
                  onChange={() => setFormData(prev => ({ ...prev, useOwnAccount: true }))}
                  className="mr-2"
                />
                方式1：ユーザー自身のAWSアカウントを使用（推奨）
                <Tooltip text="既存のAWSアカウントをお持ちの場合はこちらを選択してください" />
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="useOwnAccount"
                  checked={!formData.useOwnAccount}
                  onChange={() => setFormData(prev => ({ ...prev, useOwnAccount: false }))}
                  className="mr-2"
                />
                方式2：事業者のAWS Organizations配下でサブアカウントを作成
                <Tooltip text="新規にAWSアカウントが必要な場合はこちらを選択してください" />
              </label>
            </div>

            {formData.useOwnAccount ? (
              <>
                <div>
                  <label htmlFor="awsAccountId" className="block mb-1">
                    AWSアカウントID（12桁の数字）* 
                    <Tooltip text="AWSコンソールの右上に表示される12桁の数字です" />
                  </label>
                  <input
                    type="text"
                    id="awsAccountId"
                    name="awsAccountId"
                    pattern="[0-9]{12}"
                    required
                    placeholder="例：123456789012"
                    value={formData.awsAccountId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="awsBillingEmail" className="block mb-1">
                    AWS請求先メールアドレス* 
                    <Tooltip text="AWS利用料金の請求書が送信されるメールアドレスです" />
                  </label>
                  <input
                    type="email"
                    id="awsBillingEmail"
                    name="awsBillingEmail"
                    required
                    placeholder="例：billing@example.com"
                    value={formData.awsBillingEmail}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="awsRegion" className="block mb-1">
                    AWSリージョン* 
                    <Tooltip text="サービスを展開するAWSリージョンを選択してください" />
                  </label>
                  <select
                    id="awsRegion"
                    name="awsRegion"
                    required
                    value={formData.awsRegion}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="ap-northeast-1">ap-northeast-1 (東京)</option>
                    <option value="ap-northeast-3">ap-northeast-3 (大阪)</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="awsBillingEmail" className="block mb-1">
                    AWS請求用メールアドレス* 
                    <Tooltip text="AWS利用料金の請求書が送信されるメールアドレスです" />
                  </label>
                  <input
                    type="email"
                    id="awsBillingEmail"
                    name="awsBillingEmail"
                    required
                    placeholder="例：billing@example.com"
                    value={formData.awsBillingEmail}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="subAccountConsent"
                    name="subAccountConsent"
                    checked={formData.subAccountConsent}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="subAccountConsent">
                    AWSサブアカウント作成に同意する* 
                    <Tooltip text="Organizations配下にサブアカウントを作成することに同意します" />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="billingPolicyConsent"
                    name="billingPolicyConsent"
                    checked={formData.billingPolicyConsent}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="billingPolicyConsent">
                    AWS課金ポリシーに同意する* 
                    <Tooltip text="AWS利用料金の支払い条件に同意します" />
                  </label>
                </div>
              </>
            )}
          </div>
        </section>

        {/* 3. セキュリティ関連情報 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Shield className="mr-2 text-blue-600" />
            セキュリティ関連情報
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="password" className="block mb-1">
                パスワード* 
                <Tooltip text="8文字以上で、大文字・小文字・数字・記号を含める必要があります" />
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minLength={8}
                placeholder="例：P@ssw0rd123"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
              />
              <p className="text-sm text-gray-600 mt-1">8文字以上、英数字を含む必要があります</p>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-1">
                パスワード確認* 
                <Tooltip text="上記で入力したパスワードと同じものを入力してください" />
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                placeholder="パスワードを再入力"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="mfaEnabled"
                name="mfaEnabled"
                checked={formData.mfaEnabled}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="mfaEnabled">
                2段階認証（MFA）を有効にする 
                <Tooltip text="セキュリティ強化のため、スマートフォンなどで2段階認証を設定できます" />
              </label>
            </div>
          </div>
        </section>

        {/* 4. 課金ポリシーおよび同意 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <CreditCard className="mr-2 text-blue-600" />
            課金ポリシーおよび同意
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="billingConsent"
                name="billingConsent"
                checked={formData.billingConsent}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="billingConsent">
                AWS費用はユーザー負担であることに同意する* 
                <Tooltip text="AWS利用に伴う全ての費用はユーザー様の負担となります" />
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="termsConsent"
                name="termsConsent"
                checked={formData.termsConsent}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="termsConsent">
                AWS課金に関する利用規約・プライバシーポリシーに同意する* 
                <Tooltip text="AWS利用に関する規約とプライバシーポリシーに同意します" />
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="creditCardConsent"
                name="creditCardConsent"
                checked={formData.creditCardConsent}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="creditCardConsent">
                クレジットカード登録に同意する* 
                <Tooltip text="AWS利用料金の支払いにはクレジットカードが必要です" />
              </label>
            </div>
          </div>
        </section>

        {/* 5. 請求先情報 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Building className="mr-2 text-blue-600" />
            請求先情報
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="billingName" className="block mb-1">
                請求先名義（個人名または法人名）
                <Tooltip text="請求書に記載される名義を入力してください" />
              </label>
              <input
                type="text"
                id="billingName"
                name="billingName"
                placeholder="例：株式会社レスキューロケーター"
                value={formData.billingName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="billingAddress" className="block mb-1">
                請求先住所
                <Tooltip text="請求書の送付先住所を入力してください" />
              </label>
              <textarea
                id="billingAddress"
                name="billingAddress"
                placeholder="例：〒100-0001&#13;東京都千代田区千代田1-1-1&#13;千代田ビル1F"
                value={formData.billingAddress}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                rows={3}
              />
            </div>
            <div>
              <label htmlFor="billingPhone" className="block mb-1">
                請求先電話番号
                <Tooltip text="請求に関する連絡用の電話番号を入力してください" />
              </label>
              <input
                type="tel"
                id="billingPhone"
                name="billingPhone"
                placeholder="例：03-1234-5678"
                value={formData.billingPhone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </section>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
            <p className="text-sm text-yellow-700">
              入力された情報は安全に保管され、AWS環境のセットアップにのみ使用されます。
              クレジットカード情報は別途AWSの支払い設定ページで直接入力していただきます。
            </p>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            戻る
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            設定を保存
          </button>
        </div>
      </form>
    </div>
  );
};

export default AWSSettings;