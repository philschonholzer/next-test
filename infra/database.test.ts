import { expect, describe, it } from 'vitest'
import { Execute, DeplessDB } from './database'

describe('database', () => {
  it('select', async () => {
    const { select } = NullDB({ rows: [{ id: 14, name: 'Anna' }] })
    const actual = await select('test', { test: 'test' })
    expect(actual).toStrictEqual([{ id: 14, name: 'Anna' }])
  })
  it('insert', async () => {
    const { insert } = NullDB({ insertId: '3' })
    const actual = await insert('test', { test: 'test' })
    expect(actual).toStrictEqual('3')
  })
})

const defaultResult = { rows: [{ id: 1, name: 'test' }], insertId: '1' }

export const NullDB = (result: Partial<Awaited<ReturnType<Execute>>> = {}) => {
  const conn = {
    execute: (): ReturnType<Execute> =>
      Promise.resolve({ ...defaultResult, ...result }),
  }
  return {
    select: DeplessDB.mkSelect({ conn }),
    insert: DeplessDB.mkInsert({ conn }),
  }
}
