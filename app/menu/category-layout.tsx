import { getAllCategories } from 'domain/menu-repo'
import Link from 'next/link'

const MkLayout =
  (deps = { getAllCategories }) =>
  async ({ children }: { children: React.ReactNode }) => {
    const categories = await deps.getAllCategories()
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

const Layout = MkLayout()
export default Layout

export const DeplessLayout = { MkLayout }
