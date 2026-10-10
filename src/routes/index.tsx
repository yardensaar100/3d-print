import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/hero-new.jpeg.asset.json";
import axolotlAsset from "@/assets/axolotl.jpg.asset.json";
import octopusAsset from "@/assets/octopus-new.jpeg.asset.json";
import dinosaurAsset from "@/assets/dinosaur.jpg.asset.json";
import foxAsset from "@/assets/fox-new.jpeg.asset.json";
import foxTrashAsset from "@/assets/fox-trash.jpg.asset.json";
import snakeAsset from "@/assets/snake.avif.asset.json";
const heroImg = heroAsset.url;
const axolotlImg = axolotlAsset.url;
const octopusImg = octopusAsset.url;
const dinosaurImg = dinosaurAsset.url;
const foxImg = foxAsset.url;
const foxTrashImg = foxTrashAsset.url;
const snakeImg = snakeAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "סער הזמנות מימד — קטלוג עיצובים תלת־ממדיים" },
      {
        name: "description",
        content:
          "החנות שלך לדברים תלת־ממדיים הכי מגניבים: מארזים, פיג'טים, קליקרים, מחזיקי מפתחות, עיצובים לחדר וגיימינג.",
      },
      { property: "og:title", content: "סער הזמנות מימד — קטלוג עיצובים תלת־ממדיים" },
      {
        property: "og:description",
        content:
          "מארזים, פיג'טים חמודים, קליקרים, מחזיקי מפתחות, עיצובים לחדר וגיימינג — הכל בהדפסת תלת־ממד.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Product = {
  name: string;
  price: number;
  emoji?: string;
  img?: string;
  inside?: string;
};

type Category = {
  id: string;
  emoji: string;
  title: string;
  sub?: string;
  products: Product[];
};

const FIDGET_IMG =
  "https://i.etsystatic.com/27101143/r/il/a91779/6662293777/il_1080xN.6662293777_o4su.jpg";
const CLICKER_IMG = "https://livespiffy.co.uk/cdn/shop/files/flower-clicker-fidget.jpg";
const KEYCHAIN_IMG =
  "https://i.etsystatic.com/49804888/r/il/d2c1d0/7429276626/il_794xN.7429276626_5bj5.jpg";
const GAMING_IMG =
  "https://makerworld.bblmw.com/makerworld/model/US3c0725b61c2db5/design/2024-11-03_5855a9845b3198.png?x-oss-process=image%2Fresize%2Cw_1000%2Fformat%2Cwebp";

const categories: Category[] = [
  {
    id: "packages",
    emoji: "🎁",
    title: "מארזים",
    sub: "כל מארז שונה מהאחר אז אל תהססו להזמין פעמיים 💗",
    products: [
      { name: "מארז הטרנדים", price: 40, emoji: "🎁", inside: "הלהיטים של החודש" },

      { name: "מארז סער בשווי 20 ₪", price: 20, emoji: "🎁", inside: "הפתעות מהממות\nאין כפילויות בהבטחה" },
      { name: "מארז סער בשווי 30 ₪", price: 30, emoji: "🎁", inside: "הפתעות מהממות\nאין כפילויות בהבטחה" },
      { name: "מארז סער בשווי 50 ₪", price: 50, emoji: "🎁", inside: "הפתעות מהממות\nאין כפילויות בהבטחה" },
      { name: "מארז סער בשווי 75 ₪", price: 75, emoji: "🎁", inside: "הפתעות מהממות\nאין כפילויות בהבטחה" },
      { name: "מארז סער בשווי 100 ₪", price: 100, emoji: "🎁", inside: "הפתעות מהממות\nאין כפילויות בהבטחה" },
      { name: "מארז סער בשווי 150 ₪", price: 150, emoji: "🎁", inside: "הפתעות מהממות בהפתעה\nאין כפילויות בהבטחה" },
      { name: "מארז סער בשווי 200 ₪", price: 200, emoji: "🎁", inside: "הפתעות מהממות\u00a0\nאין כפילויות בהבטחה" },
      { name: "מארז סער בשווי 250 ₪", price: 250, emoji: "🎁", inside: "הפתעות מהממות\nאין כפילויות בהבטחה" },
      { name: "מארז סער בשווי 300 ₪", price: 300, emoji: "🎁", inside: "הפתעות מהממות\nאין כפילויות בהבטחה" },
      { name: "מארז קליקרים", price: 30, emoji: "🎁", inside: "קליקרים מושלמים" },
      { name: "מארז וורוד", price: 35, emoji: "🎁", inside: "דברים מושלמים בצבע וורוד" },
      { name: "מארז כחול", price: 35, emoji: "🎁", inside: "דברים מושלמים בצבע כחול" },
      { name: "מארז סגול", price: 35, emoji: "🎁", inside: "דברים מושלמים בצבע סגול" },
      { name: "מארז ירוק", price: 35, emoji: "🎁", inside: "דברים מושלמים בצבע ירוק" },
      { name: "מארז צהוב", price: 35, emoji: "🎁", inside: "דברים מושלמים בצבע צהוב" },
      { name: "מארז שחור", price: 35, emoji: "🎁", inside: "דברים מושלמים בצבע שחור" },
      { name: "מארז לבן", price: 35, emoji: "🎁", inside: "דברים מושלמים בצבע לבן" },
      
    ],
  },
  {
    id: "fidgets",
    emoji: "🩷",
    title: "פיג'טים חמודים",
    products: [
      { name: "אקסולוטל חמוד", price: 20 },
      { name: "תמנון מפרקי", price: 30 },
      { name: "דינוזאור מפרקי", price: 20 },
      { name: "שועל מפרקי", price: 15 },
      { name: "שועל בפח", price: 35 },
      { name: "נחש פידג'ט", price: 15 },
      { name: "פינגווין", price: 20 },
      { name: "קפיברה", price: 15 },
      { name: "צפרדע", price: 15 },
      { name: "חתול", price: 15 },
      { name: "כלב", price: 20 },
      { name: "כריש מפרקי", price: 20 },
      { name: "דרקון מפרקי", price: 15 },
      { name: "פטרייה", price: 20 },
      { name: "פרפר מפרקי", price: 20 },
      { name: "כף חתול", price: 15 },
      { name: "תות", price: 15 },
      { name: "רוח רפאים", price: 20 },
    ].map((p) => ({
      ...p,
      img:
        p.name === "אקסולוטל חמוד"
          ? axolotlImg
          : p.name === "תמנון מפרקי"
            ? octopusImg
            : p.name === "דינוזאור מפרקי"
              ? dinosaurImg
              : p.name === "שועל מפרקי"
                ? foxImg
                : p.name === "שועל בפח"
                  ? foxTrashImg
                  : p.name === "נחש פידג'ט"
                    ? snakeImg
                    : FIDGET_IMG,
    })),
  },
  {
    id: "clickers",
    emoji: "🖱️",
    title: "קליקרים",
    products: [
      { name: "קליקר מכני", price: 20 },
      { name: "קליקר לב", price: 22 },
      { name: "קליקר כוכב", price: 24 },
      { name: "קליקר קובייה", price: 25 },
      { name: "קליקר פרח", price: 27 },
      { name: "קליקר חתול", price: 29 },
      { name: "קליקר רב־כפתורים", price: 30 },
      { name: "קליקר מחזיק מפתחות", price: 32 },
      { name: "לב גלגלי שיניים", price: 35 },
      { name: "קליקר סוויץ'", price: 25 },
      { name: "קליקר דמפלינג", price: 28 },
      { name: "קליקר קינדר", price: 30 },
      { name: "קליקר באזר", price: 26 },
      { name: "קליקר טיקטוק", price: 28 },
      { name: "קליקר אבוקדו", price: 30 },
      { name: "קליקר פנדה", price: 32 },
      { name: "קליקר אינסוף", price: 35 },
      { name: "קליקר ברווז", price: 24 },
      { name: "קליקר פופקורן", price: 26 },
      { name: "קליקר עוגת קרם", price: 28 },
      { name: "קליקר קפיבארה", price: 30 },
      { name: "קליקר תות", price: 25 },
      { name: "קליקר פטרייה", price: 26 },
      { name: "קליקר פינגווין", price: 28 },
      { name: "קליקר המבורגר", price: 27 },
      { name: "קליקר סושי", price: 29 },
      { name: "קליקר בננה", price: 24 },
      { name: "קליקר ארנב", price: 25 },
      { name: "קליקר דובי", price: 30 },
      { name: "קליקר שבלול", price: 26 },
      { name: "קליקר צב", price: 27 },
    ].map((p) => ({ ...p, img: CLICKER_IMG })),
  },
  {
    id: "keychains",
    emoji: "🔑",
    title: "מחזיקי מפתחות",
    products: [
      { name: "מחזיק אות", price: 10 },
      { name: "מחזיק שם", price: 12 },
      { name: "מחזיק לב", price: 14 },
      { name: "מחזיק כוכב", price: 15 },
      { name: "מחזיק פרח", price: 16 },
      { name: "מחזיק חיה", price: 18 },
      { name: "מחזיק דמות", price: 20 },
    ].map((p) => ({ ...p, img: KEYCHAIN_IMG })),
  },
  {
    id: "room",
    emoji: "🪩",
    title: "לחדר",
    products: [
      { name: "מנורת 3D", price: 25, emoji: "💡" },
      { name: "מעמד לטלפון", price: 30, emoji: "📱" },
      { name: "מעמד לאוזניות", price: 35, emoji: "🎧" },
      { name: "עציץ 3D", price: 40, emoji: "🪴" },
      { name: "קופסה קטנה", price: 45, emoji: "📦" },
      { name: "פסל 3D", price: 50, emoji: "🗿" },
      { name: "שלט לחדר", price: 55, emoji: "🎀" },
    ],
  },
  {
    id: "gaming",
    emoji: "🎮",
    title: "גיימינג",
    products: [
      { name: "מעמד לשלט", price: 25 },
      { name: "מעמד גיימינג לטלפון", price: 30 },
      { name: "מחזיק אוזניות גיימינג", price: 35 },
      { name: "אביזר לשולחן גיימינג", price: 40 },
      { name: "קוביות משחק", price: 45 },
    ].map((p) => ({ ...p, img: GAMING_IMG })),
  },
];

function Index() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-violet-100 text-[#302337]">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-pink-200 bg-white/90 px-[6%] py-4 backdrop-blur-md">
        <div>
           <div className="text-2xl font-black text-pink-700 sm:text-3xl">✨ סער הזמנות ממימד אחר</div>
           <div className="mt-1 text-sm text-stone-500">עיצובים תלת־ממדיים • פיג'טים • קליקרים • מארזים מיוחדים • ועוד</div>
        </div>
        <div className="text-3xl">🛒</div>
      </header>

      <section className="px-[6%] py-8 text-center">
        <img
          src={heroImg}
          alt="תמונת הפתיחה של סער הזמנות מימד"
          className="mx-auto max-h-[620px] w-full max-w-4xl rounded-3xl object-cover shadow-2xl shadow-pink-300/40"
        />
        <h1 className="mt-6 text-3xl font-black text-pink-800 sm:text-4xl">
           ברוכים הבאים לסער הזמנות ממימד אחר 💗
        </h1>
         <p className="mt-2 text-lg text-stone-500">החנות שלך לדברים תלת־ממדיים הכי מגניבים והכי מיוחדים שיש בעולם</p>
      </section>

      <nav className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-[6%] pb-9 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="rounded-3xl bg-white px-3 py-5 text-center font-bold shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <span className="mb-1 block text-3xl">{c.emoji}</span>
            {c.title}
          </a>
        ))}
      </nav>

      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="scroll-mt-24 px-[6%] pb-10">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{cat.emoji}</span>
            <h2 className="text-2xl font-black text-pink-800 sm:text-3xl">{cat.title}</h2>
          </div>
          {cat.sub && <p className="mt-1 text-stone-500">{cat.sub}</p>}

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cat.products.map((p) => (
              <article
                key={p.name}
                className="rounded-3xl bg-white p-4 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-pink-50 text-6xl">
                  {p.img ? (
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                  ) : (
                    p.emoji
                  )}
                </div>
                <h3 className="mt-3 text-lg font-extrabold">{p.name}</h3>
                <div className="mt-1 text-xs font-medium text-pink-500">{cat.title}</div>
                {p.inside && (
                  <div className="mt-2 rounded-xl bg-pink-50 px-3 py-2 text-sm">
                    📦 מה יש בפנים?
                    <br />
                    <b>{p.inside}</b>
                  </div>
                )}
                <div className="mt-3 text-xl font-black text-pink-700">₪{p.price}</div>
              </article>
            ))}
          </div>

          <a href="#top" className="mt-5 inline-block text-sm font-bold text-pink-700 hover:underline">
            ↑ חזרה למעלה
          </a>
        </section>
      ))}

      <footer className="border-t border-pink-200 px-[6%] py-8 text-center text-stone-500">
        <b className="text-pink-700">סער הזמנות מימד</b>
        <br />
        💕 קטלוג העיצובים שלנו
      </footer>
    </div>
  );
}
