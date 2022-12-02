import Link from 'next/link'

export const dynamic = 'force-dynamic'

function getRuntime() {
  const now = Date.now()
  if ('Bun' in globalThis) return `bun ${now}`
  if ('Deno' in globalThis) return `deno ${now}`
  if (globalThis.process?.versions?.node) return `node ${now}`
  else return `other ${now}`
}

async function getData() {
  const res = Promise.resolve(getRuntime())
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res
}
export default async function Page() {
  const data = await getData()
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <p>Hi from {data}</p>
      <Link href={'about'}>About</Link>
    </>
  )
}
