export const scroll = (id: string) => {
    const element = document.getElementById(id)!;
    const top = element.offsetTop;
    window.scrollTo({
        top: top - 80,
        left: 0,
        behavior: "smooth"
    });
}