var lista = [];

function TagokFelvitele() {
    if (document.getElementById("osztalynev").value == ""  || document.getElementById("osztalyfonoknev").value == "") 
    {
        alert("Töltsd ki az adatokat!")
    }
    else
    {
        var obj = {
            osztalynev: document.getElementById("osztalynev").value,
            osztalyfonoknev: document.getElementById("osztalyfonoknev").value,
            tagok:[]
        }
        lista.push(obj)
        document.getElementById("osztalyfelvetel").style.display = "none";
        document.getElementById("tagfelvetel").style.display = "block";
    }
}

function Mentes() {
    if (document.getElementById("diaknev").value == "" || document.getElementById("diaklakohely").value == "") {
        alert("Nem jó")
    }
    else
    {
        var obj = {
            diaknev: document.getElementById("diaknev").value,
            diaklakohely: document.getElementById("diaklakohely").value
        }
        lista[lista.length-1].tagok.push(obj)
        document.getElementById("diaknev").value = ""
        document.getElementById("diaklakohely").value = ""
        document.getElementById("diaknev").focus()
    }
}