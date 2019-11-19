//Use this script to generate your character


function Person(name, item, race){
    
    this.name = name;
    this.race = race;
    this.item = item;    

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    switch (true) {
        case (race == "Orc"):
            this.currenthealth = 120;
            this.maxHealth = 120;
            break;
        case (race == "Elf"):
            this.currenthealth = 90;
            this.maxHealth = 90;
            break;
        default:
            this.currenthealth = 100;
            this.maxHealth = 100;
    }

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

let combatWindow1 = document.getElementById("combatWindow1");
let combatWindow2 = document.getElementById("combatWindow2");
let healthData1 = document.getElementById("healthData1");
let healthData2 = document.getElementById("healthData2");
let moves1 = document.getElementById("moves1");
let moves2 = document.getElementById("moves2");
let currentHealth1 = document.getElementById("currentHealth1");
let currentHealth2 = document.getElementById("currentHealth2");
let maxHealth1 = document.getElementById("maxHealth1");
let maxHealth2 = document.getElementById("maxHealth2");

let log = document.getElementById("log");

combatWindow1.style.display = "none";
combatWindow2.style.display = "none";
log.style.display = "none";    

let create = document.getElementById("create1");
create.addEventListener("click", generatePlayers);

function generatePlayers(event) {
    let player1 = new Person(name1.value, items1.value, race1.value);
    let player2 = new Person(name2.value, items2.value, race2.value);  
    
    combatWindow1.style.display = "";
    combatWindow2.style.display = "";
    log.style.display = "";

    stats1.style.display = "none";
    stats2.style.display = "none";
    create.style.display = "none";

    currentHealth1.innerHTML = "Currenthealth: " + player1.currenthealth;
    maxHealth1.innerHTML = "Maxhealth " + player1.maxHealth;

    currentHealth2.innerHTML = "Currenthealth: " + player2.currenthealth;
    maxHealth2.innerHTML = "Maxhealth " + player2.maxHealth;


}



