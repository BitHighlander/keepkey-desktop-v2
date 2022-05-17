import { execa } from 'packages/main/samples/esmodules/execa'

(async () => {
  const { stdout } = await execa('echo', ['unicorns'])

  // console.log(stdout) // unicorns
})()
