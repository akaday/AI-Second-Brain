const { GPT, Claude, Gemini, LLaMa, Qwen, Mistral } = require('./llms');

class CustomAgent {
  constructor(name, models) {
    this.name = name;
    this.models = models;
  }

  performTask(task) {
    console.log(`Agent ${this.name} is performing task: ${task}`);
    this.models.forEach(model => {
      model.generateText(task);
    });
  }
}

function createAgent(name, modelTypes) {
  const models = modelTypes.map(modelType => {
    switch (modelType) {
      case 'GPT':
        return new GPT();
      case 'Claude':
        return new Claude();
      case 'Gemini':
        return new Gemini();
      case 'LLaMa':
        return new LLaMa();
      case 'Qwen':
        return new Qwen();
      case 'Mistral':
        return new Mistral();
      default:
        throw new Error('Unsupported model type');
    }
  });
  return new CustomAgent(name, models);
}

module.exports = { CustomAgent, createAgent };
