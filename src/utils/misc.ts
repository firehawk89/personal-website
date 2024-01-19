export const classnames = (
  ...names: (string | boolean | null | number | undefined)[]
): string => {
  const validNames = names.filter((n): n is string => typeof n === 'string')
  return validNames.join(' ')
}
