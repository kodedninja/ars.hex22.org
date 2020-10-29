import cxs from 'cxs'

export default function Footer() {
  return (  
    <footer className={cxs({ paddingTop: '2.0rem' })}>
      <a href="https://hex22.org" className={cxs({ marginRight: '2.0rem' })}>Weboldal</a>
      <a href="https://0x22.bandcamp.com" className={cxs({ marginRight: '2.0rem' })}>Bandcamp</a>
      <a href="https://soundcloud.com/0x22" className={cxs({ marginRight: '2.0rem' })}>Soundcloud</a>
    </footer>
  )
}
