import yargs from 'yargs'
import { Arguments } from 'yargs'
import cli from './chocoleto-cli'


export default () =>
  yargs
    .command('$0', 'default', (): any => {}, (argv: Arguments): void => {
      console.log(cli.greet('ChocoLeto'))
    })
