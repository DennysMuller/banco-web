const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:4000", // front/BFF (app.js, PORT padrão 4000)
    env: {
      apiUrl: "http://localhost:3000", // Mockoon (npm run mock-server)
    },
    video: false,
    retries: { runMode: 1, openMode: 0 },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
