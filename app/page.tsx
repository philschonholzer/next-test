import Link from 'next/link'
import { getRuntimeInfoObject, RuntimeApi } from '../pages/api/runtime'
export const runtime = 'experimental-edge'

async function getRuntime() {
  return Promise.resolve(getRuntimeInfoObject()) as Promise<RuntimeApi>
}

const Page = async () => {
  const data = await getRuntime()
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <p>
        Page {data.runtime} {data.timestamp}
      </p>
    </>
  )
}

export default Page
