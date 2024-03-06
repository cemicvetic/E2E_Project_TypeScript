class Alert{
  private alertTextButton:string = "Click for JS Alert"
  private buttonSelector: string = 'button'
    jsAlert(){
      cy.contains(this.buttonSelector, this.alertTextButton).click()
      cy.on("window:alert", (text)=> {
        expect(text).to.equal('I am a JS Alert')
      })
      cy.on('window:confirm', () => true)
      cy.get('#result')
    }
}
export const AlertPage = new Alert()