import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ display: 'flex', gap: '1em' }}>
      <Link href={'/'}>My App</Link>
      <Link href={'about'}>About</Link>
      <Link href={'users'}>Users</Link>
      <Link href={'menu'}>Menu</Link>
    </header>
  )
}
