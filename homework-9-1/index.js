'use strict';

let Tamag;

class Tamagotchi {

  constructor (level) {
    this.level = level;
  }

  feed;
  wash;
  happiness;
  health;
  socialization;
  money;
  counter;
  timer = 0;
  maxValue = 100;
  TimerCounter = setInterval(() => {this.timer += 1}, 1000);

  leaveStatus() {
    if (this.feed < -1 || this.wash < -1 || this.happiness < -1 || this.health < -2 || this.socialization < -1 || this.money < -1 ){
      this.gameOver ();
      Tamag = undefined;
      clearInterval(this.counter);
      clearInterval(this.TimerCounter);
      clearInterval(this.UpdateCounter);
      this.feed = 0;
      this.wash = 0;
      this.happiness = 0;
      this.health = 0;
      this.socialization = 0;
      this.money = 0;
      this.updateStats();
      document.getElementById('gameOverTime_js').innerText = `${this.timer} seconds`;
    }
  }

  static getRandNum (min, max) {
    return Number(Math.round(Math.random() * max + min));
  }

  initStats () {
    (this.level === 'hard' || this.level === 'pro') ? this.maxPoints = 40 : this.maxPoints = 90;

    this.UpdateCounter = setInterval(() => {
      let random_int = Tamagotchi.getRandNum(1,7);
      (random_int === 1) ? this.feed += Tamagotchi.getRandNum(10,50) :
      (random_int === 2) ? this.wash += Tamagotchi.getRandNum(10,50) :
      (random_int === 3) ? this.happiness += Tamagotchi.getRandNum(10,50) :
      (random_int === 4) ? this.health += Tamagotchi.getRandNum(10,50) :
      (random_int === 5) ? this.socialization += Tamagotchi.getRandNum(10,50) :
        this.money += Tamagotchi.getRandNum(10,50) ;
      this.updateStats();
    }, 20000);

    this.feed = Tamagotchi.getRandNum(20,this.maxPoints);
    this.wash = Tamagotchi.getRandNum(20,this.maxPoints);
    this.happiness = Tamagotchi.getRandNum(20,this.maxPoints);
    this.health = Tamagotchi.getRandNum(20,this.maxPoints);
    this.socialization = Tamagotchi.getRandNum(20,this.maxPoints);
    this.money = Tamagotchi.getRandNum(20,this.maxPoints);

    switch (this.level) {
      case 'easy':
        this.interval = setInterval(() => {
          this.feed -= 3;
          this.wash -= 3;
          this.happiness -= 3;
          this.health -= 3;
          this.socialization -= 3;
          this.money -= 3;
          this.leaveStatus();
          this.updateStats();
        }, 2500);
        break;

      case 'hard':
        this.interval = setInterval(() => {
          this.feed -= 5;
          this.wash -= 5;
          this.happiness -= 5;
          this.health -= 5;
          this.socialization -= 5;
          this.money -= 5;
          this.leaveStatus();
          this.updateStats();
        }, 1500);
        break;

      case 'pro':
        this.interval = setInterval(() => {
          this.feed -= 7;
          this.wash -= 7;
          this.happiness -= 7;
          this.health -= 7;
          this.socialization -= 7;
          this.money -= 7;
          this.leaveStatus();
          this.updateStats();
        }, 500);
        break;
    }

    this.updateStats();
  }

  updateStats(){
    document.getElementsByClassName('game-start__meter--food')[0].innerHTML = this.feed;
    document.getElementById('feedMeter').value = this.feed;
    document.getElementsByClassName('game-start__meter--wash')[0].innerHTML = this.wash;
    document.getElementById('washMeter').value = `${this.wash}`;
    document.getElementsByClassName('game-start__meter--run')[0].innerHTML = this.happiness;
    document.getElementById('runMeter').value = `${this.happiness}`;
    document.getElementsByClassName('game-start__meter--health')[0].innerHTML = this.health;
    document.getElementById('healthMeter').value = this.health;
    document.getElementsByClassName('game-start__meter--social')[0].innerHTML = this.socialization;
    document.getElementById('socialMeter').value = this.socialization;
    document.getElementsByClassName('game-start__meter--money')[0].innerHTML = this.money;
    document.getElementById('moneyMeter').value = this.money;
  }

  feedin() {
    this.feed <= 70 ? this.feed += 30: this.feed = this.maxValue;
    this.wash -= 20;
    this.updateStats();
    this.leaveStatus();
    document.getElementsByClassName('feed')[0].style.display = 'inline';
    document.getElementsByClassName('feed')[1].style.display = 'inline';
    setTimeout(function () {
      document.getElementsByClassName('feed')[0].style.display = 'none';
      document.getElementsByClassName('feed')[1].style.display = 'none';
    }, 1000)
  }

  washes() {
    this.wash <= 60 ? this.wash += 40: this.wash = this.maxValue;
    this.happiness -= 20;
    this.updateStats();
    this.leaveStatus();
    document.getElementsByClassName('wash')[0].style.display = 'inline';
    document.getElementsByClassName('wash')[1].style.display = 'inline';
    setTimeout(function () {
      document.getElementsByClassName('wash')[0].style.display = 'none';
      document.getElementsByClassName('wash')[1].style.display = 'none';
    }, 1000)
  }

  runs() {
    this.happiness <= 85 ? this.happiness += 15: this.happiness = this.maxValue;
    this.feed -= 10;
    this.updateStats();
    this.leaveStatus();
    document.getElementsByClassName('happiness')[0].style.display = 'inline';
    document.getElementsByClassName('happiness')[1].style.display = 'inline';
    setTimeout(function () {
      document.getElementsByClassName('happiness')[0].style.display = 'none';
      document.getElementsByClassName('happiness')[1].style.display = 'none';
    }, 1000)
  }

  medicine() {
    this.health <= 70 ? this.health += 30: this.health = this.maxValue + 1;
    this.money -= 20;
    this.updateStats();
    this.leaveStatus();
    document.getElementsByClassName('medicine')[0].style.display = 'inline';
    document.getElementsByClassName('medicine')[1].style.display = 'inline';
    setTimeout(function () {
      document.getElementsByClassName('medicine')[0].style.display = 'none';
      document.getElementsByClassName('medicine')[1].style.display = 'none';
    }, 1000)
  }

  bar() {
    this.socialization <= 60 ? this.socialization += 40: this.socialization = this.maxValue;
    this.feed <= 90 ? this.feed += 10: this.feed = this.maxValue;
    this.money -= 20;
    this.health -= 10;
    this.updateStats();
    this.leaveStatus();
    document.getElementsByClassName('bar')[0].style.display = 'inline';
    document.getElementsByClassName('bar')[1].style.display = 'inline';
    document.getElementsByClassName('bar')[2].style.display = 'inline';
    document.getElementsByClassName('bar')[3].style.display = 'inline';
    setTimeout(function () {
      document.getElementsByClassName('bar')[0].style.display = 'none';
      document.getElementsByClassName('bar')[1].style.display = 'none';
      document.getElementsByClassName('bar')[2].style.display = 'none';
      document.getElementsByClassName('bar')[3].style.display = 'none';
    }, 1000)
  }

  work() {
    this.money <= 50 ? this.money += 50: this.money = this.maxValue;
    this.feed -= 10;
    this.health -= 10;
    this.socialization -= 20;
    this.updateStats();
    this.leaveStatus();
    document.getElementsByClassName('work')[0].style.display = 'inline';
    document.getElementsByClassName('work')[1].style.display = 'inline';
    document.getElementsByClassName('work')[2].style.display = 'inline';
    document.getElementsByClassName('work')[3].style.display = 'inline';
    setTimeout(function () {
      document.getElementsByClassName('work')[0].style.display = 'none';
      document.getElementsByClassName('work')[1].style.display = 'none';
      document.getElementsByClassName('work')[2].style.display = 'none';
      document.getElementsByClassName('work')[3].style.display = 'none';
    }, 1000)
  }

  shop() {
    this.feed <= 80 ? this.feed += 20: this.feed = this.maxValue;
    this.money -= 20;
    this.updateStats();
    this.leaveStatus();
    document.getElementsByClassName('shop')[0].style.display = 'inline';
    document.getElementsByClassName('shop')[1].style.display = 'inline';
    setTimeout(function () {
      document.getElementsByClassName('shop')[0].style.display = 'none';
      document.getElementsByClassName('shop')[1].style.display = 'none';
    }, 1000)
  }

  business() {
    this.money = 100;
    this.happiness = 100;
    this.health -= 100;
    this.socialization -= 20;
    this.updateStats();
    this.leaveStatus();
    document.getElementsByClassName('business')[0].style.display = 'inline';
    document.getElementsByClassName('business')[1].style.display = 'inline';
    document.getElementsByClassName('business')[2].style.display = 'inline';
    document.getElementsByClassName('business')[3].style.display = 'inline';
    setTimeout(function () {
      document.getElementsByClassName('business')[0].style.display = 'none';
      document.getElementsByClassName('business')[1].style.display = 'none';
      document.getElementsByClassName('business')[2].style.display = 'none';
      document.getElementsByClassName('business')[3].style.display = 'none';
    }, 1000)
  }

  killer() {
    this.health -= 1000;
  }

  gameOver() {
    document.getElementById('gameStart_js').style.display = 'none';
    document.getElementById('gameOver_js').style.display = 'block';
    document.getElementById('scream_js').play();
  }

}

function startGame (level) {
  Tamag = new Tamagotchi(level)
}

function closeWindow() {
    window.close();
  }

function restart () {
  location.reload()
}
