/* eslint-disable no-mixed-operators */

export function warn (...args: any) {
  const ENV = typeof process !== 'undefined' && process.env.NODE_ENV || 'development'

  if (ENV === 'development' || ENV === 'test') {
    console.warn(...args)
  }
}

/* eslint-enable no-mixed-operators */
