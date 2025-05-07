import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">Cen-Sad Park</Link>
        <div className="flex gap-4">
          <Link href="/facilities/football">Football</Link>
          <Link href="/cafe">Cafe</Link>
          <Link href="/car-wash">Car Wash</Link>
        </div>
      </div>
    </nav>
  );
}