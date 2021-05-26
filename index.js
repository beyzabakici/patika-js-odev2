const input = document.querySelector('#input');
const listGroup = document.querySelector('#list-group');
const toast = document.querySelector('.toast');
const deleteButton = document.querySelector('.delete-item');
let isAlertVisible = false;

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    handleButtonOnClick();
  }
});

//tekrarbak
deleteButton && deleteButton.addEventListener('click', (e) => {
  console.log(e);
})

function createDeleteIcon() {
  const button = document.createElement('button');
  button.classList.add('ml-2', 'mb-1', 'close', 'delete-item');
  button.innerHTML = `<span aria-hidden="true">&times;</span>`
  return button;
}

function handleButtonOnClick() {
  if(!input.value){
    showAlert('notValue');

    return;
  }

  showAlert('added');
  let listElement = document.createElement('li');
  listElement.classList.add('list-group-item');
  listElement.innerHTML = input.value;
  const deleteButton = createDeleteIcon();
  listElement.append(deleteButton);
  listGroup.append(listElement);
  input.value = '';
}

function handleDeleteItem(val) {
  console.log(1);
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
