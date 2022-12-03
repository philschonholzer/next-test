import Link from 'next/link'
import UserList from '../../../components/user-list'
import { getUsers } from '../fetch-users'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers()
  return (
    <>
      <UserList users={users} />
      {children}
    </>
  )
}

export default Layout
