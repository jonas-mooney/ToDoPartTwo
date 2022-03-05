

const add1 = document.querySelector('#submit');
const add2 = document.querySelector('#addTask');
let foundObject = '';


let groupStorage = JSON.parse(localStorage.getItem('Groups'));
if (!groupStorage) {
  let storedGroupArray = new Group('Groups');
  localStorage.setItem(storedGroupArray.groupName, JSON.stringify(storedGroupArray));
}
renderGroups()


function addGroup() {
  let groupInput = document.querySelector('#groupInput').value
  // Grabbing value of input
  
  let group = new Group(groupInput);
  // Creating object with groupInput as name
  
  groupStorage.tasks.push(group)
  // New group is added

  localStorage.setItem('Groups', JSON.stringify(groupStorage))
  // groupStorage is pushed to Groups array in local storage

  renderGroups()
  // renderItemList()
}

function renderGroups() {
  let groupList = document.querySelector('#groupList');
  let groupStorageHTML = '';
  for (let i=0; i < groupStorage.tasks.length; i++) {
    groupStorageHTML += `<br><li onclick='renderItemList("${groupStorage.tasks[i].id}")' id="${groupStorage.tasks[i].id}">${groupStorage.tasks[i].groupName}</li>`;
  }
  groupList.innerHTML = groupStorageHTML;
}



function renderItemList(groupIdNumber) {
  let groupHeader = document.querySelector('#groupHeader');
  let itemGroupHTML = '';
  // Grabbing header and creating empty string for header

  foundObject = groupStorage.tasks.find((object) => {
    return object.id === groupIdNumber;
  })
  // Returning the tasks with matching ID

  groupHeader.innerHTML += `${foundObject.groupName}`;
  // Displaying group name

  let itemList = document.querySelector('#itemList');
  let foundObjectTasks = foundObject.tasks;

  console.log(foundObjectTasks);

  itemList.innerHTML = foundObjectTasks;
  // Setting the task list equal to array of tasks within group

  addItemsToList();
}


function addItemsToList() {
  let newTaskInput = document.querySelector('#newTask').value;
  let storedTask = new Task(newTaskInput);
  // Grabbing newTask input and using constructor

  foundObject.tasks.push(storedTask);
  // Pushing new task group into global foundObject variable L5

  groupStorage.tasks = groupStorage.tasks.filter((item) => foundObject.id != item.id);
  groupStorage.tasks.push(foundObject);
  // Replacing the groupStorage tasks with updated list
  
  localStorage.clear('Groups');
  localStorage.setItem(groupStorage.groupName, JSON.stringify(groupStorage));
  // Clearing local storage and replacing it with new Groups,groupstorage
  
  renderListItems(groupStorage.tasks)
}

function renderListItems(groupStorageTasks) {
  let itemList = document.querySelector('#itemList');
  let itemListHTML = '';
  let groupHeader = document.querySelector('#groupHeader').innerHTML
  
  // console.log(groupStorageTasks)
  // console.log(groupStorage);


  foundItem = groupStorageTasks.find((tasks) => {
    return tasks.groupName === groupHeader;
  })
  
  
  for (let i=0; i < foundItem.tasks.length; i++) {
    itemListHTML += `<li>${foundItem.tasks[i].name}`
  }

  itemList.innerHTML = itemListHTML;

}



// function renderGroups() {
//   let groupList = document.querySelector('#groupList');
//   let groupStorageHTML = '';
//   for (let i=0; i < groupStorage.tasks.length; i++) {
//     groupStorageHTML += `<br><li onclick='renderItemList("${groupStorage.tasks[i].id}")' id="${groupStorage.tasks[i].id}">${groupStorage.tasks[i].groupName}</li>`;
//   }
//   groupList.innerHTML = groupStorageHTML;
// }



add1.addEventListener('click', addGroup);
add2.addEventListener('click', addItemsToList);




// objectExample = {

//   colors: [
//     green = {
//       id: 123,
//       age: 321,
//     },
//     blue = {
//       id: 234,
//       age: 432,
//     }
//   ]
// }

// const foundObject = objectExample.colors.find((object) => {
//   return object.id === 123;
// })

// console.log(foundObject);








// REST
// Use the routes and the http method to communicate with the server

/*
* GET /candy - All the candy
* GET /candy/snickers - for that one candy
* GET /candy/type/chocolate - for all chocolate candy
*
* POST /candy/cinnamon-bears - create new cinnamon bears candy
* /customers
*
* GET /customers - all customers
* GET /customers/2343352345 - that one customer
* GET candystore.com/customers/pending-orders - 
*
*
*/