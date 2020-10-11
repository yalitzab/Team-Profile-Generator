const inquirer = require("inquirer");
const fs = require("fs");

const employees = []

function addEmployee(){
    inquirer.prompt([{
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
            "Manager",
            "Engineer",
            "Intern",
        ]
    },
])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}

add();