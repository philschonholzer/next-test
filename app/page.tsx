import Link from 'next/link'
import { getRuntime, RuntimeApi } from '../pages/api/runtime'
export const runtime = 'experimental-edge'

async function getData() {
  try {
    const res = await fetch('/api/runtime')
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error(`Failed to fetch data. (${res.statusText})`)
    }

    const data = res.json() as Promise<RuntimeApi>
    return data
  } catch (error) {
    throw new Error(`Error while fetching: ${error}`)
  }
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
