export default class Project {
    tasks = [];
    constructor(name) {
        this.name = name;
    }

    addActivity(string) {
        this.tasks.push(string);
    }
}