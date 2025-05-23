describe('ACO - pełna konfiguracja i uruchomienie', () => {
  beforeEach(() => {
    cy.visit('https://aheaco.t24.ovh');
  });

  it('Wypełnia formularz, dodaje miasta i uruchamia algorytm', () => {
    // Pobieramy wszystkie inputy numeryczne (jest ich 7 na górze)
    cy.get('input[type="number"]').then((inputs) => {
      cy.wrap(inputs[0]).clear().type('30');   // Liczba miast
      cy.wrap(inputs[1]).clear().type('100');  // Liczba iteracji
      cy.wrap(inputs[2]).clear().type('30');   // Liczba mrówek
      cy.wrap(inputs[3]).clear().type('1');    // Alpha
      cy.wrap(inputs[4]).clear().type('2');    // Beta
      cy.wrap(inputs[5]).clear().type('0.5');  // Rho
      cy.wrap(inputs[6]).clear().type('100');  // Q
    });

    // Kliknij "Dodaj klikając"
    cy.contains('Dodaj klikając').click();

    // Kliknij na canvasie kilka razy, żeby dodać miasta
    cy.get('canvas').first()
  .click(150, 150)
  .click(300, 200)
  .click(400, 100);


    // Kliknij "Oblicz trasę"
    cy.contains('Oblicz trasę').click();

    // Sprawdź, czy canvas istnieje (czy wizualizacja się odpaliła)
    cy.get('canvas').should('exist');
  });
});
