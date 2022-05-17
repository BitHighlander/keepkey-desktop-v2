// import renderNodejsApi from '@/samples/nodejs-api'
// import renderSerialport from '@/samples/serialport'
// import renderSqlite3 from '@/samples/sqlite3'
import events from '@/components/events'
import './style.css'
// import { ipcRenderer } from 'electron'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = renderHTML()

window.removeLoading()

function renderHTML() {
  return `
  <div class="logo-box">
    <img height="124" src="./icon.png" />
    ${events()}
  </div>
`
}
