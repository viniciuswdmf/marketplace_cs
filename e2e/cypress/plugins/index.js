const { cypressHtmlReporter } = require('cypress-html-reporter');


module.exports = (on, config) => {
  on('after:run', async (results) => {
    // Gerar o relatório HTML
    await cypressHtmlReporter.generate({
      open: false,
      disableScrollbar: true,
      reportTitle: 'Cypress Test Results',
      reportDir: 'cypress/reports/html', // Ajuste o diretório do relatório
      jsonDir: 'cypress/reports', // Diretório onde os arquivos JSON são armazenados
      // outros parâmetros de configuração conforme necessário
    });
  });
};
