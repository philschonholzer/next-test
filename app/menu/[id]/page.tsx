import Image from 'next/image'
import { getProductsOfCategory } from '../menu-repo'

type Product = {
  id: number
  name: string
  image_url: string
  category_id: number
}

const CategoryPage = async ({ params }: { params: { id: string } }) => {
  const products = await getProductsOfCategory(params.id)
  return (
    <>
      <h1>Category</h1>
      <ul>
        {products.rows.map((row) => {
          const { id, name, image_url } = row as Product
          return (
            <li key={id}>
              <h2>{name}</h2>
              <Image
                src={`/images/${image_url}`}
                alt={name}
                height={200}
                width={200}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default CategoryPage
