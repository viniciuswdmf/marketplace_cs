const { cypressHtmlReporter } = require('cypress-html-reporter');

module.exports = (on, config) => {
  on('after:run', (results) => {
    return cypressHtmlReporter.generate({
      open: false,
      disableScrollbar: true,
      reportTitle: 'Cypress Test Results',
      // outros parâmetros de configuração conforme necessário
    });
  });
};