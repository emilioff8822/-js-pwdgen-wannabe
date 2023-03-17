/*

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23

*/

const name = prompt('Inserisci nome')

const surname = prompt('Inserisci Cognome')

const color = prompt ('Inserisci il tuo colore preferito')

console.log(name , surname , color)

const password = `
ecco la tua nuova password <br>
${name}${surname}${color}23


`
console.log(password)


document.getElementById("risp").innerHTML =
password