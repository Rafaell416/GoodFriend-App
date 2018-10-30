'use strict'

export function findAndUpdate (arr, el) {
  return arr.map(e => e.id === el.id ? e = el : e)
}
