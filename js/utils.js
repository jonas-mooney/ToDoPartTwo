class Utils {
  static newGuide() {
    return `${s4()}-${s4()}-${s4()}-${s4()}`;

    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  }
}


class List {
  constructor(name, id, tasks) {
    this.name = name;
    this.id = id;
    this.tasks = tasks;
  }
  addTask(text) {
    const newTask = new Task(text);
    this.tasks.push(newTask);
  };
  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id != id);
  };
  rename(name) {
    this.name = name;
  }
}
// Filter function assigns to new array
// Checking if task id matches


class Task {
  constructor(text,completed) {
    this.id = Utils.newGuide();
    this.name = text;
    this.completed = false;
    // this.delete = Utils.newGuide();
  }
}


class Group {
  constructor(text) {
    this.id = Utils.newGuide();
    this.tasks = [];
    this.groupName = text;
  }
}

 