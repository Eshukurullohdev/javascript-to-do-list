
// barcha todolar saqlaydigan joy
let toDOList = [];
let form = document.querySelector(".form");
let input = document.querySelector(".form_input");
let ul = document.querySelector(".toDOList");

form.addEventListener("submit", function (a) {
   a.preventDefault();
   let itemId = String(Date.now());
   let inputQiymati = input.value;
   addItemToDo(itemId, inputQiymati);
   addItemToArray(itemId, inputQiymati);
   input.value = "";

});

ul.addEventListener("click", function (a) {
   let id = a.target.getAttribute("data-id")
   console.log(id);
   if (!id) return
   removeItemFromDoM(id)
});

function addItemToDo(itemId, inputQiymati) {
   const li = document.createElement("li");
   li.setAttribute("data-id", itemId);
   li.innerText = inputQiymati;
   ul.appendChild(li);
}
function addItemToArray(itemId, inputQiymati) {
   toDOList.push({ itemId, inputQiymati });
   console.log(toDOList);
};

function removeItemFromDoM(id) {
   let li = document.querySelector('[data-id="' + id + '"]')
   ul.removeChild(li);
}


