const render = require("./lib/htmlrender");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");




// const output_path = path.join(output_dir,"index.html")

const employees = []

// function initApp() {
//     // startHtml();
//     addEmployee();
// }

function addEmployee() {
    inquirer.prompt([
    
    {
        message: "Enter employee's name.",
        name: "name"
    },
    {
        message: "Enter employee's ID.",
        name: "id",
    },
    {
        message: "Enter employee's email.",
        name: "email",
    },
    {
        type: "list",
        message: "Select employee's role.",
        name: "role",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
        ]
    },
    ])
        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office phone number";
            }
            inquirer.prompt([{
                message: `Enter employee's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more employees?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreEmployees"
            }])
                .then(function ({ roleInfo, moreEmployees }) {
                    let newEmployee;
                    if (role === "Engineer") {
                        newEmployee = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newEmployee = new Intern(name, id, email, roleInfo);
                    } else {
                        newEmployee = new Manager(name, id, email, roleInfo);
                    }
                    employees.push(newEmployee);
                    // addHtml(newEmployee)
                    if (moreEmployees === "yes") {
                        addEmployees();
                    } else {
                        writeHTML(render(employees));
                    }

                });
        });
}

const writeHTML = HTML => {
    fs.writeFileSync (output_path, HTML, err => {
        if (err) {
            return console.log(err)
        }
    })

}

addEmployee();
// writeHTML();

// // start html output
// function startHtml() {
//     const html = `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//         <title>Team Profile</title>
//     </head>
//     <body>
//         <nav class="navbar navbar-dark bg-dark mb-5">
//             <span class="navbar-brand mb-0 h1 w-100 text-center">Employee Team Profile</span>
//         </nav>
//         <div class="container">
//             <div class="row">`;
//     fs.writeFile("./dist/index.html", html, function (err) {
//         if (err) {
//             console.log(err);
//         }
//     });
//     console.log("start");
// }

// // add employee html
// function addHtml(employee) {
//     return new Employee(function (resolve, reject) {
//         const name = employee.getName();
//         const role = employee.getRole();
//         const id = employee.getId();
//         const email = employee.getEmail();
//         let data = "";
//         if (role === "Engineer") {
//             const gitHub = employee.getGitHub();
//             data = `<div class="col-6">
//             <div class="card mx-auto mb-3" style="width: 18rem">
//             <h5 class="card-header">${name}<br /><br />Engineer</h5>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${id}</li>
//                 <li class="list-group-item">Email Address: ${email}</li>
//                 <li class="list-group-item">GitHub: ${gitHub}</li>
//             </ul>
//             </div>
//         </div>`;
//         } else if (role === "Intern") {
//             const school = employee.getSchool();
//             data = `<div class="col-6">
//             <div class="card mx-auto mb-3" style="width: 18rem">
//             <h5 class="card-header">${name}<br /><br />Intern</h5>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${id}</li>
//                 <li class="list-group-item">Email Address: ${email}</li>
//                 <li class="list-group-item">School: ${school}</li>
//             </ul>
//             </div>
//         </div>`;
//         } else {
//             const officeNumber = employee.getOfficeNumber();
//             data = `<div class="col-6">
//             <div class="card mx-auto mb-3" style="width: 18rem">
//             <h5 class="card-header">${name}<br /><br />Manager</h5>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${id}</li>
//                 <li class="list-group-item">Email Address: ${email}</li>
//                 <li class="list-group-item">Office Phone: ${officeNumber}</li>
//             </ul>
//             </div>
//         </div>`
//         }
//         console.log("adding team employee");
//         fs.appendFile("./dist/index.html", data, (err) => {
//                 if (err) {
//                     return reject(err);
//                 };
//                 return resolve();
//             });
//     });
// }

// function finishHtml() {
//     const html = ` </div>
//         </div>

//     </body>
//     </html>`;

//     fs.appendFile("./dist/index.html", html, function (err) {
//         if (err) {
//             console.log(err);
//         };
//     });
//     console.log("end");
// }

// initApp();