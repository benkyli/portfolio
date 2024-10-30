export const openInNewTab = (url) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if (newTab) newTab.opener = null
}