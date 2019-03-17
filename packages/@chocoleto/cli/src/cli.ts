import yargs from 'yargs'
import { Arguments } from 'yargs'
import exaggerate from './exaggerate'


export default () =>
  yargs
    .command('$0', 'default', (): any => {}, (argv: Arguments): void => {
      console.log(`Hello, ${exaggerate('ChocoLeto', 7)}`)
    })
