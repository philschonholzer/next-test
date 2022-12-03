import Image from 'next/image'
import { getUser } from '../fetch-users'
export const runtime = 'experimental-edge'

const Page = async ({ params }: { params: { id: string } }) => {

  // const { data } = await getUser(params.id)

  return (
    <>
      <p>{JSON.stringify(params)}</p>
      {/* <h1>
        {data.first_name} {data.last_name}
      </h1>
      <Image
        src={data.avatar}
        alt={`${data.first_name} ${data.last_name}`}
        width={100}
        height={100}
      /> */}
    </>
  )
}

export default Page
