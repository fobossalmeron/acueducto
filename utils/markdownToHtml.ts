import html from 'remark-html'

var remark = require('remark')

export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}