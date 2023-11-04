export const scroll = (id: string) => {
    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" })
}

export const openUrl = (url: string) => {
    window.open(url, '_blank');
}

export const openPDF = (file: string) => {
    window.open(file);
}
