import Head from 'next/head'
import Monologue from '../components/monologue'
import { getContent } from '../lib/content.js'

export default function Home({ content }) {
  return (
    <div className="mw mxa p4">
      <Head>
        <title>0x22</title>
      </Head>
      <main>
        <Monologue content={content['monologue.md'].html}/>
      </main>
      <footer className="pt2">
        <a href="https://hex22.org" className="mr2">Website</a>
        <a href="https://0x22.bandcamp.com" className="mr2">Bandcamp</a>
        <a href="https://soundcloud.com/0x22" className="mr2">Soundcloud</a>
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
