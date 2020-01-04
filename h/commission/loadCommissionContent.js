const status_sttled_link = "https://dl.dropboxusercontent.com/s/q8kd0hrjxetcmgd/comstatus.txt?dl=0";
const open_com_html_path = "comopen.html";
const closed_com_html_path = "comclosed.html";
const div_id = "commission_status";
var com_status = "";


load_commission_status();
load_commissions_content();

//Loads if the txt file stored inside personal cloud says "open" or "closed"
function load_commission_status() {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', status_sttled_link, false);
    xmlhttp.send();
    com_status = xmlhttp.responseText
    console.log("Loaded commission status: " + com_status);
}

//Logic to decide what commission content to choose
function load_commissions_content() {
    if (com_status == "open") {
        console.log("Commissions open");
        loadDoc(div_id, open_com_html_path);
    } else {
        console.log("Commissions closed");
        loadDoc(div_id, closed_com_html_path);
    }
}

//AJAX loads the HTML content.
function loadDoc(id, path) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(id).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
}