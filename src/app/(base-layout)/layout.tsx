import Link from 'next/link';

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="base-layout">
      <div className="hero">
        <h1>Spurningar & Svör</h1>
        <p>Velkominn í spennandi heim spurninga og svara!</p>
        <Link href="/categories" className="btn">
          Skoða flokka
        </Link>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
