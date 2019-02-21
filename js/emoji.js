new ClipboardJS('.copy');

let strikethrough = (emoji) => (emoji + String.fromCharCode(8416));

function convert() {
    let emoji = document.getElementById("in").value;

    let converted = "INPUT AN EMOJI";
    if(emoji !== "") {
        converted = strikethrough(emoji);

        document.getElementById("drop-raw").value = converted;
    } else {
        document.getElementById("drop-raw").value = "";
    }

    document.getElementById("drop").innerHTML = converted;

    return false;
};

function copyNotification() {
    Toastify({
        text: "Copied!",
        duration: 1500,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        positionLeft: false, // `true` or `false`
        backgroundColor: "black",
      }).showToast();
}