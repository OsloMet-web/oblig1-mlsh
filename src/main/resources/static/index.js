let movieForm = document.getElementById("movieForm")


movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let movie = document.getElementById('film')
    let count = document.getElementById('antall')
    let firstName = document.getElementById('fornavn')
    let lastName = document.getElementById('etternavn')
    let phoneNr = document.getElementById('telefonnr')
    let eMail = document.getElementById("epost")

    if (movie.value == ""){
        alert("Velg film")
    }
    if (count.value <= 0){
        alert("Skriv inn antall")
    }
    if (firstName.value == ""){
        alert("Skriv inn fornavn")
    }
    if (lastName.value == ""){
        alert("Skriv inn etternavn")
    }
    if (phoneNr.value <= 0){
        alert("Skriv inn telefonnummer")
    }
    if( eMail == ""){
        alert("Skriv inn Epost")
    }
    let node = document.createElement("li")
    let textNode = document.createTextNode(movie.value+"   "+count.value+"   "+firstName.value +"   "+lastName.value+"   "+phoneNr.value+"   "+eMail.value )
    node.appendChild(textNode)
    document.getElementById("liste").appendChild(node)

   let deleteButton = document.createElement("button");
    deleteButton.textContent = "Slett billett";
    deleteButton.addEventListener("click",function(){
        node.remove();

    })

    document.getElementById("slettAlleBilletteneBtn").addEventListener('click', function (){
        let list = document.getElementById('liste')
        while (list.firstChild){
            list.removeChild(list.firstChild)
        }
    })

    node.appendChild(deleteButton);

    document.getElementById("liste").appendChild(node)


})
