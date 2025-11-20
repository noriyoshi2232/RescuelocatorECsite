import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Users, Star, Zap, Crown, GraduationCap } from 'lucide-react';

const PlanCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  initialCost: string;
  monthlyFee: string;
  features: string[];
  target: string;
  planId: string;
}> = ({ icon, title, initialCost, monthlyFee, features, target, planId }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
    <div className="flex-grow">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      <div className="mb-4 text-center">
        <p className="text-xl font-bold">初期費用: {initialCost}万円</p>
        <p className="text-lg">月額: {monthlyFee}円</p>
      </div>
      <p className="mb-4 text-center text-gray-600">対象: {target}</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    <div className="space-y-2">
      <Link to={`/plan-confirmation?plan=${planId}`} className="btn btn-primary block w-full text-center">
        登録プラン選択
      </Link>
      <Link to="/plan-comparison" className="btn btn-secondary block w-full text-center">
        プラン機能比較
      </Link>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">ＢＣＰ防災減災安否救命システム</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">『レスキューロケーター』</h2>
        </div>
        <p className="text-xl mb-8">正確な位置情報技術、世界初の防災減災安否救命システムを提供します</p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        <PlanCard
          icon={<Zap size={32} className="text-blue-500" />}
          title="ライトプラン"
          initialCost="60"
          monthlyFee="10,000"
          features={[
            '基本的な位置情報トラッキング',
            '同時接続20名まで',
            'メールサポート'
          ]}
          target="小規模組織"
          planId="light"
        />

        <PlanCard
          icon={<GraduationCap size={32} className="text-green-600" />}
          title="教育機関プラン"
          initialCost="100"
          monthlyFee="15,000"
          features={[
            'リアルタイム位置情報更新',
            '同時接続100名まで',
            '水没感知',
            'エリアアラーム'
          ]}
          target="教育機関"
          planId="education"
        />

        <PlanCard
          icon={<Star size={32} className="text-blue-600" />}
          title="政府自治体プラン"
          initialCost="150"
          monthlyFee="20,000"
          features={[
            'リアルタイム位置情報更新',
            '同時接続150名まで',
            '水没感知',
            '高度な分析ツール',
            'カスタマイズサポート'
          ]}
          target="政府・自治体"
          planId="municipality"
        />

        <PlanCard
          icon={<Shield size={32} className="text-blue-600" />}
          title="ベーシックプラン"
          initialCost="200"
          monthlyFee="25,000"
          features={[
            'リアルタイム位置情報更新',
            '同時接続300名まで',
            '水没感知',
            'エリアアラーム',
            '高度な分析ツール',
            'カスタマイズサポート'
          ]}
          target="中規模組織"
          planId="basic"
        />

        <PlanCard
          icon={<Crown size={32} className="text-yellow-500" />}
          title="プレミアムプラン"
          initialCost="500"
          monthlyFee="50,000"
          features={[
            'リアルタイム位置情報更新',
            '接続人数無制限',
            '水没感知',
            'エリアアラーム',
            '高度な分析ツール',
            'カスタマイズサポート'
          ]}
          target="大規模組織"
          planId="premium"
        />
      </section>

      <section className="text-center">
        <p className="text-lg text-blue-600 mb-8">
          予算に合わせての個別のカスタマイズプランも承ります、気軽にお問い合わせください
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">なぜレスキューロケーターを選ぶのか？</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Shield size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">安全性の向上</h3>
            <p>正確な位置情報で災害対応時間を短縮し、より多くの命を救います。</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">リアルタイム更新</h3>
            <p>効率的な緊急管理のための即時位置情報更新。</p>
          </div>
          <div className="flex flex-col items-center">
            <Users size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">チーム連携</h3>
            <p>複数のチーム間で救助活動をシームレスに調整。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;