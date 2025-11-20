import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Shield, Clock, Smartphone, Users, AlertTriangle } from 'lucide-react';

const RescueLocatorExplanation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">レスキューロケーターとは</h1>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <div className="flex items-start">
          <AlertTriangle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
          <div>
            <h2 className="text-xl font-semibold mb-2">災害時の安否確認と救命のための革新的システム</h2>
            <p className="text-gray-700">
              レスキューロケーターは、災害時に人命を救うための世界初の安否救命システムです。
              正確な位置情報技術を活用し、緊急時の救助活動を迅速かつ効率的に支援します。
            </p>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">レスキューロケーター管理画面</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe 
              src="https://stg.wdpc.cloud/" 
              title="レスキューロケーター管理画面" 
              className="w-full h-[500px] rounded-lg border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center">
            <p className="text-base font-medium text-gray-800 mb-2">レスキューロケーター管理画面 - 災害時の要救助者位置情報マップ</p>
            <a 
              href="https://stg.wdpc.cloud/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              管理画面を新しいタブで開く
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">システム概要</h2>
        <p className="mb-4">
          レスキューロケーターは、災害時や緊急時に要救助者の正確な位置情報を提供することで、初動対応者の能力を強化し、より迅速な対応時間と効率的な救助活動を実現する革新的なBCP（事業継続計画）システムです。
        </p>
        <p className="mb-4">
          大規模災害発生時、通信インフラが機能しなくなる中でも、事前に登録された位置情報と状況データを活用し、救助活動の優先順位付けと効率化を可能にします。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">主な機能</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-start">
              <MapPin className="text-blue-600 mr-3" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-2">正確な位置情報追跡</h3>
                <p className="text-gray-700">
                  高精度GPSと独自の特許技術により、要救助者の正確な位置を特定します。災害時の移動履歴も記録し、救助活動の計画に役立てます。
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-start">
              <Smartphone className="text-blue-600 mr-3" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-2">「わたしはココ」アプリ連携</h3>
                <p className="text-gray-700">
                  専用モバイルアプリ「わたしはココ」と連携し、ユーザーは簡単に自分の安否と位置情報を登録・更新できます。オフライン時のデータ保存機能も搭載。
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-start">
              <Users className="text-blue-600 mr-3" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-2">組織管理と安否確認</h3>
                <p className="text-gray-700">
                  組織単位での登録管理により、災害時に組織メンバーの安否状況を一元管理。未確認者への自動通知機能で確認漏れを防止します。
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-start">
              <Clock className="text-blue-600 mr-3" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-2">リアルタイム状況把握</h3>
                <p className="text-gray-700">
                  災害状況と要救助者の情報をリアルタイムで更新・共有。救助優先度の自動判定機能により、効率的な救助活動を支援します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">導入メリット</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 mt-1" size={20} />
              <span>災害発生時の人命救助活動の迅速化と効率化</span>
            </li>
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 mt-1" size={20} />
              <span>組織メンバーの安否確認プロセスの自動化</span>
            </li>
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 mt-1" size={20} />
              <span>通信インフラ障害時でも機能する堅牢なシステム設計</span>
            </li>
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 mt-1" size={20} />
              <span>救助リソースの最適配分による救助成功率の向上</span>
            </li>
            <li className="flex items-start">
              <Shield className="text-green-600 mr-3 mt-1" size={20} />
              <span>平常時の訓練・シミュレーション機能による防災意識向上</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">導入事例</h2>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-2">公共機関での活用</h3>
          <p className="mb-4">
            国内外の工場プラントや複数の公共機関で導入され、災害時の住民安否確認と救助活動計画の立案に活用されています。特に高齢者や要支援者の優先的な救助に効果を発揮しています。
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-2">教育機関での活用</h3>
          <p className="mb-4">
            学校や保育施設での導入により、災害時の児童・生徒の安全確保と保護者への迅速な情報提供が可能になりました。避難訓練の効率化にも貢献しています。
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">企業でのBCP対策</h3>
          <p className="mb-4">
            多くの企業がBCP対策の一環として導入し、従業員の安否確認と事業継続のための人的リソース把握に活用しています。特に複数拠点を持つ企業での効果が顕著です。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">技術的特徴</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-semibold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</div>
              <span>AWS環境を活用したクラウドベースのシステム構成</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-semibold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</div>
              <span>冗長化されたデータストレージによる高い信頼性</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-semibold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</div>
              <span>エンドツーエンドの暗号化によるデータセキュリティ確保</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-semibold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">4</div>
              <span>オフライン時のデータキャッシュと同期機能</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-semibold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">5</div>
              <span>革新的特許技術を活用した救助優先度判定アルゴリズム</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">レスキューロケーターで災害に備える</h2>
        <p className="text-center mb-6">
          災害はいつ発生するか予測できません。今こそ、最先端の技術で人命を守るための準備を始めましょう。
        </p>
        <div className="flex justify-center">
          <Link to="/plan-comparison" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
            プラン機能比較を見る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RescueLocatorExplanation;