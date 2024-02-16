if (!document.cookie.split("; ").includes(`ultima_visita=${new Date()}`)) {
    document.cookie = "preferencia=;max-age=+0"
    document.cookie = "ultima_visita=;max-age=+0"
}

document.cookie = `idioma=${prompt("Escoja el idioma")};max-age=+10`;
document.cookie = `tema=${prompt("Escoja el tema(oscuro, claro)")};max-age=+15`
document.cookie = `usuario=${prompt("Introduzca su usuario")};max-age=+20`
document.cookie = `preferencia=${prompt("Introduzca su preferencia")}`
document.cookie = `ultima_visita=${new Date().toLocaleString()}`
setInterval(() => {
    console.log(document.cookie);
}, 2000)
