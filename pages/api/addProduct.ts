import { addProduct, Product } from 'domain/menu-repo'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

const RequiredProduct = Product.omit({ id: true, image_url: true })

export default async function handler(req: NextRequest) {
  const data = await req.json()
  const product = RequiredProduct.parse(data)
  const result = await addProduct({ ...product, image_url: 'salat.jpg' })

  return new Response(JSON.stringify({ id: result }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}
