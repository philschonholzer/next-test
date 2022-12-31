import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { patch } from 'rsc-test-helper'

import { DeplessLayout } from './layout'
import { NullMenuRepo } from 'domain/menu-repo.test'

describe('Layout', () => {
  it('renders single item', async () => {
    const Layout = setUp({ id: 11, name: 'Thomas' })
    /* @ts-expect-error Server Component */
    const Component = await patch(<Layout>Children</Layout>)
    render(<Component />)
    expect(screen.getByText('Children')).toBeDefined()
    expect(
      screen
        .getAllByRole('listitem')
        .find(({ textContent }) => textContent === 'Thomas')
    ).toBeDefined()
  })
})

const setUp = (data = { id: 1, name: 'test' }) =>
  DeplessLayout.MkLayout({
    getAllCategories: NullMenuRepo(data).getAllCategories,
  })
