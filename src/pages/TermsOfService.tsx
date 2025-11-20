import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">利用規約</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. 総則</h2>
          <p className="mb-4">
            本利用規約（以下「本規約」）は、レスキューロケーター（以下「当サービス」）の利用条件を定めるものです。ユーザーの皆様（以下「ユーザー」）には、本規約に従って当サービスをご利用いただきます。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. AWS環境の利用</h2>
          <div className="space-y-4">
            <p>
              当サービスは、Amazon Web Services（以下「AWS」）を利用して提供されます。
              ユーザーは以下の事項に同意するものとします：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AWS利用に関する費用はユーザーが負担すること</li>
              <li>AWSの利用規約およびサービス条件に従うこと</li>
              <li>AWS環境のセキュリティ設定に関する当サービスの指示に従うこと</li>
              <li>AWS利用に関する適切なアクセス管理を行うこと</li>
              <li>AWS環境の不正利用を防止すること</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. AWS利用料金</h2>
          <div className="space-y-4">
            <p>AWS利用に関する料金について、以下の通り定めます：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AWS利用料金は実費でユーザーが負担すること</li>
              <li>料金は使用したAWSリソースに応じて変動すること</li>
              <li>支払いはクレジットカードによること</li>
              <li>料金の未払いがある場合、サービスを停止することがあること</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. AWS環境のセキュリティ</h2>
          <div className="space-y-4">
            <p>AWS環境のセキュリティについて、以下の事項を遵守するものとします：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>アクセスキーとシークレットキーの適切な管理</li>
              <li>強力なパスワードの使用</li>
              <li>多要素認証（MFA）の設定</li>
              <li>セキュリティグループの適切な設定</li>
              <li>定期的なセキュリティ設定の見直し</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. AWS環境の利用制限</h2>
          <p className="mb-4">
            以下の行為を禁止します：
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>AWS環境での不正なリソース使用</li>
            <li>他のユーザーのAWS環境への不正アクセス</li>
            <li>AWSリソースの過剰な使用</li>
            <li>セキュリティ設定の無断変更</li>
            <li>AWS環境を利用した違法行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. 利用登録</h2>
          <div className="space-y-4">
            <p>
              当サービスの利用を希望する方は、本規約に同意の上、当サービス所定の方法により利用登録を行う必要があります。
            </p>
            <p>
              当サービスは、利用登録の申請者に以下の事由があると判断した場合、利用登録を承認しないことがあります：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>虚偽の事項を届け出た場合</li>
              <li>本規約に違反したことがある者からの申請である場合</li>
              <li>AWS利用に関する条件を満たさない場合</li>
              <li>その他、当サービスが利用登録を相当でないと判断した場合</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. サービスの内容</h2>
          <div className="space-y-4">
            <p>当サービスは以下のサービスを提供します：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>緊急時の位置情報共有サービス</li>
              <li>安否確認システム</li>
              <li>災害情報の提供</li>
              <li>緊急連絡網の管理</li>
              <li>AWS環境の構築支援</li>
              <li>AWS利用に関する技術サポート</li>
              <li>その他、当サービスが定めるサービス</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. 禁止事項</h2>
          <p className="mb-4">ユーザーは、当サービスの利用にあたり、以下の行為を禁止します：</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当サービスのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>AWS環境の不正利用</li>
            <li>他のユーザーのAWS環境への不正アクセス</li>
            <li>当サービスの運営を妨害する行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>他のユーザーに成りすます行為</li>
            <li>当サービスが許可しない営業、宣伝、広告、勧誘、その他営利を目的とする行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. AWS利用に関する免責事項</h2>
          <div className="space-y-4">
            <p>
              当サービスは、以下の事項について一切の責任を負いません：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AWS側の障害やメンテナンスによるサービス停止</li>
              <li>ユーザーのAWS利用料金</li>
              <li>AWS環境での設定ミスによる損害</li>
              <li>ユーザーのAWSアカウントの不正利用</li>
              <li>AWSのサービス仕様変更による影響</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. サービスの変更・停止</h2>
          <p className="mb-4">
            当サービスは、以下の場合には、事前の通知なく、当サービスの全部または一部の提供を停止または中断することができるものとします：
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>システムの保守点検または更新を行う場合</li>
            <li>AWS側の障害やメンテナンスによる場合</li>
            <li>地震、落雷、火災、停電、天災などの不可抗力により、当サービスの提供が困難となった場合</li>
            <li>その他、当サービスが停止または中断を必要と判断した場合</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. 契約解除</h2>
          <p className="mb-4">
            当サービスは、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、当該ユーザーとの利用契約を解除することができます：
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>本規約のいずれかの条項に違反した場合</li>
            <li>登録事項に虚偽の事実があることが判明した場合</li>
            <li>AWS利用料金の支払いを怠った場合</li>
            <li>AWS環境を不正に利用した場合</li>
            <li>その他、当サービスが利用契約の継続を適当でないと判断した場合</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. 規約の変更</h2>
          <p className="mb-4">
            当サービスは、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。なお、本規約の変更後、当サービスの利用を継続した場合には、変更後の規約に同意したものとみなします。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. 準拠法・管轄裁判所</h2>
          <p className="mb-4">
            本規約の解釈にあたっては、日本法を準拠法とします。当サービスに関して紛争が生じた場合には、神戸地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>

        <div className="mt-8 text-sm text-gray-600">
          <p>制定日：2024年2月18日</p>
          <p>最終更新日：2024年2月18日</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;