import Link from 'next/link'
import { getRuntime, RuntimeApi } from '../pages/api/runtime'
export const runtime = 'experimental-edge'

async function getData() {
  const res = await fetch(
    'https://verdant-daifuku-4003e5.netlify.app/api/runtime'
  )
  const data = res.json() as Promise<RuntimeApi>
  return data
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
