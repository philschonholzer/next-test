import Link from 'next/link'
import { getAllCategories } from './menu-repo'

type Category = { id: number; name: string }

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await getAllCategories()
  return (
    <>
      <ul>
        {categories.rows.map((row) => {
          const { id, name } = row as Category
          return (
            <li key={id}>
              <Link href={`/menu/${id}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
      {children}
    </>
  )
}

export default Layout
