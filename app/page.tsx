import Link from 'next/link'

function getRuntime() {
  if ('Bun' in globalThis) return 'bun'
  if ('Deno' in globalThis) return 'deno'
  if (globalThis.process?.versions?.node) return 'node'
}

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <p>Hi from {getRuntime()}</p>
      <Link href={'about'}>About</Link>
    </>
  )
}
