import React from 'react'

const Html = ({ content, state, stats: { style, main = 'bundle.js' } }) => (
  <html>
    <head>

      <title>{'[::]'}</title>

      <meta charSet='utf-8' />
      <link rel='icon' href='/assets/favicon.ico' type='image/x-icon' />

      {style && (
        <link href={`/dist/${style}`} rel='stylesheet' />
      )}

      {state && (
        <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__ = ${JSON.stringify(state)}` }} />
      )}

    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: content }} class={{ class }} />
      <script src={`/dist/${main}`} />
    </body>
  </html>
)

export default Html
