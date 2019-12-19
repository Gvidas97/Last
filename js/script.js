function gettingInformation() {
  let string = ''
  var field = $('#search').val().trim();
  let value = data.filter(val => val.jarCode.includes(field))
  value.forEach((title) => {
    string += `<p>Įmonių filtravimas: </p>
               <p>-------------------</p>
               ĮMONĖS PAVADINIMAS: ${title.name}
               <brĮmonės juridinių asmenų registro kodas: ${title.jarCode}
               <br>Vidutinis darbo užmokestis: ${title.avgWage}
               <br>Apdraustųjų skaičius: ${title.numInsured}
               <br>Draudėjo kodas: ${title.code}
               <br>Įrašo data: ${title.month}
               <br>`
  })
  $('#results').empty().append(string)
}
