const toast = document.querySelector('.toast');
let isAlertVisible = false;

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    handleButtonOnClick();
  }
});

var toDoList = document.querySelector('.list-group-item');
var i;
for (i = 0; i < toDoList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  toDoList[i].appendChild(span);
}

var close = document.querySelector(".close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('#list-group');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

function handleButtonOnClick() {
  var newTodoElement = document.createElement("li");
  var inputValue = document.querySelector("#input").value;
  var todoText = document.createTextNode(inputValue);
  newTodoElement.appendChild(todoText);
  if (!inputValue.trim()) {
    showAlert('notValue');
    document.querySelector("#input").value = "";
    return;
  } else {
    showAlert('added');
    document.querySelector("#list-group").appendChild(newTodoElement);
  }
  document.querySelector("#input").value = "";
  newTodoElement.classList.add('list-group-item');
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newTodoElement.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function showAlert(param) {
  isAlertVisible = true;
  const toastMessage = document.querySelector('.toast-body');
  if(param === 'notValue') {
    toastMessage.innerHTML = 'Boş değer girilemez.';
  }
  else if(param === 'added') {
    toastMessage.innerHTML = 'Eklendi.'
  }
  toast.style.opacity = 1;
}

setInterval(() => {
  if(isAlertVisible){
    toast.style.opacity = 0;
  }
}, 3000);

