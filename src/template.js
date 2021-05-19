export default function template(initialState = {}, content = "") {
    let scripts = '';
    if (content) {
      scripts = `<script defer>
                  window.__STATE__ = ${JSON.stringify(initialState)}
                </script>    
                <script defer src="assets/client.js"></script>`    
    } else {
      scripts = `<script defer src="assets/bundle.js"></script> `
    }
    let page = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>React App</title>
        <link rel="stylesheet" href="assets/index.css">
      </head>
      <body>
        <div id="root">${content}</div>
        ${scripts}
      </body>
    </html>`
    
    return page;
  }
