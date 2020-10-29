import Head from 'next/head'
import Monologue from '../components/monologue'
import cxs from 'cxs'
import { getContent } from '../lib/content.js'


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
      </Head>
      <main>
        <Monologue content={content['monologue.md'].html}/>
      </main>
      <footer className={cxs({ paddingTop: '2.0rem' })}>
        <a href="https://hex22.org" className={cxs({ marginRight: '2.0rem' })}>Website</a>
        <a href="https://0x22.bandcamp.com" className={cxs({ marginRight: '2.0rem' })}>Bandcamp</a>
        <a href="https://soundcloud.com/0x22" className={cxs({ marginRight: '2.0rem' })}>Soundcloud</a>
      </footer>
    </div>
  )
}

export async function getStaticProps () {
  const content = getContent()
  return {
    props: { content }
  }
}
