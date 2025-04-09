function clickHandler(event) {

    event.preventDefault();
    var name = document.getElementById('nameid');
    var email = document.getElementById('emailid');
    var message = document.getElementById('msgid');

    if (name.value != "" && email.value != "" && message.value != "") {
        alert("Thank you for your inquiry " + name.value + "!");
        restForm();
    }
    else if (name.value == "")
        alert("Please enter your name.")
    else if (email.value == "")
        alert("Please enter your e-mail address.")
    else if (message.value == "")
        alert("Please enter a message.")
    else
        alert("Please fill in the form before submitting.")


}
function restForm() {

    document.querySelector('#nameid').value = "";
    document.querySelector('#emailid').value = "";
    document.querySelector('#msgid').value = "";
}

document.querySelector('#sendid').addEventListener('click', clickHandler);
