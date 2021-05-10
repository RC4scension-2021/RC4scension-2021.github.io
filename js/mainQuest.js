function updateBase(gridID, gridColour) {
    const targetBase = document.getElementById(gridID);
    targetBase.style.backgroundColor = gridColour;
}

let n = 30;

for (let i = 1; i <= n; i++) {
    const element = "grid" + i;
    var colourListener = firebase.database().ref("gridOwners/" + element + "/gridColour");
    colourListener.on('value', function (snapshot) {
        updateBase(element, snapshot.val());
    });
}