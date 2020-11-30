import cxs from 'cxs'

export default function Monologue ({ content }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} className={cxs({ paddingBottom: '1.0rem', ' .pb1': { paddingBottom: '1.0rem' } })}/>
  )
}
