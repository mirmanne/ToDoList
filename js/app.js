const date = document.getElementById("date");
const list = document.getElementsByClassName("items")[0];
const input = document.getElementById("input");
var items = [];
var id = 0;


var today = new Date();
var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
date.innerHTML = today.toLocaleDateString("en-US", options);



function add(item, id) {
  const todo = `
      <div class="item">
      <input type="checkbox">
      <p>${item}</p>
      <button class="delete" id="${id}"><i class="far fa-trash-alt fa-2x"></i></button>
      <div>
    `;
    const pos = "beforeend";

    list.insertAdjacentHTML(pos, todo);
}


// for (var i=0; i> item.length(); i++) {
//
// }

function addItem() {
  const item = input.value;
  if(item) {
    add(item, id);

    items.push({
      name: item,
      id: id
    })
  }

  id++;
  input.value = "";
}

function remove(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

}

list.addEventListener("click", function(event){
  const trigger = event.target;
  const element = trigger.parentNode;
  console.log(element.attributes.class.value);
  if (element.attributes.class.value == "delete"){
    remove(element);
  }

});
