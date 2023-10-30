function hideSearchBar() {
    var sbStatus = document.getElementById("inputBar")

    if (sbStatus.style.display == "block") {
        sbStatus.style.display = "none";
    } else {
        sbStatus.style.display = "block";
    }
}

function recentsdd() {
    var btnPosition = document.getElementById("recents")

    if (btnPosition.style.marginTop == "0px" ){
        btnPosition.style.marginTop = "17px";
    } else {
        btnPosition.style.marginTop = "0px"
    }


}