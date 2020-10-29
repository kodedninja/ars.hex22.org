import cxs from 'cxs'

export default function Monologue ({ content }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} className={cxs({ ' .pb1': { paddingBottom: '1.0rem' } })}/>
  )
}
