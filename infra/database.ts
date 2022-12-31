import { connect, Connection, ExecutedQuery } from '@planetscale/database'

type ReplaceReturnType<T extends (...a: any) => any, TNewReturn> = (
  ...a: Parameters<T>
) => TNewReturn

type DB<T> = ReplaceReturnType<Connection['execute'], Promise<T>>
export type Execute = DB<Pick<ExecutedQuery, 'rows' | 'insertId'>>
export type Select = DB<ExecutedQuery['rows']>
export type Insert = DB<ExecutedQuery['insertId']>

const config = {
  host: process.env.PSCALE_HOST,
  username: process.env.PSCALE_USERNAME,
  password: process.env.PSCALE_PASSWORD,
}

const conn = connect(config)

const mkSelect =
  (deps: { conn: { execute: Execute } }): Select =>
  async (query, args) => {
    const result = await deps.conn.execute(query, args)
    return result.rows
  }

const mkInsert =
  (deps: { conn: { execute: Execute } }): Insert =>
  async (query, args) => {
    const result = await deps.conn.execute(query, args)
    return result.insertId
  }

export const select = mkSelect({ conn })
export const insert = mkInsert({ conn })

export const DeplessDB = {
  mkSelect,
  mkInsert,
}
