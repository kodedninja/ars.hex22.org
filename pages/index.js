import Head from 'next/head'
import cxs from 'cxs'
import Monologue from '../components/monologue'
import { getContent } from '../lib/content.js'
import Footer from '../components/footer'

// Using cxs on both the server and client,
// the styles will need to be rehydrated.
if (typeof window !== 'undefined') {
  const styleTag = document.getElementById('cxs-style')
  const serverCss = styleTag.innerHTML
  cxs.rehydrate(serverCss)
}

export default function Home({ content }) {
  const wrapperCss = cxs({ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto', padding: '4.0rem'})
  return (
    <div className={wrapperCss}>
      <Head>
        <title>0x22</title>
        <meta property="og:title" content="0x22" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/banner.jpg" />
        <meta property="og:image" content="/images/banner.jpg" />
      </Head>
      <main>
        <Monologue content={content['monologue.md'].html}/>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps () {
  const content = getContent()
  return {
    props: { content }
  }
}
