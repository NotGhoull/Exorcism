export const colorCode = (code: string): number => {
  const idx = COLORS.indexOf(code.toLowerCase());
  if (idx === -1) throw new Error("Invalid color code");
  return idx;
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
