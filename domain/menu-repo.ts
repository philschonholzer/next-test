import { z } from 'zod'
import { Insert, select, Select, insert } from 'infra/database'

export const Product = z.object({
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

export type Category = z.infer<typeof Category>

const mkGetAllCategories = (deps: { select: Select }) => async () => {
  const result = await deps.select('SELECT * FROM categories')
  return Category.array().parse(result)
}

const mkGetProductsOfCategory =
  (deps: { select: Select }) => async (categoryId: string) => {
    const params = {
      categoryId,
    }
    const result = await deps.select(
      'SELECT * FROM products WHERE category_id=:categoryId',
      params
    )
    return Product.array().parse(result)
  }

const mkAddProduct =
  (deps: { insert: Insert }) => async (params: Omit<Product, 'id'>) => {
    const result = await deps.insert(
      'INSERT INTO products (name, image_url, category_id) VALUES (:name, :image_url, :category_id)',
      params
    )
    return result
  }

export const getAllCategories = mkGetAllCategories({ select })
export const getProductsOfCategory = mkGetProductsOfCategory({ select })
export const addProduct = mkAddProduct({ insert })

export const DeplessMenuRepo = {
  mkGetAllCategories,
  mkAddProduct,
  mkGetProductsOfCategory,
}
