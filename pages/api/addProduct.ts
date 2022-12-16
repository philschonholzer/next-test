import { NextRequest } from 'next/server'
import { addProduct, Product } from '../../app/menu/menu-repo'

export default async function handler(req: NextRequest) {
  const data = (await req.json()) as Pick<Product, 'name' | 'category_id'>

  console.log('got', data)

  const result = await addProduct({ ...data, image_url: 'salat.jpg' })

  return new Response(JSON.stringify({ id: result }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}
