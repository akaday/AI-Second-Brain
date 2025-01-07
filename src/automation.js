const schedule = require('node-schedule');

class Automation {
  constructor(name, task, scheduleTime) {
    this.name = name;
    this.task = task;
    this.scheduleTime = scheduleTime;
  }

  start() {
    console.log(`Automation ${this.name} is scheduled to run at ${this.scheduleTime}`);
    schedule.scheduleJob(this.scheduleTime, this.task);
  }
}

function createAutomation(name, task, scheduleTime) {
  return new Automation(name, task, scheduleTime);
}

module.exports = { Automation, createAutomation };
