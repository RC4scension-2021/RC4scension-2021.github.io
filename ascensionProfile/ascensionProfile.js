function updateBase(ogID, ogCount) {
    const targetBase = document.getElementById(ogID);
    // targetBase.style.backgroundColor = ogCount;
    targetBase.innerText = ogCount;
    // console.log("tok8");
    // console.log("ogCount");
}

let n = 30;

for (let i = 1; i <= n; i++) {
    const element = "og" + i;
    db.collection('gridMC')
    .doc(element)
    .onSnapshot((doc) => {
        console.log("tok10");
        updateBase(element, doc.data().ogCount);
    })
}
