const { GPT, Claude, Gemini, LLaMa, Qwen, Mistral } = require('./llms');

class CustomAgent {
  constructor(name, models) {
    this.name = name;
    this.models = models;
  }

  performTask(task) {
    console.log(`Agent ${this.name} is performing task: ${task}`);
    try {
      this.models.forEach(model => {
        const output = model.generateText(task);
        console.log(`Output from ${model.name}: ${output}`);
      });
    } catch (error) {
      console.error(`Error performing task with agent ${this.name}:`, error);
    }
  }
}

function createAgent(name, modelTypes) {
  try {
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
  } catch (error) {
    console.error('Error creating agent:', error);
  }
}

module.exports = { CustomAgent, createAgent };
