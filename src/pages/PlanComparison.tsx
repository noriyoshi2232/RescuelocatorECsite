import React from 'react';
import { Circle, Minus, X } from 'lucide-react';

const PlanComparison: React.FC = () => {
  const features = [
    { 
      name: '初期費用',
      light: '60万円',
      education: '100万円',
      municipality: '150万円',
      basic: '200万円',
      premium: '500万円'
    },
    { 
      name: '月額料金',
      light: '10,000円',
      education: '15,000円',
      municipality: '20,000円',
      basic: '25,000円',
      premium: '50,000円'
    },
    { 
      name: '対象',
      light: '小規模組織',
      education: '教育機関',
      municipality: '政府・自治体',
      basic: '中規模組織',
      premium: '大規模組織'
    },
    { 
      name: '基本的な位置情報トラッキング', 
      light: '●', 
      education: '●', 
      municipality: '●', 
      basic: '●', 
      premium: '●' 
    },
    { 
      name: 'リアルタイム位置情報更新', 
      light: '×', 
      education: '●', 
      municipality: '●', 
      basic: '●', 
      premium: '●' 
    },
    { 
      name: '水没感知', 
      light: '×', 
      education: '●', 
      municipality: '●', 
      basic: '●', 
      premium: '●' 
    },
    { 
      name: 'エリアアラーム', 
      light: '×', 
      education: '●', 
      municipality: '▲', 
      basic: '●', 
      premium: '●' 
    },
    { 
      name: '高度な分析ツール', 
      light: '×', 
      education: '▲', 
      municipality: '●', 
      basic: '●', 
      premium: '●' 
    },
    { 
      name: 'カスタマイズサポート', 
      light: '×', 
      education: '▲', 
      municipality: '●', 
      basic: '●', 
      premium: '●' 
    },
    { 
      name: '同時接続ユーザー数', 
      light: '20名', 
      education: '100名', 
      municipality: '150名', 
      basic: '300名', 
      premium: '無制限' 
    },
    { 
      name: 'カスタマーサポート', 
      light: 'メール', 
      education: 'メール・WEB', 
      municipality: 'メール・WEB', 
      basic: 'メール・WEB', 
      premium: '専任担当者' 
    }
  ];

  const renderValue = (value: string) => {
    switch (value) {
      case '●':
        return <Circle className="text-green-600 mx-auto fill-current" />;
      case '△':
        return <Minus className="text-yellow-600 mx-auto" />;
      case '×':
        return <X className="text-red-600 mx-auto" />;
      default:
        return value;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">プラン機能比較</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 border text-left min-w-[200px]">機能</th>
              <th className="p-4 border text-center">ライト</th>
              <th className="p-4 border text-center">教育機関</th>
              <th className="p-4 border text-center">政府自治体</th>
              <th className="p-4 border text-center">ベーシック</th>
              <th className="p-4 border text-center">プレミアム</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="p-4 border">{feature.name}</td>
                <td className="p-4 border text-center">{renderValue(feature.light)}</td>
                <td className="p-4 border text-center">{renderValue(feature.education)}</td>
                <td className="p-4 border text-center">{renderValue(feature.municipality)}</td>
                <td className="p-4 border text-center">{renderValue(feature.basic)}</td>
                <td className="p-4 border text-center">{renderValue(feature.premium)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 space-y-4 text-sm text-gray-600">
        <p>● 利用可能　▲ 一部利用可能　× 利用不可</p>
        <p>※ 表示価格は全て税抜きです。</p>
        <p>※ カスタマイズ対応は別途お見積りとなります。</p>
        <p>※ 各プラン月々クラウド利用無料枠を超過する場合、別途追加費用が発生します。</p>
      </div>
    </div>
  );
};

export default PlanComparison;