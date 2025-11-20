import React from 'react';
import { MapPin, Smartphone, Users, BarChart, Shield, Zap } from 'lucide-react';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">レスキューロケーターの機能</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <Feature
          icon={<MapPin size={24} className="text-blue-600" />}
          title="正確な位置追跡"
          description="高度なGPSと携帯電話の三角測量を利用して、緊急通報者と対応者の正確な位置を特定します。"
        />
        <Feature
          icon={<Smartphone size={24} className="text-blue-600" />}
          title="モバイルアプリ統合"
          description="専用のモバイルプラットフォーム『わたしはココ』とシームレスに統合し、位置情報サービスに素早く簡単にアクセスできます。"
        />
        <Feature
          icon={<Users size={24} className="text-blue-600" />}
          title="チーム連携"
          description="リアルタイムの位置共有とコミュニケーションツールで、複数の対応チームを効率的に管理・調整します。"
        />
        <Feature
          icon={<BarChart size={24} className="text-blue-600" />}
          title="分析とレポート"
          description="対応時間とリソース配分を改善するための包括的なレポートと分析を生成します。"
        />
        <Feature
          icon={<Shield size={24} className="text-blue-600" />}
          title="データセキュリティ"
          description="エンドツーエンドの暗号化と安全なクラウドストレージで、最高レベルのデータ保護を確保します。"
        />
        <Feature
          icon={<Zap size={24} className="text-blue-600" />}
          title="迅速な展開"
          description="迅速かつ簡単なセットアッププロセスにより、緊急時に即座に実装できます。"
        />
      </div>
    </div>
  );
};

export default Features;