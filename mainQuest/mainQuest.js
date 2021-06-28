function updateBase(gridID, gridColour) {
    const targetBase = document.getElementById(gridID);
    targetBase.style.backgroundColor = gridColour;
    console.log("tok 2");
}

let n = 25;

for (let i = 1; i <= n; i++) {
    const element = "grid" + i;
    db.collection('gridOwners')
    .doc(element)
    .onSnapshot((doc) => {
        updateBase(element, doc.data().gridColour);
    })
}

