import fetch from 'packages/main/samples/esmodules/node-fetch'

(async () => {
  const body = await (await fetch('https://github.com/')).text()

  // console.log(body)
})()
