import snarkdown from "snarkdown"

window.Snarkdown = snarkdown

/**
 * Get the note's markdown file url
 * 
 * @returns string | false Url of the markdown notes or false 
 */
const noteUri = () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('note')) {
            let note = urlParams.get('note')
            return `/notes/html/${note}.html`    
        }
    return false
}

window.noteUri = noteUri

/**
 * 
 * @param {DOMElement} el HTML element in the html page
 * @param {string} text Markdown text fetched from the markdown note
 */
const renderHtml = (el, text) => {
    el.innerHTML = snarkdown(text)
}

window.renderHtml = renderHtml

/**
 * Create a request object to be used by fetch.
 * 
 * @param {string} uri url to be fetch
 * @returns {Request} object
 */
const request = (uri) => {
    return new Request(uri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'text/html'
        })
    })
} 

window.request = request