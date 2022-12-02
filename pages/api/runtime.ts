import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export function getRuntime() {
  if ('Bun' in globalThis) return `bun`
  if ('Deno' in globalThis) return `deno`
  if (globalThis.process?.env?.NEXT_RUNTIME) return `edge`
  if (globalThis.process?.versions?.node) return `node`
  else return `other`
}

export type RuntimeApi = {
  runtime: ReturnType<typeof getRuntime>
  timestamp: number
}

export default async function handler(req: NextRequest) {
  const now = Date.now()

  return new Response(
    JSON.stringify({
      runtime: getRuntime(),
      timestamp: now,
    } satisfies RuntimeApi),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}
