import { getProductsOfCategory } from 'domain/menu-repo'
import Image from 'next/image'
import New from './new'

const MkCategoryPage =
  (deps = { getProductsOfCategory, New }) =>
  async ({ params }: { params: { id: string } }) => {
    const New = deps.New
    const products = await deps.getProductsOfCategory(params.id)
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

const CategoryPage = MkCategoryPage()
export default CategoryPage

export const DeplessCategoryPage = MkCategoryPage
