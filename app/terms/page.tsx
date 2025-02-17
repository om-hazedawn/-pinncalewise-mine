export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">服務條款</h1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">服務範圍</h2>
          <p className="mb-4">我們提供的服務包括但不限於：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>公司註冊</li>
            <li>公司秘書服務</li>
            <li>會計服務</li>
            <li>審計服務</li>
            <li>稅務服務</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">服務費用</h2>
          <p className="mb-4">所有服務費用將在服務開始前明確列出。客戶需要在服務開始前支付相關費用。</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">責任限制</h2>
          <p className="mb-4">我們將盡力提供優質服務，但不對因不可抗力因素導致的延誤或失誤承擔責任。</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">終止服務</h2>
          <p className="mb-4">我們保留在以下情況終止服務的權利：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>客戶違反服務條款</li>
            <li>客戶未能及時支付費用</li>
            <li>客戶提供虛假資料</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">法律適用</h2>
          <p className="mb-4">本服務條款受香港特別行政區法律管轄。任何爭議將根據香港法律解決。</p>
        </section>
      </div>
    </div>
  )
}

