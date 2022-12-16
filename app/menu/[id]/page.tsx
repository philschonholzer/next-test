import Image from 'next/image'
import { getProductsOfCategory } from '../menu-repo'
import New from './new'

const CategoryPage = async ({ params }: { params: { id: string } }) => {
  const products = await getProductsOfCategory(params.id)
  return (
    <>
      <h1>Category</h1>
      <New categoryId={Number(params.id)} />
      <ul>
        {products.map(({ id, name, image_url }) => {
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
