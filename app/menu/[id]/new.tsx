'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState, useTransition } from 'react'

type Props = { categoryId: number }
const MkNew = (deps = { useRouter, useState, useTransition }) =>
  function New({ categoryId }: Props) {
    const router = deps.useRouter()
    const [name, setName] = deps.useState<string>()
    const [isPending, startTransition] = deps.useTransition()
    const [isFetching, setIsFetching] = deps.useState(false)

    // Create inline loading UI
    const isMutating = isFetching || isPending

    async function handleAdd() {
      if (name) {
        setIsFetching(true)
        // Mutate external data source
        await fetch(`/api/addProduct`, {
          method: 'PUT',
          body: JSON.stringify({ name, category_id: categoryId }),
        })
        setIsFetching(false)
        setName('')

        startTransition(() => {
          // Refresh the current route and fetch new data from the server without
          // losing client-side browser or React state.
          router.refresh()
        })
      }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
    }

    return (
      <div style={{ opacity: !isMutating ? 1 : 0.7 }}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          disabled={isPending}
        />
        <button disabled={isPending} onClick={handleAdd}>
          Add
        </button>
      </div>
    )
  }

const New = MkNew()
export default New

export const DeplessNew = MkNew
