-# This is an automation task 

 *Introduction:
   This is an automation task using Cypress as testing framework by using smoke test plan to test:
     - Login
     - Create Board
     - Delete Board
      
 * About the environment of the project:
    - Cypress
    - Visual Studio Code  
    - Mocha
    - Node.js

 * About the structure of the framework:
    * - cypress:->fixtures->login.json(include test data of the project)
     * - ->integration->QAchallenge->TC_001_CreatBoard(include the Test Case)
     * -  ->screenshots
     * - ->support->commands.js(include Cypress command add (getUrl))
    * -   cypress.json(include base configuration and baseUrl
    * -   jsconfig.json(include the method of Intelligent Code Completion)
            
 * How to run the Test Case
 
* 1- Open the VSC
* 2- Import the project
* 3- Open new terminal in VSC or Command Prompt
* 4- Direct to path of the project
* There are 4 ways to run the Test Case:
* 1- To run as a headless, write command (npx cypress run) then enter
* 2- To run through the dashboard, write command (npx cypress open) then enter
* 3- To run as a headless and dashboard, write command (npx cypress run --headed) then enter
* 4- To run as a headless and creat a link of reprt in the terminal and crate a reprt in the dashboard:
* 1.login to the account on the dashboard through Google or Github account
* 2.projectId (41uvvss) will created automatic in cypress.json file in the project, and keep the command with the key
* 3.Write the command with the key in the terminal (npx cypress run --record --key a8ede358-98b4-4a2e-a4e5-eaa53e675a67) then enter okay
* 4.getting the link of the report of Test case in the terminal or open Runs in the dashboard and find the report okay.
     
     
