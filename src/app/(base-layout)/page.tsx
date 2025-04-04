import Link from 'next/link';

export const metadata = {
  title: 'Home | Tech Starter Kit',
};

export default function Page() {
  return (
    <>
      <h3>Hæ Tommi </h3>
      <ul>
        <Link href="/categories">
          Flokkar
        </Link>
      </ul>
    </>
  );
}