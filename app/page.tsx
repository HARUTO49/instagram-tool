import FadeInSection from "./FadeInSection";

const sections = [
  {
    id: "concept",
    title: "Concept",
    body: "NOLL Studioは、事業の本質だけを残す設計で、余白と物語を同時にデザインします。"
  },
  {
    id: "service",
    title: "Service",
    body: "ブランディング、Web制作、クリエイティブ運用を、少数精鋭のチームで一気通貫に提供します。"
  },
  {
    id: "flow",
    title: "Flow",
    body: "ヒアリング→戦略設計→制作→公開→改善。最短距離で成果へつながる導線を設計します。"
  },
  {
    id: "price",
    title: "Price",
    body: "初期プランは月額15万円から。必要な機能だけを積み上げる、透明性の高い料金設計です。"
  },
  {
    id: "low-cost",
    title: "Why Low Cost",
    body: "テンプレート化ではなく、無駄な工程を排除。高品質を維持したまま、適正価格を実現します。"
  },
  {
    id: "for-who",
    title: "For Who",
    body: "新規事業の立ち上げ期、既存サイトの刷新期、採用強化のタイミングに最適です。"
  },
  {
    id: "faq",
    title: "FAQ",
    body: "Q. 納期は？ A. 通常4〜8週間です。Q. 写真撮影は？ A. 必要に応じて対応可能です。"
  },
  {
    id: "contact",
    title: "Contact",
    body: "ご相談はメールまたはオンラインミーティングで受付中。まずは課題をお聞かせください。"
  }
];

export default function Home() {
  return (
    <main className="pageRoot">
      <FadeInSection className="heroWrap">
        <p className="eyebrow">NOLL STUDIO</p>
        <h1 className="heroTitle">
          余白が、
          <br />
          ブランドを語る。
        </h1>
        <p className="heroLead">ミニマルで高級感のある世界観を、戦略とデザインで実装するクリエイティブパートナー。</p>
      </FadeInSection>

      <div className="sectionList">
        {sections.map((section, idx) => (
          <FadeInSection id={section.id} key={section.id} className="contentSection" delay={idx * 100}>
            <h2 className="sectionTitle">{section.title}</h2>
            <p className="sectionBody">{section.body}</p>
          </FadeInSection>
        ))}
      </div>
    </main>
  );
}
