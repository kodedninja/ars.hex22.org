export default function Monologue ({ content }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }}/>
  )
}
