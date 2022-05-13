export const validLinks = (youtubeURL, tiktokURL) => {
    const youtube = new RegExp("^http(?:s)?://(?:www.)?(youtube).com/watch?v=([a-zA-Z0-9_]+)", "g")
    const tiktok = new RegExp("^http(?:s)?://(?:www.)?(youtube).com/watch?v=([a-zA-Z0-9_]+)", "g")
    if (!youtubeURL && !tiktokURL) {
        return "One Link Required"
    } else if (!youtube.test(youtubeURL)) {
        return "Invalid Youtube Link"
    } else if (!tiktok.test(tiktokURL)) {
        return "Invalid TikTok Link"
    } else {
        return true
    }
} 