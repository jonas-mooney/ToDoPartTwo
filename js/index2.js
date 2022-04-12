const add1 = document.querySelector('#submit');
const add2 = document.querySelector('#addTask');
let foundObject = '';
let groupStorageTasks = '';

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
  let itemList = document.querySelector('#itemList');
  let itemGroupHTML = '';

  // Grabbing header and creating empty string for header

  foundObject = groupStorage.tasks.find((object) => {
    return object.id === groupIdNumber;
  })
  // Returning the tasks with matching ID

  groupHeader.innerHTML = `${foundObject.groupName}`;
  // Displaying group name

  for (let i=0; i < foundObject.tasks.length; i++) {
    itemGroupHTML += `<div class='listDiv' id='${foundObject.tasks[i].id}'><li>
                      <input class='checker' type='checkBox'>
                      <h4>${foundObject.tasks[i].name}</h4>
                      <button onclick=editTaskButton('${foundObject.tasks[i].id}') class='editButton'>Edit</button>
                      <button onclick=deleteTaskButton('${foundObject.tasks[i].id}') class='deleteButton'>Delete</button>
                      </li></div>`
  }
  itemList.innerHTML = itemGroupHTML;
  // Finding and inserting tasks from HTML
}


function addItemsToList() {
  let newTaskInput = document.querySelector('#newTask').value;

  if (newTaskInput == '') {
    window.alert('Please ender a valid task name');
  } else {

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
    
    renderNewListItem(groupStorage.tasks)
  }
}

function renderNewListItem(groupStorageTasks) {
  let itemList = document.querySelector('#itemList');
  let itemListHTML = '';
  let groupHeader = document.querySelector('#groupHeader').innerHTML;

  foundItem = groupStorageTasks.find((tasks) => {
    return tasks.groupName === groupHeader;
  })
  
  for (let i=0; i < foundItem.tasks.length; i++) {
    itemListHTML += `<div class='listDiv' id='${foundItem.tasks[i].id}'><li>
                    <input class='checker' type='checkBox'>
                    <h4>${foundItem.tasks[i].name}</h4>
                    <button onclick=editTaskButton('${foundItem.tasks[i].id}') class='editButton'>Edit</button>
                    <button onclick=deleteTaskButton('${foundItem.tasks[i].id}') class='deleteButton'>Delete</button>
                    </li></div>`
  }
  itemList.innerHTML = itemListHTML;
}

// let tempGroupId = 'temp';
function itemDeleteHelper(groupId) {
  console.log(groupId)
}

function deleteTaskButton(clickedId) {
  let groupHeader = document.querySelector('#groupHeader').innerHTML;
  let store = JSON.parse(localStorage.getItem('Groups'));
  console.log(clickedId);
  let group = store.tasks.find(element => element.groupName == groupHeader);
  console.log(group);
  let newGroup = group.tasks.filter(id => id != clickedId);
  console.log(newGroup);

  // console.log(groupHeader)
  // console.log(clickedId)
  // console.log(store)
}


async function editTaskButton(id) {
  let input = document.createElement('input');
  document.getElementById(id).appendChild(input);
  let button = document.createElement('button');
  button.innerHTML = '👍'
  document.getElementById(id).appendChild(button);

  let updatedInfo = input.innerText;
  button.addEventListener('click', console.log(updatedInfo));
}




// 
// 
//  NEW IDEA 4/9 - FOR DELETE BUTTON, CREATE A RUNNING LIST OF ALL ITEMS THAT HAVE HAD THEIR DELETE BUTTON CLICKED, THEN FILTER OUT IN RENDER
// 
// 


// Bring entire local storage back into function, modify and return
// ${foundItem.tasks[i].id}

add1.addEventListener('click', addGroup);
add2.addEventListener('click', addItemsToList);

