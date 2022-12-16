import { connect } from '@planetscale/database'
import { z } from 'zod'

const Product = z.object({
  id: z.number(),
  name: z.string(),
  image_url: z.string().nullable(),
  category_id: z.number(),
})
export type Product = z.infer<typeof Product>

const Category = z.object({
  id: z.number(),
  name: z.string(),
})

const config = {
  host: process.env.PSCALE_HOST,
  username: process.env.PSCALE_USERNAME,
  password: process.env.PSCALE_PASSWORD,
}

export const getAllCategories = async () => {
  const conn = await connect(config)
  const result = await conn.execute('SELECT * FROM categories')
  return Category.array().parse(result.rows)
}

export const getProductsOfCategory = async (categoryId: string) => {
  const conn = await connect(config)
  const params = {
    categoryId,
  }
  const result = await conn.execute(
    'SELECT * FROM products WHERE category_id=:categoryId',
    params
  )
  return Product.array().parse(result.rows)
}

export const addProduct = async (params: Omit<Product, 'id'>) => {
  const conn = await connect(config)
  const result = await conn.execute(
    'INSERT INTO products (name, image_url, category_id) VALUES (:name, :image_url, :category_id)',
    params
  )
  return result.insertId
}
