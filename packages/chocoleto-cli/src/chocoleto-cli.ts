import exaggerate from './exaggerate'

const greet = (name: string): string => `Hello, ${exaggerate(name, 7)}`

export default {
  greet,
}
