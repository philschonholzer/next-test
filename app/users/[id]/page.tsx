import Image from 'next/image'
import { User } from '../fetch-users'
export const runtime = 'experimental-edge'

type UserApi = {
  data: User
  support: {
    url: string
    text: string
  }
}

async function getUser(id: string) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  return res.json() as Promise<UserApi>
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { data } = await getUser(params.id)

  return (
    <>
      <h1>
        {data.first_name} {data.last_name}
      </h1>
      <Image
        src={data.avatar}
        alt={`${data.first_name} ${data.last_name}`}
        width={100}
        height={100}
      />
    </>
  )
}

export default Page
