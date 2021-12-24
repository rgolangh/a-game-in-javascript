
class Game {
    constructor(limit) {
        this.num = Math.ceil(Math.random() * limit);
        let s = document.getElementById("students");
        for (let i=0;i<students.length;i++) {
            let b = document.createElement("button");
            b.value=students[i];
            b.innerText=students[i];
            b.onclick=() => document.getElementById("name").value=students[i];
            s.appendChild(b);
        }
        for (let i=0;i<limit;i++) {
            let b = document.createElement("button");
            b.value=i;
            b.innerText=i;
            b.onclick=() => document.getElementById("ניחוש").value=i;
            document.getElementById("numbers").appendChild(b);
        }
        document.getElementById("limit").innerText = limit;
	}

    guess() {
        const name = document.getElementById("name").value;
        const guess = document.getElementById("ניחוש").value;
        let win = `💣`;
        if (guess == this.num) {
            win = `🐕 🎉🎉`;
            this.gameOver(name);
        } 
        document.getElementById("guesses").appendChild(document.createTextNode(`${name}: ${guess} ${win}`));
        document.getElementById("guesses").appendChild(document.createElement("br"));

        let lowOrHi = "";
        if (guess < this.num) {
            lowOrHi = "⏬";
        }
        if (guess > this.num) {
            lowOrHi = "⏫";
        }

        document.getElementById("lowOrHi").innerText=lowOrHi;
	}

    gameOver(name) {
        const e = document.getElementById("animated");
        e.appendChild(document.createTextNode(`השחקן ${name} 🐕 🎉🎉`));
        for (let i=1;i<50;i++) {
            const s = document.createElement("span");
            s.innerText="🐕 🎉🎉";
            setTimeout(() => e.appendChild(s), 500 * Math.sqrt(i));
        }
        //window.requestAnimationFrame(new Animated(e).animate);
        
    }

    showNumber() {
        alert(this.num);
    }
}

const students = [
    "יובל",
    "לירי",
    "רומי",
    "כנרת",
    "נדב",
    "עידן",
    "עילאי",
    "אור",
    "עמית",
    "אלה מועלם",
    "אלה מורג",
    "מיכל המורה",
    "איתמר",
    "אורי ק",
    "גיא",
    "יונתן",
    "בנט",
    "אמילי",
    "עוז",
    "ניב",
    "אור",
    "Tim Berners Lee",
    "Alan Turing",



].sort();

class Animated {
    constructor(element) {
        this.element = element;
        this.start = null;
        this.elapsed = null;
        this.previousTimestamp = null;
    }
    
    animate(timestamp) {
        if (this.start === null) {
            this.start = timestamp;
        }
        this.elpased = timestamp - this.start;
        
        if (this.element.style.top !== 100) {
            const count = Math.min(0.1 * this.elapsed, 100)
            this.element.style.transform = `translateY(${count}px)`; 
            window.requestAnimationFrame(this.animate); 
        }
    }
}
