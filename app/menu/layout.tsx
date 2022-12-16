import Link from 'next/link'
import { getAllCategories } from './menu-repo'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await getAllCategories()
  return (
    <>
      <ul>
        {categories.map(({ id, name }) => {
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
