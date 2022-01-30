var hours = {}

$(".textarea").on("click", "p", function () {
    var textInput = $("<textarea>").addClass("description").val(text);
    $(this).replaceWith(textInput);
    console.log(textInput)
})

$(".fa-save").on("click", function (event) {
    console.log($(event.target).parent()[0].previousElementSibling.value);
    console.log($(event.target).parent()[0].previousElementSibling.id);

    var text = $(event.target).parent()[0].previousElementSibling.value;
    var id = $(event.target).parent()[0].previousElementSibling.id;

    localStorage.setItem(id, text);
});

function loadHours() {
    var messages = Object.entries(localStorage);
    messages.forEach(function (message) {
        console.log(message)
        $(`#${message[0]}`).val(message[1])
    })
};

function auditHours() {
    // get hour from task element
    var timeName = $(".hour").text();
    var currentTime = moment(timeName, "L").set("hour", 09);
    console.log(timeName);
    console.log(currentTime);

    for (var i = 0; i <= 8; i++) {
        console.log($("#"+i).previousElementSibling.value());
        
    };


    //   .find("span")
    //   .text()
    //   .trim();

    // // convert to moment object at 5:00pm
    // var time = moment(date, "L").set("hour", 17);

    // // remove any old classes from element
    // $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

    // // apply new class if task is near/over due date
    // if (moment().isAfter(time)) {
    //   $(taskEl).addClass("list-group-item-danger");
    // } else if (Math.abs(moment().diff(time, "days")) <= 2) {
    //   $(taskEl).addClass("list-group-item-warning");
    // }
};

loadHours();

auditHours();