import {IFrame} from "../../pages/Iframe";

describe('IFRAME', () =>{
    beforeEach(()=> {
        IFrame.visit()
    })
    beforeEach(()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })

    it('test iframe', ()=> {
        IFrame.getIframe()
    })
})