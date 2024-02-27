let movieForm = document.getElementById("movieForm")

let receiptList = [];
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{8}$/;
movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var isValid = true;

    let receipt = {
        movie:  document.getElementById('film').value,
        count: document.getElementById('antall').value,
        firstName: document.getElementById('fornavn').value,
        lastName: document.getElementById('etternavn').value,
        phoneNr:document.getElementById('telefonnr').value,
        eMail: document.getElementById("epost").value
    }




    if (receipt.movie == ""){
       document.getElementById('velgfilmValidation').hidden = false;
       document.getElementById('velgfilmValidation').style.color = "red";
       document.getElementById('velgfilmValidation').style.display = "inline";

       isValid = false;
    } else{
        document.getElementById('velgfilmValidation').hidden = true;

    }
    if (receipt.count <= 0){
        document.getElementById('antallValidation').hidden = false;
        document.getElementById('antallValidation').style.color = "red";
        document.getElementById('antallValidation').style.display = "inline";

        isValid = false;
    } else {
        document.getElementById('antallValidation').hidden = true;
    }
    if (receipt.firstName == ""){
        document.getElementById('firstnameValidation').hidden = false;
        document.getElementById('firstnameValidation').style.color = "red";
        document.getElementById('firstnameValidation').style.display = "inline";

        isValid = false;
    } else{
        document.getElementById('firstnameValidation').hidden = true;
    }
    if (receipt.lastName== ""){
        document.getElementById('lastnameValidation').hidden = false;
        document.getElementById('lastnameValidation').style.color = "red";
        document.getElementById('lastnameValidation').style.display = "inline";

        isValid = false;
    }else{
        document.getElementById('lastnameValidation').hidden = true
    }
    if (receipt.phoneNr <= 0 || !emailRegex.test(receipt.phoneNr)){
        document.getElementById('telefonnrValidation').hidden = false;
        document.getElementById('telefonnrValidation').style.color = "red";
        document.getElementById('telefonnrValidation').style.display = "inline";

        isValid = false;
    }else{
        document.getElementById('telefonnrValidation').hidden = true;
    }
    if( receipt.eMail == "" || !emailRegex.test(receipt.eMail)){
        document.getElementById('emailValidation').hidden = false;
        document.getElementById('emailValidation').style.color = "red";
        document.getElementById('emailValidation').style.display = "inline";

        isValid = false;
    }else{
        document.getElementById('emailValidation').hidden = true;
    }

    if(!isValid){
        return;
    }


    receiptList.push(receipt);


    var list = document.getElementById("liste");


    list.innerHTML = '';


    receiptList.forEach(function(item) {

        var listItem = document.createElement("li");

        listItem.textContent =  item.movie+ " "+item.count+" " + item.firstName +"   "+item.lastName+"   "+item.phoneNr+"   "+item.eMail ;

        list.appendChild(listItem);
    });



    document.getElementById("slettAlleBilletteneBtn").addEventListener('click', function (){
        let list = document.getElementById('liste')
        while (list.firstChild){
            list.removeChild(list.firstChild)
        }

        receiptList = [];

    })


    node.appendChild(deleteButton);

    document.getElementById("liste").appendChild(node)


})
