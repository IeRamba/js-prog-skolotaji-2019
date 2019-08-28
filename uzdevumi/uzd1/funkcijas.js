function palielinat(){
  ierakstitVertibu(iegutVertibu() + 1)
}

function samazinat(){
    a = iegutVertibu()
    a > 1
        ? ierakstitVertibu(a-1)
        : alert(`Ievadītais skaitlis neder ${a}`)
  }

function iegutVertibu(){
    return parseInt(document.getElementById("vertiba").value);
}

function ierakstitVertibu(vertiba){
   document.getElementById("vertiba").value = vertiba
}