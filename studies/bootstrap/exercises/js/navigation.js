(function () {
    function navigateViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        if (!link) return

        const destiny = document.querySelector('[wm-link-destiny]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destiny.innerHTML = html
                eval(html.match(/\<script\>([\s\S]*)\<\/script\>/)[1])
            })
    }

    function configureLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function initialNavigation() {
        if (location.hash) {
            navigateViaAjax(location.hash)
        } else {
            const firstLink = document.querySelector('[wm-link]')
            navigateViaAjax(firstLink.hash)
        }
    }

    window.onhashchange = e => navigateViaAjax(location.hash)

    configureLinks()
    initialNavigation()
})()