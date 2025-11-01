import Link from "next/link";

const highlights = [
  {
    title: "قصه‌های تازه",
    text: "هر هفته قصه‌های الهام‌بخش از جامعه فارسی‌زبانان را بشنوید و با انرژی تازه روزتان را شروع کنید."
  },
  {
    title: "دورهمی مجازی",
    text: "با رفقای جدید آشنا شوید، ایده‌هایتان را مطرح کنید و در رویدادهای آنلاین نقش داشته باشید."
  },
  {
    title: "منابع یادگیری",
    text: "از آموزش زبان تا مهارت‌های نرم، محتواهای گزینش‌شده را یک‌جا پیدا کنید و مسیر رشدتان را بسازید."
  }
];

const actions = [
  {
    href: "https://t.me/",
    label: "عضویت در کانال تلگرام"
  },
  {
    href: "mailto:hello@refigh.dev",
    label: "ارتباط با ما"
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="hero__subtitle">سلام!</p>
        <h1 className="hero__title">رفاقت دیجیتال برای فارسی‌زبانان سراسر دنیا</h1>
        <p className="hero__subtitle">
          اینجا خانه‌ایست برای گفتگو، یادگیری و ساختن خاطرات مشترک؛ جایی که می‌توانید
          دوستان جدید پیدا کنید، ایده‌های جسورانه‌تان را بسازید و از هم‌صحبتی با جامعه‌ای
          صمیمی لذت ببرید.
        </p>
        <div className="actions">
          {actions.map((action) => (
            <Link key={action.href} href={action.href} className="button">
              {action.label}
            </Link>
          ))}
          <Link href="#discover" className="button button--ghost">
            کشف بیشتر
          </Link>
        </div>
      </section>

      <section id="discover" className="grid">
        {highlights.map((item) => (
          <article key={item.title} className="card">
            <h2 className="card__title">{item.title}</h2>
            <p className="card__text">{item.text}</p>
          </article>
        ))}
      </section>

      <figure className="quote">
        «رفاقت آن چیزی است که فاصله‌ها را می‌شکند و ما را در یک مسیر مشترک کنار هم می‌نشاند.»
        <figcaption className="quote__author">— تیم سلام رفیق</figcaption>
      </figure>

      <footer className="footer">
        ساخته شده با عشق برای جامعه فارسی‌زبان | دنبالمان کنید در&nbsp;
        <Link href="https://instagram.com" target="_blank" rel="noreferrer">
          اینستاگرام
        </Link>
      </footer>
    </main>
  );
}
