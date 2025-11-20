import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Bell, Radio, Database, Settings, Shield, Clock, 
  Smartphone, Users, AlertCircle, HelpCircle, LifeBuoy, 
  Building, School, Lock, Mail, Filter, Map, UserPlus, 
  Key, Server, AlertTriangle, Phone, Home, Bluetooth, 
  Navigation, AlertOctagon, Building2, Waves, Mountain,
  Globe, CheckCircle, Info, DollarSign, Languages, 
  Battery, Download, MessageCircle, Droplets, BookOpen, 
  FileText, User, RefreshCw, Brain, Bone as Drone 
} from 'lucide-react';

const InstructionManual: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'manual' | 'faq' | 'features'>('manual');

  const renderManualContent = () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">1. 機能一覧</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">アカウント関連機能</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>ログイン・2段階認証：認証コードをメールで送信し、セキュリティを強化</li>
              <li>ログアウト：クライアントの接続を停止</li>
              <li>パスワードリセット：パスワードを忘れた場合に再設定</li>
              <li>会員登録：仮登録、本登録の2段階制</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">リアルタイム災害監視</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>メール受信データ抽出：Gmail APIを利用し、1か月間のデータを取得</li>
              <li>マップ表示：
                <ul className="list-inside ml-4">
                  <li>衝撃：赤マーク</li>
                  <li>水没：青マーク</li>
                  <li>ホバーでユーザーID表示</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">フィルタ機能</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>期間、地域、被害種類でフィルタリング</li>
              <li>検索機能で特定地域の被害情報を抽出</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">管理者向け機能</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>自治体アカウント管理：
                <ul className="list-inside ml-4">
                  <li>申請状況の確認、承認・停止</li>
                  <li>使用期間設定（過去1か月のデータのみ閲覧可能）</li>
                </ul>
              </li>
              <li>システム設定：
                <ul className="list-inside ml-4">
                  <li>データロードのタイミング設定</li>
                  <li>自動更新の時間設定</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. データ処理</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">データ取得・処理</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>データ取得：
                <ul className="list-inside ml-4">
                  <li>Gmailの特定フォルダからデータを取得</li>
                  <li>JSON形式で一時保存し、データベースに登録</li>
                </ul>
              </li>
              <li>位置情報処理：
                <ul className="list-inside ml-4">
                  <li>被害者の位置情報（緯度・経度）を住所に変換</li>
                  <li>マップにマークを表示し、救助対象を可視化</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. セキュリティ</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside space-y-2">
            <li>2段階認証による不正アクセス防止</li>
            <li>データ暗号化（通信およびデータ保存時）</li>
            <li>アクセス権限管理（自治体ごとに閲覧範囲を制限）</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. 今後の拡張予定</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside space-y-2">
            <li>災害発生時の自動通知</li>
            <li>人工知能(AI)を活用した救助支援</li>
            <li>ドローンとの連携による被害状況確認</li>
          </ul>
        </div>
      </section>
    </div>
  );

  const renderFeaturesContent = () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">あらゆる組織のための最強の防災・救助ネットワーク</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            レスキューロケーターは、企業・学校・保育園・幼稚園・地方自治体・消防・自衛隊など、すべての組織が導入できる防災・救助管理システムです。「わたしはココ」アプリとの連携により、通信が遮断された状況でも被災者や要救助者の位置情報を正確に把握し、迅速な対応を可能にします。
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">主な機能</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">アカウント管理</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>2段階認証によるセキュリティ強化</li>
              <li>パスワードリセット機能</li>
              <li>アクセス権限の詳細設定</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Map className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">リアルタイム監視</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>位置情報のリアルタイム更新</li>
              <li>被害状況の視覚的表示</li>
              <li>カスタマイズ可能なアラート設定</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Filter className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">高度なフィルタリング</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>地域別フィルタリング</li>
              <li>被害種類による絞り込み</li>
              <li>期間指定検索</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Settings className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">システム管理</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>自動データ更新設定</li>
              <li>アカウント権限管理</li>
              <li>システムログの監視</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">データ処理システム</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Database className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">データ収集</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>Gmail APIによるデータ取得</li>
              <li>JSON形式でのデータ保存</li>
              <li>自動データベース更新</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Globe className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">位置情報処理</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>緯度経度から住所への変換</li>
              <li>マップ上での可視化</li>
              <li>リアルタイム位置追跡</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">セキュリティ対策</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Lock className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">認証セキュリティ</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>2段階認証</li>
              <li>パスワード強度要件</li>
              <li>セッション管理</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">データ保護</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>通信の暗号化</li>
              <li>データベース暗号化</li>
              <li>アクセスログ記録</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Key className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">アクセス制御</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>権限ベースの制御</li>
              <li>IP制限オプション</li>
              <li>監査ログ機能</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">将来の展開</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Bell className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">自動通知システム</h3>
            </div>
            <p>災害発生時の自動通知機能の実装予定</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Brain className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">AI支援</h3>
            </div>
            <p>人工知能による救助活動支援の開発</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Drone className="text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold">ドローン連携</h3>
            </div>
            <p>ドローンを活用した被害状況確認システムの導入</p>
          </div>
        </div>
      </section>
    </div>
  );

  const renderFAQContent = () => (
    <div className="space-y-8">
      <section>
        <h3 className="text-2xl font-semibold mb-6 flex items-center text-blue-700">
          <Info className="mr-2" />
          基本的な質問
        </h3>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3">Q1. レスキューロケーターとは何ですか？</h4>
            <div className="pl-4 border-l-4 border-blue-500">
              <p className="text-gray-700">
                レスキューロケーターは、災害時に位置情報を共有し、救助を迅速に行うためのシステムです。スマートフォンのGPSやBluetooth通信を利用し、ネットワークが使えない環境でも情報伝達を可能にします。
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3">Q2. どのような場面で使用できますか？</h4>
            <div className="pl-4 border-l-4 border-blue-500">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>地震、津波、台風などの自然災害時</li>
                <li>山岳や海上での遭難時</li>
                <li>高層ビルや地下施設などの電波が届きにくい場所での救助活動</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3">Q3. どのように位置情報を送信しますか？</h4>
            <div className="pl-4 border-l-4 border-blue-500">
              <p className="text-gray-700">
                通常はスマートフォンのGPSを利用しますが、ネットワークが利用できない場合はBluetooth通信を活用して近くのユーザーと情報を共有し、リレー方式で救助者に情報を届けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6 flex items-center text-blue-700">
          <AlertCircle className="mr-2" />
          安否確認・居場所特定に関する課題
        </h3>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3">Q4. 安否確認が取れない場合、どうすればいいか？</h4>
            <div className="pl-4 border-l-4 border-green-500">
              <h5 className="font-semibold text-green-700 mb-2">レスキューロケーターの解決策:</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>「わたしはココ」アプリと連携し、ユーザーの最新位置情報を取得</li>
                <li>ネットワークが途絶えている場合でもBluetooth通信を活用し、近くのデバイスと情報共有</li>
                <li>システム管理画面で対象者の最終位置情報と行動履歴を確認可能</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6 flex items-center text-blue-700">
          <Building className="mr-2" />
          企業・学校・自治体の課題
        </h3>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3">Q5. 社員や生徒の安否が分からない場合は？</h4>
            <div className="pl-4 border-l-4 border-green-500">
              <h5 className="font-semibold text-green-700 mb-2">レスキューロケーターの解決策:</h5>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>企業・学校ごとの管理画面で、従業員・生徒の位置情報を確認可能</li>
                <li>アラート通知を自動送信し、安否確認を迅速化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">レスキューロケーター 取扱説明書 & FAQ</h1>
      
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
          <button 
            className={`px-4 py-2 rounded-md ${activeSection === 'manual' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveSection('manual')}
          >
            取扱説明書
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeSection === 'features' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveSection('features')}
          >
            機能説明書
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeSection === 'faq' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveSection('faq')}
          >
            FAQ
          </button>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <div className="flex items-start">
          <AlertCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {activeSection === 'manual' ? '取扱説明書について' :
               activeSection === 'features' ? '機能説明書について' : 'よくある質問'}
            </h2>
            <p className="text-gray-700">
              {activeSection === 'manual' ? 
                'レスキューロケーターの基本的な使用方法と操作手順を説明しています。' :
               activeSection === 'features' ? 
                'システムの詳細な機能と技術仕様について説明しています。' :
                '安否確認や救助活動に関する一般的な質問とその解決策をまとめています。'}
            </p>
          </div>
        </div>
      </div>

      {activeSection === 'manual' && renderManualContent()}
      {activeSection === 'features' && renderFeaturesContent()}
      {activeSection === 'faq' && renderFAQContent()}

      <div className="mt-8 flex justify-center">
        <Link to="/plan-comparison" className="btn btn-primary inline-flex items-center">
          <LifeBuoy className="mr-2" size={20} />
          プラン機能比較を見る
        </Link>
      </div>
    </div>
  );
};

export default InstructionManual;