// ======================================
// AGUARDA O CARREGAMENTO DA PÁGINA
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // MENU MOBILE
    // ======================================

    const menuBtn = document.querySelector(".menu-mobile");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("ativo");
        });

        // Fecha o menu ao clicar em um link
        const linksMenu = nav.querySelectorAll("a");

        linksMenu.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("ativo");
            });
        });
    }

    // ======================================
    // DESTACAR PÁGINA ATUAL NO MENU
    // ======================================

    let paginaAtual = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    // Corrige quando a URL termina com "/"
    if (
        paginaAtual === "" ||
        paginaAtual === "/"
    ) {
        paginaAtual = "index.html";
    }

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        const href = link
            .getAttribute("href")
            .toLowerCase();

        link.classList.remove("ativo");

        if (href === paginaAtual) {
            link.classList.add("ativo");
        }
    });

    // ======================================
    // ANO AUTOMÁTICO
    // ======================================

    const ano = document.getElementById("ano");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

    // ======================================
    // BOTÃO VOLTAR AO TOPO
    // ======================================

    const voltarTopo =
        document.querySelector(".voltar-topo");

    if (voltarTopo) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                voltarTopo.classList.add("mostrar");
            } else {
                voltarTopo.classList.remove("mostrar");
            }

        });

        voltarTopo.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }

});
