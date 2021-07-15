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

// functies morse

function MorseNode(ac, rate) {
    // ac is an audio context.
    this._oscillator = ac.createOscillator();
    this._gain = ac.createGain();
  
    this._gain.gain.value = 0;
    this._oscillator.frequency.value = 750;
  
    this._oscillator.connect(this._gain);
  
    if (rate == undefined) rate = 17;
    this._dot = 1.5 / rate; // formula from Wikipedia.
  
    this._oscillator.start(0);
  }
  
  MorseNode.prototype.connect = function (target) {
    return this._gain.connect(target);
  };
  
  MorseNode.prototype.MORSE = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
  
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
  };
  
  MorseNode.prototype.playChar = function (t, c) {
    for (var i = 0; i < c.length; i++) {
      switch (c[i]) {
        case ".":
          this._gain.gain.setValueAtTime(1.0, t);
          t += this._dot;
          this._gain.gain.setValueAtTime(0.0, t);
          break;
        case "-":
          this._gain.gain.setValueAtTime(1.0, t);
          t += 3 * this._dot;
          this._gain.gain.setValueAtTime(0.0, t);
          break;
      }
      t += 2 * this._dot;
    }
    return t;
  };
  
  MorseNode.prototype.playString = function (t, w) {
    w = w.toUpperCase();
    for (var i = 0; i < w.length; i++) {
      if (w[i] == " ") {
        t += 3 * this._dot; // 3 dots from before, three here, and
        // 1 from the ending letter before.
      } else if (this.MORSE[w[i]] != undefined) {
        t = this.playChar(t, this.MORSE[w[i]]);
        t += 3 * this._dot;
      }
    }
    return t;
  };
  
  let ac = new (window.AudioContext || window.webkitAudioContext)();
  
  let morse = new MorseNode(ac);
  morse.connect(ac.destination);
  
  let txt = document.querySelector("#morse");
  let btn = document.querySelector("#play");
  btn.addEventListener("click", function () {
    morse.playString(ac.currentTime, txt.value);
  });
  