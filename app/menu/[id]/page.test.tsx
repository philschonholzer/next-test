import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { patch } from 'rsc-test-helper'

import { NullMenuRepo } from 'domain/menu-repo.test'
import { DeplessCategoryPage } from './page'
import { DeplessNew } from './new'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

describe('Category Page', () => {
  it('renders single item', async () => {
    const CategoryPage = setUp({
      id: 111,
      name: 'Burger',
      category_id: 1,
      image_url: 'burger.jpg',
    })
    /* @ts-expect-error Server Component */
    const Component = await patch(<CategoryPage params={{ id: '111' }} />)
    render(<Component />)
    screen.debug()
    expect(
      screen
        .getAllByRole('listitem')
        .find(({ textContent }) => textContent === 'Burger')
    ).toBeDefined()
  })
})

const setUp = (
  data = { id: 1, name: 'test', category_id: 1, image_url: 'test.jpg' }
) =>
  DeplessCategoryPage({
    getProductsOfCategory: NullMenuRepo(data).getProductsOfCategory,
    New: DeplessNew({
      useRouter: (() => {
        refresh: () => ''
      }) as unknown as () => AppRouterInstance,
      useState: () => ['test', () => 'test'],
      useTransition: () => [false, () => ''],
    }),
  })
