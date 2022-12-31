import { NullDB } from 'infra/database.test'
import { expect, describe, it } from 'vitest'
import { Category, DeplessMenuRepo, Product } from './menu-repo'

describe('Menu Repo', () => {
  it('getAllCategories', async () => {
    const { getAllCategories } = NullMenuRepo({ id: 12, name: 'Peter' })
    const actual = await getAllCategories()

    expect(actual).toStrictEqual([{ id: 12, name: 'Peter' }])
  })

  it('getProductsOfCategory', async () => {
    const product = {
      id: 12,
      name: 'Peter',
      category_id: 1,
      image_url: 'salat.jpg',
    } satisfies Product
    const { getProductsOfCategory } = NullMenuRepo(product)
    const actual = await getProductsOfCategory('2')

    expect(actual).toStrictEqual([product])
  })

  it('addProduct', async () => {
    const product = {
      name: 'Peter',
      category_id: 1,
      image_url: 'salat.jpg',
    } satisfies Omit<Product, 'id'>
    const { addProduct } = NullMenuRepo('12')
    const actual = await addProduct(product)

    expect(actual).toStrictEqual('12')
  })
})

export const NullMenuRepo = (result: Product | Category | string) => {
  const dbInput =
    typeof result === 'string' ? { insertId: result } : { rows: [result] }
  const { select, insert } = NullDB(dbInput)
  return {
    getAllCategories: DeplessMenuRepo.mkGetAllCategories({ select }),
    getProductsOfCategory: DeplessMenuRepo.mkGetProductsOfCategory({ select }),
    addProduct: DeplessMenuRepo.mkAddProduct({ insert }),
  }
}
