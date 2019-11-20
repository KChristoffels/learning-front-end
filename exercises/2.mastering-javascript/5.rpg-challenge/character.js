//Use this script to generate your character


function Person(name, item, race){
    
    this.name = name;
    this.race = race;
    this.item = item;    

    

    switch (true) { //assigns statistics based on race and item carried
        case (race == "Orc"): // orcs get extra health +20 but reduced healing -3
            this.currentHealth = 120;
            this.maxHealth = 120;
            switch (true) { 
                case (item == "Boots"): //base dodge is 12,5 % / boots increase the percentage to 17 %  (allways +1 at the end to have math floor only generate the required possible outcomes)
                    this.minDamage = 3;
                    this.minHealing = 0;
                    this.maxDamage = 20;
                    this.maxHealing = 27;
                    this.dodgeChance = Math.floor((Math.random() * 6) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1); 
                    break;
                case (item == "Staff"): //staff increases healing +3
                    this.minDamage = 3;
                    this.minHealing = 3;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = Math.floor((Math.random() * 8) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == "Sword"): //sword increases damage +3
                    this.minDamage = 6;
                    this.minHealing = 0;
                    this.maxDamage = 23;
                    this.maxHealing = 27;
                    this.dodgeChance = Math.floor((Math.random() * 8) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == "Bow"): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.minDamage = 3;
                    this.minHealing = 0;
                    this.maxDamage = 20;
                    this.maxHealing = 27;
                    this.dodgeChance = Math.floor((Math.random() * 8) + 1);
                    this.critChance = Math.floor((Math.random() * 10) + 1);
                    break;
                default:
            }
            break;
        case (race == "Elf"): // elves get lower health but increased dodge-chance
            this.currentHealth = 90;
            this.maxHealth = 90;
            switch (true) { 
                case (item == "Boots"): //base dodge is 12,5 % / boots increase the percentage to 17 %  (allways +1 at the end to have math floor only generate the required possible outcomes)
                    this.minDamage = 3;
                    this.minHealing = 3;
                    this.maxDamage = 20;
                    this.maxHealing = 30;
                    this.dodgeChance = Math.floor((Math.random() * 4) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1); 
                    break;
                case (item == "Staff"): //staff increases healing +3
                    this.minDamage = 3;
                    this.minHealing = 6;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = Math.floor((Math.random() * 6) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == "Sword"): //sword increases damage +3
                    this.minDamage = 6;
                    this.minHealing = 3;
                    this.maxDamage = 23;
                    this.maxHealing = 30;
                    this.dodgeChance = Math.floor((Math.random() * 6) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == "Bow"): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.minDamage = 3;
                    this.minHealing = 3;
                    this.maxDamage = 20;
                    this.maxHealing = 30;
                    this.dodgeChance = Math.floor((Math.random() * 6) + 1);
                    this.critChance = Math.floor((Math.random() * 10) + 1);
                    break;
                default:
            }
            break;
        case (race == "human"): // humans get higher min-damage and healing but lower max output
            this.currentHealth = 100;
            this.maxHealth = 100;
            switch (true) { 
                case (item == "Boots"): //base dodge is 12,5 % / boots increase the percentage to 17 %  (allways +1 at the end to have math floor only generate the required possible outcomes)
                    this.minDamage = 6;
                    this.minHealing = 6;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = Math.floor((Math.random() * 6) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1); 
                    break;
                case (item == "Staff"): //staff increases healing +3
                    this.minDamage = 6;
                    this.minHealing = 9;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = Math.floor((Math.random() * 8) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == "Sword"): //sword increases damage +3
                    this.minDamage = 9;
                    this.minHealing = 6;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = Math.floor((Math.random() * 8) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == "Bow"): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.minDamage = 6;
                    this.minHealing = 6;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = Math.floor((Math.random() * 8) + 1);
                    this.critChance = Math.floor((Math.random() * 10) + 1);
                    break;
                default:
            }
            break;
        case (race == "vampire"): // vampires have higher healing and 10+ hp, but lower dodge 8 %
            this.currentHealth = 110;
            this.maxHealth = 110;
            switch (true) { 
                case (item == "Boots"): //base dodge is 12,5 % / boots increase the percentage to 17 %  (allways +1 at the end to have math floor only generate the required possible outcomes)
                    this.minDamage = 3;
                    this.minHealing = 6;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = Math.floor((Math.random() * 10) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1); 
                    break;
                case (item == "Staff"): //staff increases healing +3
                    this.minDamage = 3;
                    this.minHealing = 9;
                    this.maxDamage = 20;
                    this.maxHealing = 36;
                    this.dodgeChance = Math.floor((Math.random() * 12) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == "Sword"): //sword increases damage +3
                    this.minDamage = 6;
                    this.minHealing = 6;
                    this.maxDamage = 23;
                    this.maxHealing = 33;
                    this.dodgeChance = Math.floor((Math.random() * 12) + 1);
                    this.critChance = Math.floor((Math.random() * 16) + 1);
                    break;
                case (item == "Bow"): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.minDamage = 3;
                    this.minHealing = 6;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = Math.floor((Math.random() * 12) + 1);
                    this.critChance = Math.floor((Math.random() * 10) + 1);
                    break;
                default:
            }
        default:
            this.currentHealth = 100;
            this.maxHealth = 100;
    }

    this.heal = function(){};

    /*this.damage = function(){
        let doneDamage = Math.round(Math.random() * 20) + 3;
        return doneDamage;                
    };*/

    /*this.totalDamage = this.damage();
    */

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
log.style.height = "200px";
log.style.overflow = "scroll";

combatWindow1.style.display = "none";
combatWindow2.style.display = "none";
log.style.display = "none";    

let create = document.getElementById("create1");
create.addEventListener("click", generatePlayers);

function generatePlayers(event) {
    let player1 = new Person(name1.value, items1.value, race1.value);
    let player2 = new Person(name2.value, items2.value, race2.value);

    let attack1 = document.getElementById("attack1");
    attack1.addEventListener("click", attackOpponent);
    let attack2 = document.getElementById("attack2");
    attack2.addEventListener("click", attackOpponent);

    let heal1 = document.getElementById("heal1");
    heal1.addEventListener("click", healSelf);
    let heal2 = document.getElementById("heal2");
    heal2.addEventListener("click", healSelf);

    let yield1 = document.getElementById("yield1");
    let yield2 = document.getElementById("yield2");

    yield1.addEventListener("click", forfaitGame);
    yield2.addEventListener("click", forfaitGame);

    let whoGoesFirst = Math.floor((Math.random() * 2) + 1);

    console.log(whoGoesFirst);

    if (whoGoesFirst == 1) {
        log.innerHTML += "Player 1 goes first <br/>"
        attack2.style.pointerEvents = "none";
        heal2.style.pointerEvents = "none";
        yield2.style.pointerEvents = "none";
        scrollLog()
    } else {
        log.innerHTML += "Player 2 goes first <br/>"
        attack1.style.pointerEvents = "none";
        heal1.style.pointerEvents = "none";
        yield1.style.pointerEvents = "none";
        scrollLog()
    }
    
    
    let healthBar1 = document.getElementById("health1");
    let healthBar2 = document.getElementById("health2");

    healthBar1.value = player1.currentHealth;
    healthBar1.max = player1.currentHealth;
    healthBar2.value = player2.currentHealth;
    healthBar2.max = player2.currentHealth;
    
    console.log(player1.minDamage);
    /*console.log(player1.damage()); */
    
    combatWindow1.style.display = "";
    combatWindow2.style.display = "";
    log.style.display = "";

    stats1.style.display = "none";
    stats2.style.display = "none";
    create.style.display = "none";

    currentHealth1.innerHTML = "Currenthealth: " + player1.currentHealth;
    maxHealth1.innerHTML = "Maxhealth " + player1.maxHealth;

    currentHealth2.innerHTML = "Currenthealth: " + player2.currentHealth;
    maxHealth2.innerHTML = "Maxhealth " + player2.maxHealth;

    

    function forfaitGame(event) { // gets the id from the clicked yield button and tells who forfeited
        
        var el = document.createElement("div");
        el.setAttribute("style","position:absolute;top:40%;left:38%;background-color:white;");

        if(event.target.id == "yield1") {
            el.innerHTML = "Player 1 has forfaited the game. Resetting";
        } else {
            el.innerHTML = "Player 2 has forfeited the game. Resetting";
        }        
        
        document.body.appendChild(el);
       
        setTimeout(function(){el.parentNode.removeChild(el);},3000);

        setTimeout(resetGame, 4000);
    }

    function scrollLog () {
        log.scrollTop = log.scrollHeight - log.clientHeight;
    }

    function attackOpponent(event) {
        let doneDamage;

        if(event.target.id == "attack1") {

            attack2.style.pointerEvents = "auto";
            heal2.style.pointerEvents = "auto";
            yield2.style.pointerEvents = "auto";

            attack1.style.pointerEvents = "none";
            heal1.style.pointerEvents = "none";
            yield1.style.pointerEvents = "none";

            doneDamage = Math.round(Math.random() * player1.maxDamage) + player1.minDamage;
            player2.currentHealth -= doneDamage;
            healthBar2.value -= doneDamage;

            if (player2.currentHealth <= 0) {
                var el = document.createElement("div");
                el.setAttribute("style","position:absolute;top:40%;left:38%;background-color:white;");

                el.innerHTML = "Player 2 has been defeated"   
                
                document.body.appendChild(el);
            
                setTimeout(function(){el.parentNode.removeChild(el);},3000);

                setTimeout(resetGame, 4000);
            }

            currentHealth2.innerHTML = "Currenthealth: " + player2.currentHealth;
            let logMessage = `Player 1 attacked player 2 for ${doneDamage} damage <br/>`
            log.innerHTML += logMessage;
            scrollLog()   
        } else {

            attack2.style.pointerEvents = "none";
            heal2.style.pointerEvents = "none";
            yield2.style.pointerEvents = "none";

            attack1.style.pointerEvents = "auto";
            heal1.style.pointerEvents = "auto";
            yield1.style.pointerEvents = "auto";

            doneDamage = Math.round(Math.random() * player2.maxDamage) + player2.minDamage;
            player1.currentHealth -= doneDamage;
            healthBar1.value -= doneDamage;

            if (player1.currentHealth <= 0) {
                var el = document.createElement("div");
                el.setAttribute("style","position:absolute;top:40%;left:38%;background-color:white;");

                el.innerHTML = "Player 1 has been defeated"   
                
                document.body.appendChild(el);
            
                setTimeout(function(){el.parentNode.removeChild(el);},3000);

                setTimeout(resetGame, 4000);
            }

            currentHealth1.innerHTML = "Currenthealth: " + player1.currentHealth;
            let logMessage = `Player 2 attacked player 1 for ${doneDamage} damage <br/>`
            log.innerHTML += logMessage;
            scrollLog()               
        }

        console.log(doneDamage);
    }

    

    function healSelf(event) {
        let healingDone;

        if(event.target.id == "heal1") {
            healingDone = Math.round(Math.random() * player1.maxHealing) + player1.minHealing;
            player1.currentHealth += healingDone;
            healthBar1.value += healingDone;
            currentHealth1.innerHTML = "Currenthealth: " + player1.currentHealth;
            let logMessage = `Player 1 healed himself for ${healingDone} hitpoints <br/>`
            log.innerHTML += logMessage;
            scrollLog()  

        } else {
            healingDone = Math.round(Math.random() * player2.maxHealing) + player2.minHealing;
            player2.currentHealth += healingDone;
            healthBar2.value += healingDone;
            currentHealth2.innerHTML = "Currenthealth: " + player2.currentHealth;
            let logMessage = `Player 2 healed himself for ${healingDone} hitpoints <br/>`
            log.innerHTML += logMessage;
            scrollLog()   
        }
        
    }

}

function resetGame () {
    combatWindow1.style.display = "none";
    combatWindow2.style.display = "none";
    log.style.display = "none";
    
    log.innerHTML = "";

    stats1.style.display = "";
    stats2.style.display = "";
    create.style.display = "";
}



