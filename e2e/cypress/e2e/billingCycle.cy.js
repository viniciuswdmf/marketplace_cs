describe('Cenários felizes', () => {
  const descricaoMes = "Mês teste Cypress";
  const descricaoMesAlterada = "Mês teste Cypress Alterado";
  const valorCredito = 1000;
  const valorDebito = 900;
  const valorGuardar = valorCredito-valorDebito;
  beforeEach(() => {
    cy.visit('http://localhost:8080/#/');
    cy.get('span[id=cadastro]').click();
    cy.get('span[id=menuCiclo]').click();
  })

  it('deve cadastrar um ciclo de pagamento', () => {
    cy.get('a[data-target=tabCreate]').click();
    cy.get('input[name=name]').type(descricaoMes);
    cy.get('input[name=month]').type('12');
    cy.get('input[name=year]').type('2024');
    cy.get('input[name="credits[0].name"]').type('Credito Teste Cypress');
    cy.get('input[name="credits[0].value"]').type(valorCredito);
    cy.get('input[name="debts[0].name"]').type('Debito Teste Cypress');
    cy.get('input[name="debts[0].value"]').type(valorDebito);
    cy.get('input[name="debts[0].status"]').type('PAGO');
    cy.get('div[class=inner] > h3').eq(0).contains(valorCredito);
    cy.get('div[class=inner] > h3').eq(1).contains(valorDebito);
    cy.get('div[class=inner] > h3').eq(2).contains(valorGuardar);
    cy.get('button[type=submit]').click();
    cy.get('div[class=toastr-middle-container] > div[class=title]').should('have.text', 'Sucesso');
    cy.screenshot('cadastrado com sucesso');
  })

  it('deve alterar um ciclo de pagamento', () => {
    cy.get('table tbody tr').each(($row) => {
      const name = $row.find('td').eq(0).text(); 
      if (name.includes(descricaoMes)) {
        const editButton = $row.find('button[class="btn btn-warning"]');
        editButton.click();
    cy.get('input[name=name]').type('{selectall}{backspace}').type(descricaoMesAlterada);
    cy.get('input[name=month]').type('{selectall}{backspace}').type('12');
    cy.get('input[name=year]').type('{selectall}{backspace}').type('2024');
    cy.get('input[name="credits[0].name"]').type('{selectall}{backspace}').type('Credito Teste Cypress');
    cy.get('input[name="credits[0].value"]').type('{selectall}{backspace}').type(valorCredito);
    cy.get('input[name="debts[0].name"]').type('{selectall}{backspace}').type('Debito Teste Cypress');
    cy.get('input[name="debts[0].value"]').type('{selectall}{backspace}').type(valorDebito);
    cy.get('input[name="debts[0].status"]').type('{selectall}{backspace}').type('PAGO');
    cy.get('div[class=inner] > h3').eq(0).contains(valorCredito);
    cy.get('div[class=inner] > h3').eq(1).contains(valorDebito);
    cy.get('div[class=inner] > h3').eq(2).contains(valorGuardar);
    cy.get('button[type=submit]').click();
    cy.get('div[class=toastr-middle-container] > div[class=title]').should('have.text', 'Sucesso');
      }
    }
  )})

  it('deve excluir um ciclo de pagamento', () => {
    cy.get('table tbody tr').each(($row) => {
      const name = $row.find('td').eq(0).text(); 
      if (name.includes(descricaoMesAlterada)) {
        const deleteButton = $row.find('button[class="btn btn-danger"]');
        deleteButton.click();
        cy.get('button[type=submit]').click();
        cy.get('div[class=toastr-middle-container] > div[class=title]').should('have.text', 'Sucesso');
      }
    }
  )

  })})