function changeColor(color){

    //var body = document.body;
    //var body = document.getElementsByTagName("body");
    document.body.style = "background-color: " + color;
}

function changeColorOnClick() {
    var color = document.getElementById("color").value ;
    var body = document.body;
    body.style.background=color;
}

function validateContent(re, htmlElement) {
    if(re.test(htmlElement.value)){
        htmlElement.classList.remove("error");
    } else {
        htmlElement.classList.add("error");
    }
}

function validateNameOrSurname(htmlElement) { //on input
    var re = /^[A-Za-z]{2,63}$/;
    validateContent(re, htmlElement);

}

function validateEmailAddress(htmlElement){ //on change
    if(validateEmail(htmlElement.value)){
        htmlElement.classList.remove("error");
    } else {
        htmlElement.classList.add("error");
    }
}

function validateStreet(htmlElement) {
    var re = /^{1+}$/;
    validateContent(re, htmlElement);
    // if(htmlElement.value.length > 0) {
    //     htmlElement.classList.remove("error");
    // } else {
    //     htmlElement.classList.add("error");
    // }
}

function validatePostalCode(htmlElement) {
    var re = /^[0-9]{2}-[0-9]{3}$/;
    validateContent(re, htmlElement);
}

function canIsendForm(htmlElement) {
    //TODO sprawdz wszystkie pola
    //jezeli pola sa poprawne zwrot true jezeli nie zwroc false

    //rozwiazanie
    //1. Pobierz wszytskie elementy html typu input ktore maja klase error
    //jezeli takie sa to formularz nie moze zostac wyslan y

    //2. uruchomienie kazdej z funkcji validate na odpowiednich polach
    //i sprawdznie rezultatow
    alert("nie mozesz wysalc formularza!");
    return false;
}