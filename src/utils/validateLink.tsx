export const validLinks = (videoLink: string) => {
    const link = /^(?:https?:\/\/)?(?:m\.|www\.|vt\.|)?(tiktok\.com\/|youtube\.com\/|youtu\.be\/)[)[a-zA-Z0-9!@#$&()\\-`.+_?=,\/\"]*$/

    if (!videoLink.match(link)) {
            return false
    } else {
        return true
    }
} 