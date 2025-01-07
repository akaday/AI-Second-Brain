const schedule = require('node-schedule');

class Automation {
  constructor(name, task, scheduleTime) {
    this.name = name;
    this.task = task;
    this.scheduleTime = scheduleTime;
  }

  start() {
    try {
      console.log(`Automation ${this.name} is scheduled to run at ${this.scheduleTime}`);
      schedule.scheduleJob(this.scheduleTime, this.task);
    } catch (error) {
      console.error(`Error starting automation ${this.name}:`, error);
    }
  }
}

function createAutomation(name, task, scheduleTime) {
  try {
    if (!name || !task || !scheduleTime) {
      throw new Error('Invalid parameters for creating automation');
    }
    return new Automation(name, task, scheduleTime);
  } catch (error) {
    console.error('Error creating automation:', error);
  }
}

module.exports = { Automation, createAutomation };
