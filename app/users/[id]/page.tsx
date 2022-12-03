export const runtime = 'experimental-edge'

const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <p>{JSON.stringify(params)}</p>
    </>
  )
}

export default Page
