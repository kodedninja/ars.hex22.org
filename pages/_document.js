import Document, { Main, Head } from 'next/document'

export default class FreeDocument extends Document {
  render() {
    return (
      <html lang="en">
        <FreeHead>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <link rel="stylesheet" href="/index.css"/>
        </FreeHead>
        <body>
          <Main/>
        </body>
      </html>
    )
  }
}

class FreeHead extends Head {
  render() {
    let { head } = this.context;
    let children = this.props.children;
    return (
      <head {...this.props}>
        {children}
        {head}
      </head>
    );
  }
}
