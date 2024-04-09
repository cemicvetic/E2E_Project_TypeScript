let img: HTMLImageElement
describe('BROKEN IMAGE', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/broken_images`)
    })
    it('Verify that image is broken', () => {
        cy.get('div.example img')
            .first()
            .should('be.visible')
            .and((el) => {
                img = el[0] as HTMLImageElement
                expect(
                    img.naturalHeight,
                `Image naturalHeight size is ${img.naturalHeight}`
                ).to.eq(0)
                expect(
                    img.naturalWidth,
                    `Image naturalWidth size is ${img.naturalWidth}`
                ).to.eq(0)
            })
    })
    it('Verify that image is not broken', () => {
        cy.get('div.example img')
            .last()
            .should('be.visible')
            .and((el) => {
                img = el[0] as HTMLImageElement
                expect(
                    img.naturalHeight,
                    `Image naturalHeight size is ${img.naturalHeight}`
                ).to.eq(160)
                expect(
                    img.naturalWidth,
                    `Image naturalWidth size is ${img.naturalWidth}`
                ).to.eq(160)
            })
    })
    describe('BROKEN IMAGE', () => {
        beforeEach(() => {
            cy.visit(`${Cypress.env('herokuapp')}/broken_images`)
        })

        it('Verify that image is not broken', () => {
            cy.get('div.example img')
                .last()
                .should('be.visible')
                .and((el) => {
                    img = el[0] as HTMLImageElement
                    expect(
                        img.naturalHeight,
                        `Image naturalHeight size is ${img.naturalHeight}`
                    ).not.to.eq(0)
                })
        })
    })
})
