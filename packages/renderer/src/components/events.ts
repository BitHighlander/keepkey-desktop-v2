const {
  ipcRenderer,
} = window;

export default function () {
  // Use ipcRenderer.on
  ipcRenderer.on('main-process-message', (_event, message) => {
    const oDiv = document.getElementById('nodejs-api');
    console.log('[Receive Main-process message]:', message)
    if (oDiv) {
      oDiv.innerHTML = `
      <code>
           KeepKey Events: 
        <br/>
        <br/>
      </code>
      `;
    }
  })

  return `
  <style>
    .nodejs-api-box code { display:inline-block; padding:4px 11px; margin:4px 0px; width:770px; text-align:left; border-radius:4px; background:rgb(38 42 55); color:aliceblue; word-wrap:break-word; hyphens:auto; }
  </style>
  <div class="nodejs-api-box">
    <h2>KeepKey</h2>
    <div id="nodejs-api"></div>
  </div>
  `;
}
