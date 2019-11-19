//Use this script to generate your character


function Person(name, item, race){
    this.name = name;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}
let stats1 = document.getElementById("stats1");
let stats2 = document.getElementById("stats2");

let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");

let items1 = document.getElementById("items1");
let items2 = document.getElementById("items2");

let race1 = document.getElementById("race1");
let race2 = document.getElementById("race2");

let healthData1 = document.getElementById("healthData1");
let healthData2 = document.getElementById("healthData2");

healthData1.style.display = "none";
healthData2.style.display = "none";    

let create = document.getElementById("create1");
create.addEventListener("click", generatePlayers);

function generatePlayers(event) {
    let player1 = new Person(name1.value, items1.value, race1.value);
    let player2 = new Person(name2.value, items2.value, race2.value);  
    
    healthData1.style.display = "";
    healthData2.style.display = "";

    stats1.style.display = "none";
    stats2.style.display = "none";
}



