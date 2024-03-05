import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      stage: 'https://stage.pasv.us/course',
      prod: 'https://coding.pasv.us/course',
      test: 'Hello World!',
      base: "https://uitestingplayground.com",
      demoQA: "https://demoqa.com",
      herokuapp: "https://the-internet.herokuapp.com",

    }
  },
  defaultCommandTimeout: 16_000,
});
