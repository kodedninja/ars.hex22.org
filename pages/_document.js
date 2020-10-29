import Document, { Main, Head } from 'next/document'
import cxs from 'cxs'

export default class FreeDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = await renderPage()

    const htmlCss = cxs({
      padding: 0,
      margin: 0,
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontSize: '24px',
      background: '#080808',
      color: 'white',
      lineHeight: '1.4',
      ' a': {
        color: 'inherit',
        textDecoration: 'none'
      },
      ' *': {
        boxSizing: 'border-box'
      }
    })

    const style = cxs.css()
    cxs.reset()
    return { ...page, htmlCss, style }
  }

  render() {
    return (
      <html lang="en" className={this.props.htmlCss}>
        <FreeHead>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <style
            id="cxs-style"
            dangerouslySetInnerHTML={{ __html: this.props.style }}
          />
        </FreeHead>
        <body className={this.props.htmlCss}>
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
