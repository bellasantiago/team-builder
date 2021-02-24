//<!-- Generate Mainframe of HTML page -->

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Builder</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@200;300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="jumbotron jumbotron-fluid bg-primary text-light text-center">
        <div class="container">
            <h1 class="display-4">Team's Contact Information</h1>
        </div>
    </div>
    <div class="container bg-light">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                ${createCard(team)}
            <div>
        </div>
    </div>
    </div>
</body>

</html>
    `;
};

// Team Building
const createCard = team => {

    //Manager Card
    const cardManager = manager => {
        return `
        <div class="card">
                <div class="card-header bg-primary text-light text-center ">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h4 class="card-title">${manager.getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group text-dark">
                        <li class="list-group-item">ID Number: ${manager.getId()} </li>
                        <li class="list-group-item">Email Address: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Telephone Number: <a href="tel:${manager.getTelephoneNumber()}">${manager.getTelephoneNumber()}</a></li>
                    </ul>
                </div>
        </div>
        `;
    };

    //Engineer Card
    const cardEngineer = engineer => {
        return `
        <div class="card">
                <div class="card-header bg-primary text-light text-center ">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h4 class="card-title">${engineer.getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group text-dark">
                        <li class="list-group-item">ID Number: ${engineer.getId()} </li>
                        <li class="list-group-item">Email Address: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub Account: <a href="https://github.com/${engineer.getGit()}" target="_blank">${engineer.getGit()}</a></li>
                    </ul>
                </div>
            </div>    
        `;
    };

    //Intern Card
    const cardIntern = intern => {
        return `
        <div class="card">
                <div class="card-header bg-primary text-light text-center ">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h4 class="card-title">${intern.getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group text-dark">
                        <li class="list-group-item">ID Number: ${intern.getId()} </li>
                        <li class="list-group-item">Email Address: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School Name: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => cardManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => cardEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => cardIntern(intern))
        .join("")
    );

    return html.join("");
}