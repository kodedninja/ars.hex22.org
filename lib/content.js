import fs from 'fs'
import path from 'path'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  breaks: true
})

const contentPath = path.join(process.cwd(), 'content')

export function getContent () {
  const files = fs.readdirSync(contentPath)

  const res = {}

  files.forEach(function (filename) {
    const fullPath = path.join(contentPath, filename)
    const content = fs.readFileSync(fullPath, 'utf8')
    res[filename] = {
      md: content,
      html: md.render(content)
    }
  })

  return res
}
