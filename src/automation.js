const schedule = require('node-schedule');

class Automation {
  constructor(name, task, scheduleTime, recurrenceRule = null, condition = null) {
    this.name = name;
    this.task = task;
    this.scheduleTime = scheduleTime;
    this.recurrenceRule = recurrenceRule;
    this.condition = condition;
  }

  start() {
    try {
      console.log(`Automation ${this.name} is scheduled to run at ${this.scheduleTime}`);
      if (this.recurrenceRule) {
        schedule.scheduleJob(this.recurrenceRule, () => {
          if (this.condition && !this.condition()) {
            console.log(`Condition for automation ${this.name} not met, skipping execution.`);
            return;
          }
          this.executeTask();
        });
      } else {
        schedule.scheduleJob(this.scheduleTime, () => {
          if (this.condition && !this.condition()) {
            console.log(`Condition for automation ${this.name} not met, skipping execution.`);
            return;
          }
          this.executeTask();
        });
      }
    } catch (error) {
      console.error(`Error starting automation ${this.name}:`, error);
    }
  }

  executeTask() {
    try {
      console.log(`Executing task for automation ${this.name}`);
      this.task();
    } catch (error) {
      console.error(`Error executing task for automation ${this.name}:`, error);
    }
  }
}

function createAutomation(name, task, scheduleTime, recurrenceRule = null, condition = null) {
  try {
    if (!name || !task || !scheduleTime) {
      throw new Error('Invalid parameters for creating automation');
    }
    return new Automation(name, task, scheduleTime, recurrenceRule, condition);
  } catch (error) {
    console.error('Error creating automation:', error);
  }
}

module.exports = { Automation, createAutomation };
