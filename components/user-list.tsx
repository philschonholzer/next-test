import Link from 'next/link'
import type { UserList } from '../app/users/fetch-users'

const UserList = ({ users }: { users: UserList }) => {
  return (
    <>
      <h1>Users</h1>
      <ul
        style={{
          display: 'flex',
          gap: '1em',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {users.data.map((user) => (
          <li key={user.id} style={{ margin: 0, padding: 0 }}>
            <Link href={`/users/${user.id}`}>
              <h2>
                {user.first_name} {user.last_name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserList
