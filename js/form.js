import {sendMessage} from './send.js';

var contact = localStorage.getItem("phoneStorage");
console.log(contact);
var name = localStorage.getItem("vOneLocalStorage");
console.log(name);
document.getElementById("title").innerHTML = `Send a message to <b>${name}</b>`;

const submit = async (section) => {
    const name = $(`${section} #name`).val();
    const address = $(`${section} #address`).val();
    const city = $(`${section} #city`).val();
    // const email = $(`${section} #email`).val();
    const phone = $(`${section} #phone`).val();
    const ing = $(`${section} #disp`).value;
    console.log(ing);
        console.log(name);
        console.log(address);
        // console.log(email);
        console.log(phone);
        var ingredients = ing.split(", ");
        var dict = {};
        for (var i = 0; i < ingredients.length; i++) {
          dict[ingredients[i]] = 0;
        }
        db.collection('Restaurants').add({
          name: name,
          address: address,
          // email: email,
          city: address.split(", ")[1],
          phone: phone,
          ingredients: dict
        }).then(function() {
          console.log("DONE");
          window.location.href="../home.html";
        });
  };

  const submit2 = async (section) => {
    const name = $(`${section} #name`).val();
    const address = $(`${section} #address`).val();
    const phone = $(`${section} #phone`).val();
    const i1name = $(`${section} #i1name`).val();
    const i1quantity = $(`${section} #i1quantity`).val();
    const i1price = $(`${section} #i1price`).val();
    const i1 = [];
    if ($(`${section} #i1Damaged`).checked) {
      console.log("i1DAMAGED TRUE");
      i1.add('damaged');
    }
    if ($(`${section} #i1Size`).checked) {
      console.log("i1SIZE TRUE");
      i1.add('incorrectly sized');
    }
    if ($(`${section} #i1Cosmetics`).checked) {
      console.log("i1COSMETICS TRUE");
      i1.add('cosmetically unviable');
    }
    const i1notes = "";
    if (i1[0] != null) {
      i1notes = i1[0];
      for (var i = 1; i < i1.length; i++) {
        i1notes += ", " + i1[i];
      }
    }
    
    const i2name = $(`${section} #i2name`).val();
    const i2quantity = $(`${section} #i2quantity`).val();
    const i2price = $(`${section} #i2price`).val();


    const i3name = $(`${section} #i3name`).val();
    const i3quantity = $(`${section} #i3quantity`).val();
    const i3price = $(`${section} #i3price`).val();
    
    const text = name + ' is a nearby farmer located at ' + address + ' and is willing to offer you the following foods:\n\n' + i1quantity + ' pounds of ' + i1name + ' at a price of $' + i1price + ' per pound\nNotes: ' + i1notes + '\n\n' + i2quantity + ' pounds of ' + i2name + ' at a price of $' + i2price + ' per pound\n\n' + i3quantity + ' pounds of ' + i3name + ' at a price of $' + i3price + ' per pound\n\n' + 'Please contact ' + name + ' at ' + phone + ' to further discuss this offer and make a deal. Thanks!';
    console.log("here: " + contact);
    sendMessage(contact, text);
    setTimeout(function() {window.location.href = "../home.html";}, 4000);
  };
  
  $('#formButton').click(async (e) => {
    e.preventDefault();
    console.log('IN SUBMIT');
    await submit('#input');
});

$('#formButton2').click(async (e) => {
  e.preventDefault();
  console.log('IN SUBMIT');
  await submit2('#input2');
});
