const navigate = (url) => {
    window.open(url, '_blank')
}

const loadCodeOfConduct = () => {
    document.getElementById("codeofconduct").innerHTML = `
        <iframe src="files/2020-code-of-conduct.pdf#view=fitH" class="codeofconduct-viewer"></iframe>
    `
}

const isMobile = () => {
    return window.innerWidth <= 500
}