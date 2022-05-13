export const validLinks = (youtubeURL: string, tiktokURL: string) => {
    const youtube = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    const tiktok = /^(?:https?:\/\/)?(?:m\.|www\.|vt\.|)?(tiktok\.com\/)[a-zA-Z0-9!@#$&()\\-`.+_?=,/\"]*$/

    if ((youtubeURL && tiktokURL) ) {
        if (!tiktokURL.match(tiktok) || !youtubeURL.match(youtube)) {
            return false
        }
        return true
    } else if (tiktokURL.match(tiktok) && !youtubeURL) {
        return true
    } else if (youtubeURL.match(youtube) && !tiktokURL) {
        return true
    } else {
        return false
    }
} 