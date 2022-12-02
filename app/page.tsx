import Link from 'next/link'
import { getRuntime, RuntimeApi } from '../pages/api/runtime'
export const runtime = 'experimental-edge'

async function getData() {
  const url = 'https://verdant-daifuku-4003e5.netlify.app'
  console.log('URL', url)

  const res = await fetch(`${url}/api/runtime`, {
    cache: 'no-store',
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json() as Promise<RuntimeApi>
}
const Page = async () => {
  const data = await getData()
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <p>
        Api {data.runtime} {data.timestamp}
      </p>
      <p>
        Page {getRuntime()} {Date.now()}
      </p>
      <Link href={'about'}>About</Link>
    </>
  )
}

export default Page
