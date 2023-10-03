export const scroll = (id: string) => {
    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" })
}