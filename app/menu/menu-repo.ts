import { connect } from '@planetscale/database'

const config = {
  host: process.env.PSCALE_HOST,
  username: process.env.PSCALE_USERNAME,
  password: process.env.PSCALE_PASSWORD,
}

export const getAllCategories = async () => {
  const conn = await connect(config)
  return conn.execute('SELECT * FROM categories')
}

export const getProductsOfCategory = async (categoryId: string) => {
  const conn = await connect(config)
  const params = {
    categoryId,
  }
  return conn.execute(
    'SELECT * FROM products WHERE category_id=:categoryId',
    params
  )
}
