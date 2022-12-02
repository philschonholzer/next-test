export type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}
export type UserList = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
  support: {
    url: string
    text: string
  }
}

export async function getUsers() {
  const res = await fetch('https://reqres.in/api/users')

  return res.json() as Promise<UserList>
}

type UserApi = {
  data: User
  support: {
    url: string
    text: string
  }
}

export async function getUser(id: string) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  return res.json() as Promise<UserApi>
}
