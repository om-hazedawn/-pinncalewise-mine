export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">私隱政策</h1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">資料收集</h2>
          <p className="mb-4">我們可能收集的個人資料類型包括但不限於：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>姓名</li>
            <li>聯絡資料（如電話號碼、電郵地址）</li>
            <li>身份證明文件</li>
            <li>業務相關資料</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">資料使用</h2>
          <p className="mb-4">收集的個人資料將用於：</p>
          <ul className="list-disc pl-6 mb-4">
            <li>處理您的服務請求</li>
            <li>提供客戶支援</li>
            <li>改善我們的服務</li>
            <li>遵守法律要求</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">資料保護</h2>
          <p className="mb-4">我們採取適當的技術和組織措施來保護您的個人資料，防止未經授權的訪問、使用或披露。</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">資料保留</h2>
          <p className="mb-4">我們只會在必要的時間內保留您的個人資料，以實現收集資料的目的或遵守法律要求。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">聯絡我們</h2>
          <p className="mb-4">如果您對我們的私隱政策有任何疑問，請聯絡我們：</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>電郵：pinnwiselimited@gmail.com</p>
            <p>電話：+852 9531 1156</p>
            <p>地址：香港九龍荔枝角永康街9號18樓1806室</p>
          </div>
        </section>
      </div>
    </div>
  )
}

