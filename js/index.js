
const groups = [];
let taskList = [];
const add1 = document.querySelector('#submit');
const add2 = document.querySelector('#addTask');


function addGroup() {
  let groupList = '';
  let groupArray = [];

  let newGroup = document.querySelector('#groupInput').value;
  if (newGroup == "") {
    window.alert('Enter a valid list name');
    return;
  }

  let groupKey = new Group(newGroup);
  localStorage.setItem(newGroup, JSON.stringify(groupKey));
  document.querySelector('#groupHeader').innerHTML = newGroup;
  // document.querySelector('#itemList').innerHTMl = groups;
  groups.push(newGroup);
  

  groups.forEach((newGroup) => {
    let getGroupId = JSON.parse(localStorage.getItem(`${newGroup}`));
    groupArray.push(getGroupId);
    localStorage.setItem('Groups', JSON.stringify(groupArray));
    groupList += `<li onclick='changeGroup(${getGroupId.id})' id='${getGroupId.id}'>${newGroup}</li>`
  })
  
  
  let groupStorage = JSON.parse(localStorage.getItem('Groups'))
  document.querySelector('#groupList').innerHTML = (groupStorage[0].groupName);

}


// groupStorage.forEach(function(item) {
//   document.querySelector('#groupList').innerHTML = (item.groupName)
//   console.log(item.groupName);
// })


function changeGroup(id) {
  // let group = document.getElementById(`${id}`);
  // console.log(group)
  // group.addEventListener('click', function() {
  //   console.log('been clicked');
  // document.querySelector('#itemList').innerHTML = group;
// })
}

// function displayNewGroup() {
//   let groupList = '';
//   groups.forEach((newGroup) => {
//     groupList += `<li id='${groupKey}'>${newGroup}</li>`
//   })
//   document.querySelector('#groupList').innerHTML = groupList;
// }

function addTask() {
  let newTask = document.querySelector('#newTask').value;
  if (newTask == "") {
    window.alert('Enter a valid task name');
    return;
  }
  let taskKey = new Task(newTask, 'false');
  // localStorage.getItem(Chores, JSON.parse(tasks));
  localStorage.setItem(newTask, JSON.stringify(taskKey));
  // localStorage.setItem('taskList', taskList);
  // Mario fix ^^
  // Setting list to a string?
  taskList.push(taskKey);
  displayNewItem();
}

function displayNewItem() {
  let itemList = '';
  taskList.forEach((newTask) => {
    itemList += `<span style="display: flex; align-items: center;"><input id = "${newTask.id}" type="radio"><li>${newTask.text}</li></span>`
  })
  document.querySelector('#itemList').innerHTML = itemList;
}

add1.addEventListener('click', addGroup);
add2.addEventListener('click', addTask);


















// setTimeout(() => {
//   console.log('hello after a while');
// }, 2000)

// let chores = JSON.parse(localStorage.getItem('Chores'));
// chores.tasks.push('asdf');
// console.log(chores);

// Think of storage as a file cabinet. You need to open the drawer and pull
// out a folder before you can edit a file. You also need to replace the
// file in the folder, return the folder into the drawer and cllse the drawer.

// Define a constant variable at the top of js file. This will remove
// name confusion.



