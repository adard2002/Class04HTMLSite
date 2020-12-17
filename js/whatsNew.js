
function getInput() {
    while (sent) {
        var input = prompt('Give a number 1 through 6. Type 0 to exit.');

        if (images.length < input) {
            alert("Please enter a valid number");
            continue;
        }

        if (input === stop) {
            console.log("Received the stop input, just showing the user the site.")
            sent = false;
            break;
        }
        else if (!isNaN(input) && images.length >= input) {
            showImage(input);
        }
        sent = false;
    }

}
function showImage(input) {
    var path = document.getElementById('whatsNew');

    console.log(input + " was the input we received.")

    for (amount = 0; amount < input; amount++) {
        var imgLi = document.createElement('li');
        var img = document.createElement('img');
        img.setAttribute('class', 'disneyImageSize')
        console.log('Setting image ' + images[amount] + ' to the web document.')
        img.src = images[amount]
        imgLi.appendChild(img)
        path.appendChild(imgLi);
    }
}
function reloadStore() {

    while (document.getElementById("whatsNew").firstChild) {
        document.getElementById("whatsNew").removeChild(document.getElementById("whatsNew").firstChild)
    }

    sent = true;
    getInput();
}

getInput();
