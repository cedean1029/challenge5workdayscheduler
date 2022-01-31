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
    var currentTime = moment().format("H");
    console.log(timeName);
    console.log(currentTime);

    for (var i = 9; i <= 17; i++) {
        if (parseInt($("#"+i)[0].id) < currentTime) {
            $("#"+i).addClass("past")
        };
        if ($("#"+i)[0].id == currentTime) {
            $("#"+i).addClass("present")
        };
        if ($("#"+i)[0].id > currentTime) {
            $("#"+i).addClass("future")
        };
    };
};

loadHours();

auditHours();