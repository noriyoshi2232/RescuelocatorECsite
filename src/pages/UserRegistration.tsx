import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Shield, CreditCard, Building, AlertCircle, HelpCircle, ArrowRight, ArrowLeft } from 'lucide-react';

// Tooltip component
const Tooltip: React.FC<{ text: string }> = ({ text }) => (
  <div className="group relative inline-block">
    <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help ml-1" />
    <div className="hidden group-hover:block absolute z-10 w-64 p-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg -left-1/2">
      {text}
    </div>
  </div>
);

const UserRegistration: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<'form' | 'confirmation'>('form');
  const [formData, setFormData] = useState({
    // Organization info
    organizationName: '',
    department: '',
    name: '',
    contactNumber: '',
    email: '',
    confirmEmail: '',
    plan: 'basic',
    couponCode: '',

    // AWS related info
    useOwnAccount: true,
    awsAccountId: '',
    awsBillingEmail: '',
    awsRegion: 'ap-northeast-1',
    subAccountConsent: false,
    billingPolicyConsent: false,

    // Security related info
    password: '',
    confirmPassword: '',
    mfaEnabled: false,

    // Billing policy agreement
    billingConsent: false,
    termsConsent: false,
    creditCardConsent: false,

    // Billing information
    billingName: '',
    billingAddress: '',
    billingPhone: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planFromUrl = params.get('plan');
    if (planFromUrl) {
      setFormData(prev => ({ ...prev, plan: planFromUrl }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = (): string | null => {
    if (formData.email !== formData.confirmEmail) {
      return 'メールアドレスが一致しません';
    }

    if (formData.password !== formData.confirmPassword) {
      return 'パスワードが一致しません';
    }

    if (formData.password.length < 8) {
      return 'パスワードは8文字以上で入力してください';
    }

    if (formData.useOwnAccount && !formData.awsAccountId) {
      return 'AWSアカウントIDを入力してください';
    }

    if (!formData.billingConsent || !formData.termsConsent || !formData.creditCardConsent) {
      return 'すべての必須同意事項に同意してください';
    }

    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    if (step === 'form') {
      setStep('confirmation');
      window.scrollTo(0, 0);
    } else {
      console.log('フォーム送信:', formData);
      navigate('/confirmation-email');
    }
  };

  const getPlanName = (planId: string): string => {
    switch (planId) {
      case 'light': return 'ライトプラン (初期費用60万円 + 月額10,000円)';
      case 'education': return '教育機関プラン (初期費用100万円 + 月額15,000円)';
      case 'municipality': return '政府自治体プラン (初期費用150万円 + 月額20,000円)';
      case 'basic': return 'ベーシックプラン (初期費用200万円 + 月額25,000円)';
      case 'premium': return 'プレミアムプラン (初期費用500万円 + 月額50,000円)';
      default: return '不明なプラン';
    }
  };

  const renderConfirmation = () => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">入力内容の確認</h2>
        
        <div className="space-y-8">
          {/* Organization Information */}
          <section className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Building className="mr-2 text-blue-600" />
              組織情報
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">組織名</p>
                <p className="font-medium">{formData.organizationName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">部署</p>
                <p className="font-medium">{formData.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">氏名</p>
                <p className="font-medium">{formData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">連絡先電話番号</p>
                <p className="font-medium">{formData.contactNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">メールアドレス</p>
                <p className="font-medium">{formData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">選択プラン</p>
                <p className="font-medium">{getPlanName(formData.plan)}</p>
              </div>
              {formData.couponCode && (
                <div>
                  <p className="text-sm text-gray-500">クーポンコード</p>
                  <p className="font-medium">{formData.couponCode}</p>
                </div>
              )}
            </div>
          </section>

          {/* AWS Information */}
          <section className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Shield className="mr-2 text-blue-600" />
              AWS関連情報
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">AWSアカウント方式</p>
                <p className="font-medium">{formData.useOwnAccount ? '自身のAWSアカウントを使用' : '事業者のAWS Organizations配下でサブアカウントを作成'}</p>
              </div>
              {formData.useOwnAccount && (
                <>
                  <div>
                    <p className="text-sm text-gray-500">AWSアカウントID</p>
                    <p className="font-medium">{formData.awsAccountId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">AWSリージョン</p>
                    <p className="font-medium">{formData.awsRegion === 'ap-northeast-1' ? 'ap-northeast-1 (東京)' : 'ap-northeast-3 (大阪)'}</p>
                  </div>
                </>
              )}
              <div>
                <p className="text-sm text-gray-500">AWS請求先メールアドレス</p>
                <p className="font-medium">{formData.awsBillingEmail}</p>
              </div>
            </div>
          </section>

          {/* Billing Information */}
          <section className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <CreditCard className="mr-2 text-blue-600" />
              請求先情報
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.billingName && (
                <div>
                  <p className="text-sm text-gray-500">請求先名義</p>
                  <p className="font-medium">{formData.billingName}</p>
                </div>
              )}
              {formData.billingAddress && (
                <div>
                  <p className="text-sm text-gray-500">請求先住所</p>
                  <p className="font-medium whitespace-pre-line">{formData.billingAddress}</p>
                </div>
              )}
              {formData.billingPhone && (
                <div>
                  <p className="text-sm text-gray-500">請求先電話番号</p>
                  <p className="font-medium">{formData.billingPhone}</p>
                </div>
              )}
            </div>
          </section>

          {/* Security Information */}
          <section className="border-b pb-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Shield className="mr-2 text-blue-600" />
              セキュリティ情報
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">2段階認証（MFA）</p>
                <p className="font-medium">{formData.mfaEnabled ? '有効' : '無効'}</p>
              </div>
            </div>
          </section>

          {/* Agreements */}
          <section>
            <h3 className="text-lg font-semibold mb-3">同意事項</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-green-600">AWS費用はユーザー負担であることに同意</li>
              <li className="text-green-600">AWS課金に関する利用規約・プライバシーポリシーに同意</li>
              <li className="text-green-600">クレジットカード登録に同意</li>
            </ul>
          </section>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-6">
          <div className="flex items-start">
            <AlertCircle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
            <p className="text-sm text-yellow-700">
              入力内容を確認し、問題がなければ「登録を完了する」ボタンをクリックしてください。
              修正が必要な場合は「入力内容を修正する」ボタンをクリックしてください。
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
          <button
            type="button"
            onClick={() => setStep('form')}
            className="flex items-center justify-center px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 md:w-1/2"
          >
            <ArrowLeft className="mr-2" size={16} />
            入力内容を修正する
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 md:w-1/2"
          >
            登録を完了する
            <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Help Information */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
          <div className="flex items-start">
            <AlertCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
            <div className="text-sm text-blue-700">
              <p className="font-semibold mb-2">入力のヘルプ</p>
              <ul className="list-disc list-inside space-y-1">
                <li>各項目の横にある<HelpCircle className="w-4 h-4 inline mx-1" />アイコンにマウスを合わせると、詳細な説明が表示されます</li>
                <li>必須項目には * マークが付いています</li>
                <li>入力例を参考に、正確な情報を入力してください</li>
                <li>不明な点がある場合は、サポートチームにお問い合わせください</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 1. Organization Information */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Building className="mr-2 text-blue-600" />
            組織情報
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="organizationName" className="block mb-1">
                組織名 * 
                <Tooltip text="法人の場合は法人名、個人の場合は屋号などを入力してください" />
              </label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="例：株式会社レスキューロケーター"
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="department" className="block mb-1">
                部署 * 
                <Tooltip text="所属部署名を入力してください。個人の場合は「個人」と入力してください" />
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="例：情報システム部"
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-1">
                氏名 * 
                <Tooltip text="姓名の間にスペースを入れて入力してください" />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="例：山田 太郎"
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block mb-1">
                連絡先電話番号 * 
                <Tooltip text="緊急連絡用の電話番号です。ハイフンありで入力してください" />
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="例：03-1234-5678"
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                メールアドレス * 
                <Tooltip text="連絡用およびログイン用のメールアドレスです" />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="例：taro.yamada@example.com"
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmEmail" className="block mb-1">
                メールアドレス（確認） * 
                <Tooltip text="確認のため、同じメールアドレスをもう一度入力してください" />
              </label>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
                placeholder="例：taro.yamada@example.com"
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="plan" className="block mb-1">
                プラン * 
                <Tooltip text="ご希望のプランを選択してください" />
              </label>
              <select
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="light">ライトプラン (初期費用60万円 + 月額10,000円)</option>
                <option value="education">教育機関プラン (初期費用100万円 + 月額15,000円)</option>
                <option value="municipality">政府自治体プラン (初期費用150万円 + 月額20,000円)</option>
                <option value="basic">ベーシックプラン (初期費用200万円 + 月額25,000円)</option>
                <option value="premium">プレミアムプラン (初期費用500万円 + 月額50,000円)</option>
              </select>
            </div>
            <div>
              <label htmlFor="couponCode" className="block mb-1">
                クーポンコード
                <Tooltip text="お持ちの場合のみ入力してください" />
              </label>
              <input
                type="text"
                id="couponCode"
                name="couponCode"
                value={formData.couponCode}
                onChange={handleChange}
                placeholder="お持ちの方は入力してください"
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </section>

        {/* 2. AWS Related Information */}
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

        {/* 3. Security Information */}
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

        {/* 4. Billing Policy and Agreement */}
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

        {/* 5. Billing Information */}
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

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
          >
            入力内容を確認する
            <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <h1 className="text-3xl font-bold mb-8 text-center">ユーザー登録・AWS設定</h1>
      
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step === 'form' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>
              1
            </div>
            <span className="text-sm mt-2">情報入力</span>
          </div>
          <div className="flex-1 h-1 mx-2 bg-gray-300">
            <div className={`h-full ${step === 'confirmation' ? 'bg-blue-600' : 'bg-gray-300'}`} style={{ width: step === 'form' ? '0%' : '100%' }}></div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step === 'confirmation' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              2
            </div>
            <span className="text-sm mt-2">確認</span>
          </div>
          <div className="flex-1 h-1 mx-2 bg-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-600">
              3
            </div>
            <span className="text-sm mt-2">完了</span>
          </div>
        </div>
      </div>

      {step === 'form' ? renderForm() : renderConfirmation()}
    </div>
  );
};

export default UserRegistration;