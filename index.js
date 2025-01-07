const { createAgent, CustomAgent } = require('./src/agents');
const { createAutomation, Automation } = require('./src/automation');
const { createResearcher, Researcher } = require('./src/research');

// Create instances of custom agents
const agent1 = createAgent('Agent1', ['GPT', 'Claude']);
const agent2 = createAgent('Agent2', ['Gemini', 'LLaMa']);

// Create instances of automations
const automation1 = createAutomation('Automation1', () => {
  console.log('Running Automation1 task');
}, '0 9 * * *'); // Every day at 9 AM

const automation2 = createAutomation('Automation2', () => {
  console.log('Running Automation2 task');
}, '0 12 * * *', null, () => {
  return new Date().getDay() !== 0; // Do not run on Sundays
});

// Create instances of researchers
const researcher1 = createResearcher('Researcher1');
const researcher2 = createResearcher('Researcher2');

// Demonstrate how to use these instances

// Perform tasks with agents
agent1.performTask('Analyze market trends');
agent2.performTask('Generate content for blog');

// Schedule automations
automation1.start();
automation2.start();

// Conduct research
(async () => {
  const info = await researcher1.gatherInformation('Artificial Intelligence');
  const analysis = researcher1.analyzeInformation(info);
  const summary = researcher1.summarizeInformation(analysis);
  console.log(`Research summary by ${researcher1.name}: ${summary}`);
})();
