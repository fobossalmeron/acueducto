export default function createMarkup(html: any) { 
  return { __html: String(html) }; 
}