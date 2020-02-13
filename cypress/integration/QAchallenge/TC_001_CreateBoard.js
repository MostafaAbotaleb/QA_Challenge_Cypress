describe ('Test Creating Board', function(){
    before(function(){ 
        //To enter Url (step 1)
        cy.getUrl()
        //To configrate data driven testing
        cy.fixture('login').then(function(data){
            this.data=data
            //To login with valid username and password (steps 2,3,4)
            cy.get('input[type="email"]').type(data.email)
            cy.get('input[type="password"]').type(data.password)
            cy.get('button[type="submit"]').click()
        })   
    })

    it('Create Board',function(){ 
    //To click “CREATE BOARD” (step 5)
    cy.get('a.nav-link[href="/boards/create"]',{timeout:20000}).contains('Create Board').should('be.visible').click()
    
    //Assertion Url (Expected Result)
    cy.url().should('eq','https://sprintboards.io/boards/create')
    
    //Assertion “Create a Board” title is displayed (Expected Result)
    cy.get('.font-weight-normal',{timeout:10000}).contains('Create a Board').should('be.visible')
    
    //To Type “My first board” in “Session Name” field (step 6)
    cy.get('.form-control[placeholder="Session Name"]',{timeout:15000}).type('My first board')
    
    //To choose owner
    cy.get('.card-body div.mb-4 .custom-select').select('Sennder').should('have.value','7407')
    
    //To click “Create Board” button (step 7)
    cy.get('.btn[type="submit"]').click()
    
    //Assertion to get a confirmation pop-up saying “Created” (Expected Result)
    cy.get('.swal-title',{force:true}).screenshot().invoke('text').should('equal','Created')
    
    //Assertion URL contains “https://sprintboards.io/boards” (Expected Result)
    cy.url().should('contain','https://sprintboards.io/boards')
    
    //To click green “+” button (step 8)
    cy.get(':nth-child(1) > .flex-column > .d-flex > :nth-child(3)',{timeout:10000}).click()
    
    //Assertion a modal with title “Add a Card” is displayed (Expected Result)
    cy.get('#add-card-modal').invoke('text').should('equal','Add a Card') 
    
    //To type “Goal was achieved” as title (step 9)        
    cy.get('.form-control[type="text"]').type('Goal was achieved')
    
    //To type “Sprint was well planned” as description (step 10)
    cy.get('.form-control[placeholder="Optional"]').type('Sprint was well planned')
    
    //To click “Add Card” button (step 11)
    cy.get('.btn-success[type="submit"]').click()
    
    //Assertion card is added with the title and description specified in steps 9 and 10 (Expected Result)
    cy.get('.no-highlighting').should('contain','Goal was achieved')
    cy.get('.no-highlighting').should('contain','Sprint was well planned')
    
    //To click red “+” button (step 12)
    cy.get(':nth-child(2) > .flex-column > .d-flex > :nth-child(3) > .svg-inline--fa').click()
    
    //Assertion a modal with title “Add a Card” is displayed (Expected Result)
    cy.get('#add-card-modal').invoke('text').should('equal','Add a Card')
    
    //To type “Goal was not achieved” as title (step 13)
    cy.get('.form-control[type="text"]').type('Goal was not achieved')
    
    //To click “Add Card” button (step 14)
    cy.get('.btn-danger[type="submit"]').click()
    
    //Assertion card is added with the title specified in step 13
    cy.get('.bg-danger').should('contain','Goal was not achieved')
    
    //Assertion card’s description is set to “No description provided.” (Expected Result)
    cy.get('.p-3 .text-secondary').should('contain','No description provided.')
    
    //To click thumbs up icon for the card in the first column (step 15)
    cy.get(':nth-child(1) > .flex-column > .card-deck > .no-highlighting > .react-contextmenu-wrapper > .card-body > :nth-child(3) > .d-inline-flex > .ml-3').click()
    
    //Assertion “Likes” count goes from 0 to 1 (Expected Result)
    cy.get(':nth-child(1) > .flex-column > .card-deck > .no-highlighting > .react-contextmenu-wrapper > .card-body > :nth-child(3)').should('contain',1)
    
    //To click “x Delete” button from the card in the second column (step 16)
    cy.get(':nth-child(2) > .flex-column > .card-deck > .no-highlighting > .react-contextmenu-wrapper > .card-body > :nth-child(3) > .d-inline-flex > :nth-child(2) > .btn').click()
    
    //Assertion modal appears “Delete Card” (Expected Result)
    cy.get('.modal-title').contains('Delete Card').should('be.visible')
    
    //Assertion modal appears  “Are you sure you want to continue?” (Expected Result)
    cy.get('.modal-content .modal-body').contains('Are you sure you want to continue?').should('be.visible')
    
    //To click “Confirm” button (step 17)
    cy.get('.btn-danger').click()
    
    //Assertion card with title “Goal was not achieved” is removed from the board (Expected Result)
    cy.get('div.d-flex.flex-column div.d-flex.flex-row.flex-fill div.w-100 div.d-flex.flex-column.flex-md-row.flex-fill div.w-100.row.mx-0.p-2:nth-child(2) div.d-flex.flex-column.col-12.col-md > div.card-deck.flex-fill').should((data) => {
        const text = data.text()
        expect(text).not.to.include('Goal was not achieved')
         }) 
    })   
})
