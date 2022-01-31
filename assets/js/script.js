var hours = {}

function save(e) {
    console.log(e.target.parentElement.previousElementSibling.value);
    console.log(e.target.parentElement.previousElementSibling.id);

    var text = e.target.parentElement.previousElementSibling.value;
    var id = e.target.parentElement.previousElementSibling.id;

    localStorage.setItem(id, text);
}

function loadHours() {
    var messages = Object.entries(localStorage);
    messages.forEach(function (message) {
        console.log(message)
        document.getElementById(message[0]).innerHTML=message[1]
    })
};

function auditHours() {
    // get hour from task element
    var currentTime = moment().format("H");
    console.log(currentTime);

    for (var i = 9; i <= 17; i++) {
        var id = document.getElementById(i)
        if (i < currentTime) {
            id.setAttribute("class", "past") 
        }
        else if (i == currentTime) {
            id.setAttribute("class", "present") 
        }
        else if (i > currentTime) {
            id.setAttribute("class", "future") 
        };
    };
};

loadHours();

auditHours();