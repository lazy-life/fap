function loginS() {
    var campus = document.getElementById('campus');
    if (campus.selectedIndex == 0) {
        alert('invalid');
    } else {
        location.href = "welcome.html";
    }
}

function loginP() {
    alert('Feature not available ')
}

function boxBegin(pos) {
    var boxs = document.getElementsByClassName('detail');
    var btns = document.getElementsByClassName('btn');
    for (let i = 0; i < btns.length; i++) {
        if (pos == btns[i]) {
            if (!boxs[i].style.display || boxs[i].style.display == "none") {
                boxs[i].style.display = "block";
            }
            else {
                boxs[i].style.display = "none";
            }
        }

    }
}

