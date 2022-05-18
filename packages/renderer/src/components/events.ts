const {
  ipcRenderer,
} = window;

export default function () {
  // Use ipcRenderer.on
  ipcRenderer.on('@keepkey/state', (_event, message) => {
    const oDiv = document.getElementById('keepkey-state');
    console.log('[keepkey-state message]:', message)
    if (oDiv) {
      oDiv.innerHTML = `
      <code>
           KeepKey State: ${message.state}
        <br/>
        <br/>
      </code>
      `;
    }
  })

  ipcRenderer.on('main-process-message', (_event, message) => {
    const oDiv = document.getElementById('nodejs-api');
    console.log('[Receive Main-process message]:', message)
    if (oDiv) {
      oDiv.innerHTML = `
      <code>
           KeepKey Status: ${message}
        <br/>
        <br/>
      </code>
      `;
    }
  })

  return `
  <style>
    .nodejs-api-box code { display:inline-block; padding:4px 11px; margin:4px 0px; width:770px; text-align:left; border-radius:4px; background:rgb(38 42 55); color:aliceblue; word-wrap:break-word; hyphens:auto; }
    .keepkey-state code { display:inline-block; padding:4px 11px; margin:4px 0px; width:770px; text-align:left; border-radius:4px; background:rgb(38 42 55); color:aliceblue; word-wrap:break-word; hyphens:auto; }
  </style>
  <div class="keepkey-state">
    <h2>KeepKey</h2>
    <div id="keepkey-state"></div>
  </div>
  <div class="nodejs-api-box">
    <h2>KeepKey</h2>
    <div id="nodejs-api"></div>
  </div>
  `;
}
