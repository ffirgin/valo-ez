import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/agents">Agents</Link>
        <Link href="/weapons">Weapons</Link>
        <Link href="/guides">Guides</Link>
      </nav>
    </div>
  );
}
