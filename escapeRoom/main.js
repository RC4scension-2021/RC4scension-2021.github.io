//
//
//
//
//
//
//
// ATTENTION: You don't need code to solve the escape room! Please leave the source code now to avoid spoilers!
// ATTENTION: You don't need code to solve the escape room! Please leave the source code now to avoid spoilers!
// ATTENTION: You don't need code to solve the escape room! Please leave the source code now to avoid spoilers!
// ATTENTION: You don't need code to solve the escape room! Please leave the source code now to avoid spoilers!
// ATTENTION: You don't need code to solve the escape room! Please leave the source code now to avoid spoilers!
//
//
//
//
//
//
//

let navigatie = document.getElementById("nav");
let footer = document.getElementById("footer");
navigatie.classList.add("hidden");
footer.classList.add("hidden");
let secondComming = document.getElementById("second");
let title1 = document.getElementById("title1");
let opgelost = document.getElementById("opgelost");

let audioDing = new Audio("./files/audio/ding.mp3");
let audioKey = new Audio("./files/audio/keystroke.mp3");
let winxp = new Audio("./files/audio/winxp.mp3");

// eindedeclaraties
let nameSubmit = document.getElementById("nameSubmit");
let boodschap = document.getElementById("boodschap");
let tijdOp = document.getElementById("tijd-op");
let gewonnen = document.getElementById("gewonnen");
let verloren = document.getElementById("verloren");
let suspect = document.getElementById("suspect");
let verder = document.getElementById("verder");

// tips
let tipBtn = document.getElementById("tip-btn");
let tipList = [
  "Attention: the tips are sometimes very informative, so use them only when really necessary, you can only see each tip once!",
  "The perpetrator is extremely narcissistic",
  "The username and password are a reference to the perpetrator",
  "The username and password are visible from the overview screen of the file",
  "L = location",
  "C = colour (RGB)",
  "N = nature",
  "C = confession (ps. the code consists of 4 unique characters)",
  "M = Morsecode",
  "binary numbers can be converted into letters",
  "you need the PIN code of the mobile phone to receive the token",
  "the pin code cannot be found in the police file, only in the escape-room website itself",
];

let tipList4;
let tipText = document.getElementById("tip-text");
let tipCounter = 0;

tipBtn.addEventListener("click", () => {
  if (navigatie.classList.contains("hidden") && tipCounter < 4) {
    tipText.innerHTML = tipCounter + ": " + tipList[tipCounter];
  } else if (
    !navigatie.classList.contains("hidden") &&
    tipCounter >= 4 &&
    tipCounter < 9
  ) {
    tipText.innerHTML = tipCounter + ": " + tipList[tipCounter];
  } else if (navigatie.classList.contains("hidden") && tipCounter == 9) {
    tipText.innerHTML = tipCounter + ": " + tipList[tipCounter];
  } else if (
    navigatie.classList.contains("hidden") &&
    tipCounter > 9 &&
    tipCounter < 12
  ) {
    tipText.innerHTML = tipCounter + ": " + tipList[tipCounter];
  } else {
    tipText.innerHTML =
      ': No more tips available for this section! Stuck anyway? click <a href="https://docs.google.com/document/d/1Z_hVoTC_rGpklwO45BRQH2nr_cSPxL3KcDp5BAB49y8/edit?usp=sharing" target="_blank">here<a>';
  }
  tipCounter++;
});

// slow type
let slow = document.getElementById("slow");
let text =
  "qq//system booting q //initializing user q //user authorized q 01110000 01110010 01100101 01110011 01110011 00100000 01110100 01101000 01100101 00100000 01101100 01100101 01110100 01110100 01100101 01110010 00100000 01110100 00100000 01110100 01101111 00100000 01100011 01101111 01101110 01110100 01101001 01101110 01110101 01100101";

const type = async () => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== "q") {
      audioKey.currentTime = 0;
      audioKey.play();
      let letter = document.createElement("span");
      letter.innerHTML = text[i];
      slow.appendChild(letter);
      await sleep(75);
    } else {
      let tab = document.createElement("br");
      slow.appendChild(tab);
      await sleep(1500);
    }
  }
  // functie nextpage 2
  document.getElementById("pressable").addEventListener("click", function () {
    document.getElementById("slowbox").classList.add("hidden");
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("second").classList.add("wallpaper");
    document.getElementById("desktop-full").classList.remove("hidden");
    tipCounter = 10;
  });
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// login form
let loginSubmit = document.getElementById("submit");
let loginForm = document.getElementById("loginForm");
let login = document.getElementById("login");
let password = document.getElementById("password");

loginSubmit.addEventListener("click", function () {
  if (
    (login.value === "slayer" ||
      login.value === "Slayer" ||
      login.value === "SLAYER") &&
    password.value === "115126"
  ) {
    navigatie.classList.remove("hidden");
    footer.classList.remove("hidden");
    loginForm.classList.add("hidden");
    title1.classList.remove("hidden");
    tipCounter = 4;
  }
});

// booleans opl
let opl1,
  opl2,
  opl3,
  opl4,
  opl5 = false;

// clock
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (minutes == 5 && seconds == 0) {
      opgelost.classList.remove("hidden");
      window.alert(
        "The last 5 minutes have started, from now on you can guess the killer if you can't solve the puzzle!"
      );
    }

    if (minutes == 0 && seconds == 0) {
      boodschap.classList.remove("hidden");
      tijdOp.classList.remove("hidden");
      verder.classList.remove("hidden");
    }

    if (--timer < 0) {
    }
  }, 1000);
}

window.onload = function () {
  var oneHour = 60 * 60,
    display = document.getElementById("timer");
  startTimer(oneHour, display);
};

// VIJF TESTEN

// test navigatie:
let test1 = document.getElementById("test1");
let test2 = document.getElementById("test2");
let test3 = document.getElementById("test3");
let test4 = document.getElementById("test4");
let test5 = document.getElementById("test5");

// test submit buttons
let test1submit = document.getElementById("test1submit");
let test2submit = document.getElementById("test2submit");
let test3submit = document.getElementById("test3submit");
let test4submit = document.getElementById("test4submit");
let test5submit = document.getElementById("test5submit");

// form declaratie
let form1 = document.getElementById("form1");
form1.classList.add("hidden");
let form2 = document.getElementById("form2");
form2.classList.add("hidden");
let form3 = document.getElementById("form3");
form3.classList.add("hidden");
let form4 = document.getElementById("form4");
form4.classList.add("hidden");
let form5 = document.getElementById("form5");
form5.classList.add("hidden");

// reset functie kleurtjes
function reset() {
  test1.style.backgroundColor = "#808080";
  test2.style.backgroundColor = "#808080";
  test3.style.backgroundColor = "#808080";
  test4.style.backgroundColor = "#808080";
  test5.style.backgroundColor = "#808080";
  if (!form1.classList.contains("hidden")) {
    form1.classList.add("hidden");
  }
  if (!form2.classList.contains("hidden")) {
    form2.classList.add("hidden");
  }
  if (!form3.classList.contains("hidden")) {
    form3.classList.add("hidden");
  }
  if (!form4.classList.contains("hidden")) {
    form4.classList.add("hidden");
  }
  if (!form5.classList.contains("hidden")) {
    form5.classList.add("hidden");
  }
}

// submit en controlefuncties
test1.addEventListener("click", function () {
  reset();
  test1.style.backgroundColor = "rgb(99, 99, 99)";
  form1.classList.remove("hidden");
  let hoogte = document.getElementById("hoogte");
  let breedte = document.getElementById("breedte");
  test1submit.addEventListener("click", function () {
    if (
      hoogte.value[0] === "4" &&
      hoogte.value[1] === "2" &&
      breedte.value[0] === "7" &&
      breedte.value[1] === "1"
    ) {
      document.getElementById("light1").style.backgroundColor = "green";
      opl1 = true;
      audioDing.play();
      control();
    }
  });
});

test2.addEventListener("click", function () {
  reset();
  test2.style.backgroundColor = "rgb(99, 99, 99)";
  form2.classList.remove("hidden");
  let r = document.getElementById("r");
  let g = document.getElementById("g");
  let b = document.getElementById("b");
  test2submit.addEventListener("click", function () {
    if (r.value === "255" && g.value === "255" && b.value === "0") {
      document.getElementById("light2").style.backgroundColor = "green";
      opl2 = true;
      audioDing.play();
      control();
    }
  });
});

test3.addEventListener("click", function () {
  reset();
  test3.style.backgroundColor = "rgb(99, 99, 99)";
  form3.classList.remove("hidden");
  let natuur = document.getElementById("natuur");
  test3submit.addEventListener("click", function () {
    if (natuur.value === "Papaver" || natuur.value === "papaver") {
      document.getElementById("light3").style.backgroundColor = "green";
      opl3 = true;
      audioDing.play();
      control();
    }
  });
});

test4.addEventListener("click", function () {
  reset();
  test4.style.backgroundColor = "rgb(99, 99, 99)";
  form4.classList.remove("hidden");
  let code1 = document.getElementById("code1");
  let code2 = document.getElementById("code2");
  let code3 = document.getElementById("code3");
  let code4 = document.getElementById("code4");
  test4submit.addEventListener("click", function () {
    if (
      code1.value === "5" &&
      code2.value === "4" &&
      code3.value === "3" &&
      code4.value === "0"
    ) {
      document.getElementById("light4").style.backgroundColor = "green";
      opl4 = true;
      audioDing.play();
      control();
    }
  });
});

test5.addEventListener("click", function () {
  reset();
  test5.style.backgroundColor = "rgb(99, 99, 99)";
  form5.classList.remove("hidden");
  let morsecode = document.getElementById("morsecode");
  test5submit.addEventListener("click", function () {
    if (morsecode.value == "leave") {
      document.getElementById("light5").style.backgroundColor = "green";
      opl5 = true;
      audioDing.play();
      control();
    }
  });
});

// controle of alle testen ingevuld zijn
let nextpage = document.getElementById("nextpage");
function control() {
  if (opl1 && opl2 && opl3 && opl4 && opl5) {
    nextpage.classList.remove("hidden");
  }
}

// functie next page
nextpage.addEventListener("click", function () {
  document.getElementById("root").classList.add("hidden");
  navigatie.classList.add("hidden");
  secondComming.classList.remove("hidden");
  title1.classList.add("hidden");
  type();
  tipCounter = 9;
});

// functies folders
let folder1 = document.getElementById("folder1");
let folder2 = document.getElementById("folder2");
let phone = document.getElementById("phone");
let computer = document.getElementById("computer");

// windows declaraties
let diaryWindow = document.getElementById("diary-window");
let imageBox = document.getElementById("imagebox");
let phoneBox = document.getElementById("phonebox");
let myPhone = document.getElementById("myphone");
let myComputer = document.getElementById("mycomputer-test");
let myDevice = document.getElementById("mydevice");

function reset2() {
  folder2.style.backgroundImage = "url(files/images/folder-closed.svg)";
  folder1.style.backgroundImage = "url(files/images/folder-closed.svg)";
  if (!diaryWindow.classList.contains("hidden")) {
    diaryWindow.classList.add("hidden");
  }
  if (!imageBox.classList.contains("hidden")) {
    imageBox.classList.add("hidden");
  }
  if (!phoneBox.classList.contains("hidden")) {
    phoneBox.classList.add("hidden");
  }
  if (!myPhone.classList.contains("hidden")) {
    myPhone.classList.add("hidden");
  }
  if (!myComputer.classList.contains("hidden")) {
    myComputer.classList.add("hidden");
  }
  if (!myDevice.classList.contains("hidden")) {
    myDevice.classList.add("hidden");
  }
}
folder1.addEventListener("click", function () {
  reset2();
  folder1.style.backgroundImage = "url(files/images/folder-open.svg)";
  diaryWindow.classList.remove("hidden");
});

folder2.addEventListener("click", function () {
  reset2();
  folder2.style.backgroundImage = "url(files/images/folder-open.svg)";
  imageBox.classList.remove("hidden");
});

phone.addEventListener("click", function () {
  reset2();
  phoneBox.classList.remove("hidden");
  let pin1 = document.getElementById("pin1");
  let pin2 = document.getElementById("pin2");
  let pin3 = document.getElementById("pin3");
  let pin4 = document.getElementById("pin4");
  let pin5 = document.getElementById("pin5");
  let pinSubmit = document.getElementById("pinsubmit");
  pinSubmit.addEventListener("click", function () {
    if (
      pin1.value === "5" &&
      pin2.value === "2" &&
      pin3.value === "9" &&
      pin4.value === "1" &&
      pin5.value === "0"
    ) {
      phoneBox.classList.add("hidden");
      myPhone.classList.remove("hidden");
    }
  });
});

computer.addEventListener("click", function () {
  reset2();
  myComputer.classList.remove("hidden");
  let token = document.getElementById("token");
  let auth = document.getElementById("auth");
  let submitter = document.getElementById("auth-code");
  submitter.addEventListener("click", function () {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("tokenText").innerHTML = "Token: 854596";
  });
  auth.addEventListener("click", function () {
    if (token.value === "854596") {
      myComputer.classList.add("hidden");
      myDevice.classList.remove("hidden");
      opgelost.classList.remove("hidden");
    }
  });
});

// functie time -date
setInterval(function () {
  let t = new Date();
  let minutes = t.getMinutes();
  if (t.getMinutes() < 10) {
    minutes = "0" + t.getMinutes();
  } else minutes = t.getMinutes();
  let hours = t.getHours();
  document.getElementById("time-display").innerHTML = hours + ":" + minutes;
}, 1000);

// secret
document.getElementById("moordenaar").innerHTML = "YATES";

// einde

nameSubmit.addEventListener("click", () => {
  if (
    suspect.value == "Tom Yates" ||
    suspect.value == "Yates" ||
    suspect.value == "Tom" ||
    suspect.value == "tom" ||
    suspect.value == "yates" ||
    suspect.value == "tom yates"
  ) {
    boodschap.classList.remove("hidden");
    if (!tijdOp.classList.contains("hidden")) {
      tijdOp.classList.add("hidden");
    }
    gewonnen.classList.remove("hidden");
  } else {
    boodschap.classList.remove("hidden");
    verloren.classList.remove("hidden");
    verder.classList.remove("hidden");
  }
});

verder.addEventListener("click", () => {
  boodschap.classList.add("hidden");
});
