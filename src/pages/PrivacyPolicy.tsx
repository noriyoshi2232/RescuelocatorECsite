import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. 基本方針</h2>
          <p className="mb-4">
            レスキューロケーター（以下「当サービス」）は、ユーザーの個人情報保護を最重要課題として認識し、個人情報の保護に関する法律、その他の関係法令を遵守し、ユーザーのプライバシー保護に最大限の配慮を行います。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. 収集する情報</h2>
          <p className="mb-4">当サービスが収集・利用する主な個人情報は以下の通りです：</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>氏名</li>
            <li>メールアドレス</li>
            <li>電話番号</li>
            <li>所属組織名</li>
            <li>部署名</li>
            <li>位置情報データ</li>
            <li>デバイス情報</li>
            <li>利用ログ</li>
            <li>AWSアカウント関連情報（アカウントID、リージョン設定等）</li>
            <li>AWS利用状況データ</li>
            <li>請求先情報</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. AWS関連情報の取り扱い</h2>
          <div className="space-y-4">
            <p>当サービスは、AWS環境の構築・運用に関連して以下の情報を取り扱います：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AWSアカウント情報（アカウントID、ユーザー名等）</li>
              <li>AWS利用設定情報（リージョン、サービス設定等）</li>
              <li>AWS請求情報（利用料金、支払い履歴等）</li>
              <li>AWSリソース利用状況</li>
              <li>セキュリティ設定情報</li>
            </ul>
            <p className="mt-4">
              これらの情報は、AWS環境の適切な構築・運用・保守のためにのみ使用され、
              その他の目的での利用や第三者への提供は行いません。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. 利用目的</h2>
          <p className="mb-4">収集した個人情報は、以下の目的で利用します：</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>緊急時の位置情報サービスの提供</li>
            <li>サービスの利用に関する通知やお知らせの送信</li>
            <li>カスタマーサポートの提供</li>
            <li>サービスの改善と新機能の開発</li>
            <li>利用状況の分析と統計データの作成</li>
            <li>不正利用の防止</li>
            <li>AWS環境の構築・運用・保守</li>
            <li>AWS関連の技術サポート提供</li>
            <li>AWS利用料金の請求・収納</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. AWS環境のセキュリティ対策</h2>
          <div className="space-y-4">
            <p>
              当サービスは、AWS環境のセキュリティ確保のため、以下の対策を実施しています：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>アクセス制御とユーザー認証の厳格な管理</li>
              <li>暗号化通信の使用</li>
              <li>セキュリティグループとネットワークACLの適切な設定</li>
              <li>定期的なセキュリティ監査の実施</li>
              <li>セキュリティパッチの適時適用</li>
              <li>マルチファクタ認証（MFA）の推奨</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. AWS利用料金の取り扱い</h2>
          <div className="space-y-4">
            <p>
              AWS利用に関する料金情報は、以下のように取り扱われます：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>利用料金の計算と請求書の作成</li>
              <li>支払い状況の管理と記録</li>
              <li>料金に関する問い合わせ対応</li>
              <li>料金の統計分析と予測</li>
            </ul>
            <p className="mt-4">
              クレジットカード情報は当サービスでは保持せず、AWSの支払い設定ページで
              直接入力・管理していただきます。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. 安全管理措置</h2>
          <div className="space-y-4">
            <p>
              当サービスは、収集した個人情報の漏えい、滅失、き損の防止その他の安全管理のために、以下の措置を講じています：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>SSL/TLS暗号化通信の使用</li>
              <li>アクセス制御とユーザー認証の実施</li>
              <li>データの暗号化保存</li>
              <li>定期的なセキュリティ監査の実施</li>
              <li>従業員への教育と監督</li>
              <li>AWS環境における適切なセキュリティ設定</li>
              <li>定期的なバックアップの実施</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. 第三者提供</h2>
          <p className="mb-4">
            当サービスは、以下の場合を除き、収集した個人情報を第三者に提供することはありません：
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>ユーザーの同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
            <li>AWS環境の構築・運用に必要な範囲でAWSに提供する場合</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. 開示請求</h2>
          <p className="mb-4">
            ユーザーは、当サービスに対して個人情報の開示、訂正、利用停止、削除を請求することができます。請求を行う場合は、お問い合わせフォームよりご連絡ください。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. プライバシーポリシーの変更</h2>
          <p className="mb-4">
            当サービスは、必要に応じて、本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイト上でお知らせします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. お問い合わせ</h2>
          <p>
            本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：
          </p>
          <div className="mt-4">
            <p>メールアドレス：wdpc.im.here@wdpc.jp</p>
            <p>ウェブサイト：https://www.wdpc.info</p>
          </div>
        </section>

        <div className="mt-8 text-sm text-gray-600">
          <p>制定日：2024年2月18日</p>
          <p>最終更新日：2024年2月18日</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;