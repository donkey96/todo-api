export const toMap = <T extends {id: string}>(data: T[]): Map<string, T> => {
  return data.reduce((p, d) => p.set(d.id, d), new Map())
}

export const fromMap = <T extends {id: string}>(data: Map<string, T>): T[] => {
  const arr = [];
  for (const v of data.values()) {
    arr.push(v)
  }
  return arr;
}