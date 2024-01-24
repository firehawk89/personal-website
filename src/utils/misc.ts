export const classnames = (
  ...names: (boolean | null | number | string | undefined)[]
): string => {
  const validNames = names.filter((n): n is string => typeof n === 'string')
  return validNames.join(' ')
}
