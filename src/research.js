const axios = require('axios');

class Researcher {
  constructor(name) {
    this.name = name;
  }

  async gatherInformation(query) {
    console.log(`Researcher ${this.name} is gathering information on: ${query}`);
    // Implement logic to gather information from various sources
    const response = await axios.get(`https://api.example.com/search?q=${query}`);
    return response.data;
  }

  analyzeInformation(data) {
    console.log(`Researcher ${this.name} is analyzing data`);
    // Implement logic to analyze the gathered data
    const analysis = data.map(item => item.summary);
    return analysis;
  }

  summarizeInformation(analysis) {
    console.log(`Researcher ${this.name} is summarizing information`);
    // Implement logic to summarize the analyzed data
    const summary = analysis.join(' ');
    return summary;
  }
}

function createResearcher(name) {
  return new Researcher(name);
}

module.exports = { Researcher, createResearcher };
