import Link from 'next/link'
import UserList from '../../components/user-list'
import { getUsers } from './fetch-users'
export const runtime = 'experimental-edge'

const Page = async () => {
  const users = await getUsers()
  return <UserList users={users} />
}

export default Page
