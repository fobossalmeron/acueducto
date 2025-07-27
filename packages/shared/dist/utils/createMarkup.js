export default function createMarkup(html) {
    return { __html: String(html) };
}
