class scrambledrive {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => this.resolve = resolve);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 90);
        // 80 = SPEED, SMALLER NUMBER GOES FASTER
        const end = start + Math.floor(Math.random() * 90);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
}}
class nscrambledrive {
  constructor(nel) {
    this.nel = nel;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.nel.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 90);
      // 80 = SPEED, SMALLER NUMBER GOES FASTER
      const end = start + Math.floor(Math.random() * 90);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.nel.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
}}
class xscrambledrive {
  constructor(xel) {
    this.xel = xel;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.xel.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 90);
      // 80 = SPEED, SMALLER NUMBER GOES FASTER
      const end = start + Math.floor(Math.random() * 90);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.xel.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
}}
class yscrambledrive {
  constructor(yel) {
    this.yel = yel;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.yel.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 90);
      // 80 = SPEED, SMALLER NUMBER GOES FASTER
      const end = start + Math.floor(Math.random() * 90);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.yel.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
}}
var phrases = [
  'THE CONFUSION FOUND ITSELF RESOLVED',
  'THE CONFUSION FOUND ITSELF RESOLVED <br> WITH THE ADVENT OF THE CORRECT EQUATIONS.']
var nphrases = [
    'THE MODELS COLLIDE',
    'THE MODELS COLLAPSE.']
var xphrases = [
    'SUDDENLY',
    'SUDDENLY']
var yphrases = [
    'ELECTRONS AND LIGHT BEHAVED IN A KNOWABLE,',
    'ELECTRONS AND LIGHT BEHAVED IN A KNOWABLE, QUANTUM MECHANICAL WAY.' ]

  var el = document.querySelector('.text');
  var nel = document.querySelector('.ntext');
  var xel = document.querySelector('.xtext');
  var yel = document.querySelector('.ytext');

  const t0 = document.getElementById('t0');
  const nt = document.getElementById('nt');
  const xt = document.getElementById('xt');
  const yt = document.getElementById('yt');

  const btn = 0;

  const fx = new scrambledrive(el);
  const nfx = new nscrambledrive(nel);
  const xfx = new xscrambledrive(xel);
  const yfx = new yscrambledrive(yel);
  
  let counter = 0;
  let ncounter = 0;
  let xcounter = 0;
  let ycounter = 0;
  
const next = () => {  
  fx.setText(phrases[counter]).then(() => {
     if(counter < phrases.length){
       setTimeout(next, 800);
     } else {
      nt.style.pointerEvents = "auto";
     }
  })
 counter = (counter + 1);
};
const pnext = () => {
    nfx.setText(nphrases[ncounter]).then(()=> {
      if(ncounter < nphrases.length){
        setTimeout(pnext,800)
      } else {
        xt.style.pointerEvents = "auto";
      }
    })
  ncounter = (ncounter + 1);
};
const xnext = () => {
  xfx.setText(xphrases[xcounter]).then(()=> {
    if(xcounter < xphrases.length){
      setTimeout(xnext,800)
    } else {
      setTimeout(ynext, 100);
    }
  })
  xcounter = (xcounter + 1);
};
const ynext = () => {
  yfx.setText(yphrases[ycounter]).then(()=> {
    if(ycounter < yphrases.length){
      setTimeout(ynext,800)
    }
  })
  ycounter = (ycounter + 1);
};