import { KeyMapping } from '@/models/models'

/**
 *
 * @param data
 * @param keyMappings
 * @returns
 */
export const applyKeyBinds = (
  data: string,
  keyMappings: KeyMapping[]
): string => {
  // const trans = '\n".*"'
  const trans = '\n(//.*\n)*".*"'
  const regex = new RegExp(
    keyMappings.reduce(
      (acc: string, curr: KeyMapping) =>
        `${acc}${acc ? '|' : ''}${curr.id}${trans}`,
      ''
    ),
    'gi'
  )

  const replaced: string = data.replaceAll(regex, match =>
    match.replace(
      /\n".*"/,
      (match, _, b) =>
        `${
          match.match(/.*- &."$/)
            ? // Already has custom keybind.
              match.replaceAll(/ - &."$/gi, '')
            : // Doesn't have custom key bind.
              match.replaceAll(/&|"$/gi, '')
        } - &${
          keyMappings.find(mapping => mapping.id === b.split('\n')[0])!.key
        }"`
    )
  )

  return replaced
}
