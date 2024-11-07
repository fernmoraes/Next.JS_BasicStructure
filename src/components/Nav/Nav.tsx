import Link from 'next/link'

export default function Nav() {
  return (
    <header>
        <div>
        <h1>LOGO</h1>
        <nav>
            <ul>
                <Link href="/cliente">Cliente</Link>
                <Link href="/produto">Produto</Link>
            </ul>
        </nav>
        </div>
    </header>
  )
}
