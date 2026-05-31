import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="w-64 border-r p-4">
      <div className="mb-6 font-bold">
        Track It
      </div>

      <nav className="space-y-3">
        <Link href="/dashboard">
          Dashboard
        </Link>

        <br />

        <Link href="/devices">
          Devices
        </Link>

        <br />

        <Link href="/allocations">
          Allocations
        </Link>
      </nav>
    </aside>
  );
}