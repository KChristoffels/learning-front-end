//Use this script to generate your character
let portrait1 = document.getElementById("portrait1");
let portrait2 = document.getElementById("portrait2");

let comeGetSome = new Audio('resources/Come get some.mp3');
let muchBetter = new Audio('resources/Ahh much better! by Duke Nukem.mp3');
let thisHurts = new Audio('resources/dukeNukemHurt.mp3');
let gameOver = new Audio('resources/gameOver.mp3');
let chicken = new Audio('resources/chicken.mp3');
let dodge = new Audio('resources/dodge.mp3');
let criticalH = new Audio('resources/MLG Gun Shot Sound Effect.mp3');

let playerContainer = [];


function Person(name, item, race){
    
    this.name = name;
    this.race = race;
    this.item = item; 
    
    this.currentHealth = 100;
    this.maxHealth = 100;
    
    this.minDamage = 3;
    this.minHealing = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;
    this.dodgeChance = 8;
    this.critChance = 16;
    
    

    switch (true) { //assigns statistics based on race and item carried
        case (race == `orc`): // orcs get extra health +20 but reduced healing -3
            this.currentHealth = 120;
            this.maxHealth = 120;
            this.minHealing = 0;
            this.maxHealing = 27;           
            
            switch (true) { 
                case (item == `boots`): //base dodge is 12,5 % / boots increase the percentage to 17 %  (allways +1 at the end to have math floor only generate the required possible outcomes)
                    this.dodgeChance = 6;   
                    break;
                case (item == `staff`): //staff increases healing +3
                    this.minHealing = 3;
                    this.maxHealing = 33;
                    break;
                case (item == `sword`): //sword increases damage +3
                    this.minDamage = 6;
                    this.maxDamage = 23;
                    break;
                case (item == `bow`): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.critChance = 10;
                    break;
                default:
            }
            break;
        case (race == `elf`): // elves get lower health but increased dodge-chance
            this.currentHealth = 90;
            this.maxHealth = 90;
            this.dodgeChance = 6;
            
            switch (true) { 
                case (item == `boots`):                     
                    this.dodgeChance = 4;                    
                    break;
                case (item == `staff`):                    
                    this.minHealing = 6;                   
                    this.maxHealing = 33;
                    break;
                case (item == `sword`): //sword increases damage +3
                    this.minDamage = 6;
                    this.maxDamage = 23;
                    break;
                case (item == `bow`): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.critChance = 10;
                    break;
                default:
            }
            break;
        case (race == `human`):
            this.minDamage = 6;
            this.maxDamage = 17;
            this.minHealing = 6;
            this.maxHealing = 27;
            switch (true) { 
                case (item == `boots`):
                    this.dodgeChance = 6;
                    break;
                case (item == `staff`): //staff increases healing +3
                    this.minHealing = 9;
                    this.maxHealing = 30;
                    break;
                case (item == `sword`): //sword increases damage +3
                    this.minDamage = 9;
                    this.maxDamage = 20;
                    break;
                case (item == `bow`): // bow increases critical hit chance
                    
                    this.critChance = 10;
                    break;
                default:
            }
            break;
        case (race == `vampire`): // vampires have higher healing and 10+ hp, but lower dodge 8 %
            this.currentHealth = 110;
            this.maxHealth = 110;
            this.minHealing = 6;
            this.maxHealing = 33;
           
            switch (true) { 
                case (item == `boots`): //base dodge is 12,5 % / boots increase the percentage to 17 %  (allways +1 at the end to have math floor only generate the required possible outcomes)
                    this.dodgeChance = 10;
                    break;
                case (item == `staff`): //staff increases healing +3
                    this.minHealing = 9;                   
                    this.maxHealing = 36;
                    break;
                case (item == `sword`): //sword increases damage +3
                    this.minDamage = 6;
                    this.maxDamage = 23;
                    break;
                case (item == `bow`): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.critChance = 10;
                    break;
                default:
            }
    }

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}


let stats1 = document.getElementById(`stats1`);
let stats2 = document.getElementById(`stats2`);

let name1 = document.getElementById(`name1`);
let name2 = document.getElementById(`name2`);

let items1 = document.getElementById(`items1`);
let items2 = document.getElementById(`items2`);

let race1 = document.getElementById(`race1`);
let race2 = document.getElementById(`race2`);

let combatWindow1 = document.getElementById(`combatWindow1`);
let combatWindow2 = document.getElementById(`combatWindow2`);
let healthData1 = document.getElementById(`healthData1`);
let healthData2 = document.getElementById(`healthData2`);
let moves1 = document.getElementById(`moves1`);
let moves2 = document.getElementById(`moves2`);
let currentHealth1 = document.getElementById(`currentHealth1`);
let currentHealth2 = document.getElementById(`currentHealth2`);
let maxHealth1 = document.getElementById(`maxHealth1`);
let maxHealth2 = document.getElementById(`maxHealth2`);

let log = document.getElementById(`log`);
log.style.height = `200px`;
log.style.overflow = `scroll`;

combatWindow1.style.display = `none`;
combatWindow2.style.display = `none`;
log.style.display = `none`;    

let create = document.getElementById(`create1`);
create.addEventListener(`click`, generatePlayers);

function generatePlayers(event) {

    if ((name1.value == "") || (name2.value == "")) {
        var el = document.createElement(`div`);
        el.setAttribute(`style`,`position:absolute;top:12%;left:30%;background-color:white;font-size:30px;color:black`);
        el.innerHTML = "Please give player 1 and 2 a name";

        document.body.appendChild(el);
       
        setTimeout(function(){el.parentNode.removeChild(el);},3000);

    } else { 
        
    comeGetSome.play();

    let player1 = new Person(name1.value, items1.value, race1.value);
    let player2 = new Person(name2.value, items2.value, race2.value);

    playerContainer.push(player1);
    playerContainer.push(player2);

    console.log(playerContainer);

    let playerHeader1 = document.getElementById(`playerHeader1`);
    let playerHeader2 = document.getElementById(`playerHeader2`);

    let raceDisplay1 = document.getElementById("raceDisplay1");
    let raceDisplay2 = document.getElementById("raceDisplay2");
    let itemDisplay1 = document.getElementById("itemDisplay1");
    let itemDisplay2 = document.getElementById("itemDisplay2");

    raceDisplay1.innerHTML = `Race: ${player1.race}`;
    raceDisplay2.innerHTML = `Race: ${player2.race}`;
    itemDisplay1.innerHTML = `Item: ${player1.item}`;
    itemDisplay2.innerHTML = `Item: ${player2.item}`;

    playerHeader1.innerHTML = player1.name;
    playerHeader2.innerHTML = player2.name;

    let attack1 = document.getElementById(`attack1`);
    attack1.addEventListener(`click`, attackOpponent);
    let attack2 = document.getElementById(`attack2`);
    attack2.addEventListener(`click`, attackOpponent);

    let heal1 = document.getElementById(`heal1`);
    heal1.addEventListener(`click`, healSelf);
    let heal2 = document.getElementById(`heal2`);
    heal2.addEventListener(`click`, healSelf);

    let yield1 = document.getElementById(`yield1`);
    let yield2 = document.getElementById(`yield2`);

    yield1.addEventListener(`click`, forfaitGame);
    yield2.addEventListener(`click`, forfaitGame);
    
    switch (player1.race) {
        case "human":
            portrait1.src = "resources/tumblr_o0efcrFlv81utp969o1_r1_500.png";
            break;
        case "orc":
            portrait1.src = "resources/h2kpe8vpnxj4kfnxctc1_400x400.gif.png";
            break;
        case "elf":
            portrait1.src = "resources/elrond_dealwithit.jpg";
            break;
        case "vampire":
            portrait1.src = "resources/niccagevampireskissteeth.jpg";
            break;
        default:
    }
       
    switch (player2.race) {
        case "human":
            portrait2.src = "resources/images.jpeg";
            break;
        case "orc":
            portrait2.src = "resources/dd6pfz0-f33e7bfc-2b19-44e0-85fc-3a65d68fb7b3.png";
            break;
        case "elf":
            portrait2.src = "resources/elrond_dealwithit.jpg";
            break;
        case "vampire":
            portrait2.src = "resources/32500246-funny-vampire-in-minimalist-style-with-pointy-ears-sharp-fangs-and-red-cape-while-smiling-and-showin.jpg";
            break;
        default:
    }    

    let whoGoesFirst = Math.floor((Math.random() * 2) + 1);

    if (whoGoesFirst == 1) { // determines who goes first depending on a random number generator (either 1 or 2)
        log.innerHTML += `${player1.name} goes first <br/>`
        attack2.style.pointerEvents = `none`;
        heal2.style.pointerEvents = `none`;
        yield2.style.pointerEvents = `none`;
        scrollLog()
    } else {
        log.innerHTML += `${player2.name} goes first <br/>`
        attack1.style.pointerEvents = `none`;
        heal1.style.pointerEvents = `none`;
        yield1.style.pointerEvents = `none`;
        scrollLog()
    }
    
    let healthBar1 = document.getElementById(`health1`);
    let healthBar2 = document.getElementById(`health2`);

    healthBar1.value = player1.currentHealth;
    healthBar1.max = player1.currentHealth;
    healthBar2.value = player2.currentHealth;
    healthBar2.max = player2.currentHealth;
    
    combatWindow1.style.display = `flex`;
    combatWindow1.style.border = "1px solid black";
    combatWindow2.style.display = `flex`;
    log.style.display = ``;

    stats1.style.display = `none`;
    stats2.style.display = `none`;
    create.style.display = `none`;

    currentHealth1.innerHTML = `Currenthealth: ` + player1.currentHealth;
    maxHealth1.innerHTML = `Maxhealth ` + player1.maxHealth;

    currentHealth2.innerHTML = `Currenthealth: ` + player2.currentHealth;
    maxHealth2.innerHTML = `Maxhealth ` + player2.maxHealth;

    function forfaitGame(event) { // gets the id from the clicked yield button and tells who forfeited
        
        var el = document.createElement(`div`);
        el.setAttribute(`style`,`position:absolute;top:12%;left:30%;background-color:white;font-size:30px;color:black`);
        chicken.play()
        if(event.target.id == `yield1`) {
            el.innerHTML = `${playerContainer[0].name} has forfeited the game. Resetting`;
            portrait1.src = "resources/Dan_Kennedy_Chicken.jpg";
            Object.getOwnPropertyNames(player1).forEach(function (prop) {
                delete player1[prop];
            });

            Object.getOwnPropertyNames(player2).forEach(function (prop) {
                delete player2[prop];
            });
            document.body.appendChild(el);
            playerContainer.length = 0;
            
        } else {
            el.innerHTML = `${playerContainer[1].name} has forfeited the game. Resetting`;
            portrait2.src = "resources/Dan_Kennedy_Chicken.jpg";
            Object.getOwnPropertyNames(player1).forEach(function (prop) {
                delete player1[prop];
            });

            Object.getOwnPropertyNames(player2).forEach(function (prop) {
                delete player2[prop];
            });
            document.body.appendChild(el);
            playerContainer.length = 0;            
        }

        setTimeout(function(){el.parentNode.removeChild(el);},3000);

        setTimeout(resetGame, 4000);

        setTimeout(function(){portrait1.src = ""; portrait2.src = "";}, 4100);
        
    }

    function scrollLog () {
        log.scrollTop = log.scrollHeight - log.clientHeight; // assures the log will scroll down to the new content
    }

    function attackOpponent(event) {
        let doneDamage;

        let currentPlayer;
        let otherPlayer;
        let otherHealthbar;
        let otherHealth;        

        if (event.target.id == `attack1`) {
            currentPlayer = player1;
            otherPlayer = player2;
            otherHealthbar = healthBar2;
            otherHealth = currentHealth2;            

            attack2.style.pointerEvents = `auto`;
            heal2.style.pointerEvents = `auto`;
            yield2.style.pointerEvents = `auto`;

            attack1.style.pointerEvents = `none`;
            heal1.style.pointerEvents = `none`;
            yield1.style.pointerEvents = `none`;
        } else {
            currentPlayer = player2;
            otherPlayer = player1;
            otherHealthbar = healthBar1;
            otherHealth = currentHealth1;

            attack2.style.pointerEvents = `none`;
            heal2.style.pointerEvents = `none`;
            yield2.style.pointerEvents = `none`;

            attack1.style.pointerEvents = `auto`;
            heal1.style.pointerEvents = `auto`;
            yield1.style.pointerEvents = `auto`;
        }

        doneDamage = Math.round(Math.random() * (currentPlayer.maxDamage - currentPlayer.minDamage)) + currentPlayer.minDamage;
                                  
        if ((Math.floor((Math.random() * otherPlayer.dodgeChance) + 1)) == 2) {
        log.innerHTML += `${otherPlayer.name} has dodged your attack!<br/>`;
        scrollLog()
        dodge.play()
        console.log("test")
        } else {    
            hitTarget()
            console.log("test1");
        }

        function didYouCrit () {                
                    if (Math.floor((Math.random() * currentPlayer.critChance) + 1) == 5) {
                        return true;                            
                    } else {
                        return false;
                    }
        }
            

        function hitTarget () {
            
            if (didYouCrit() == true) { // multiples damage by 1,25 if the player scored a critical hit
                criticalH.play()
                doneDamage = Math.round(doneDamage * 2);
                
                otherPlayer.currentHealth -= doneDamage;
                otherHealthbar.value -= doneDamage;
                otherHealth.innerHTML = `Current health: ` + otherPlayer.currentHealth;

                if (otherPlayer.currentHealth <= 0) {

                    someoneDied()  

                } else {

                    let logMessage = `A critical hit!  <br/> ${currentPlayer.name} attacked ${otherPlayer.name} for ${doneDamage} damage <br/>`
                    log.innerHTML += logMessage;
                    scrollLog()  
                }
                
            } else {
                    
                    otherPlayer.currentHealth -= doneDamage;
                    otherHealthbar.value -= doneDamage;                    

                if (otherPlayer.currentHealth <= 0) {
                    otherHealth.innerHTML = `Current health: 0`;
                    someoneDied()  

                } else { 
                    thisHurts.play()                   
                    otherHealth.innerHTML = `Current health: ` + otherPlayer.currentHealth;
                    let logMessage = `${currentPlayer.name} attacked ${otherPlayer.name} for ${doneDamage} damage <br/>`
                    log.innerHTML += logMessage;
                    scrollLog() 
                }
            }
        }

        function someoneDied() {

            otherHealth = `Currenthealth: 0`;
            otherHealthbar.value = 0;
            gameOver.play()

            otherPlayer.currentHealth = otherPlayer.maxHealth;
            var el = document.createElement(`div`);
            el.setAttribute(`style`,`position:absolute;top:12%;left:30%;background-color:white;font-size:30px;color:black`);

            el.innerHTML = `${otherPlayer.name} has been defeated`;
            
            if (currentPlayer == player1) {
                portrait1.src = "resources/trolldad.png";
                portrait2.src = "resources/71bQXvSriRL._SY355_.png.jpeg";
            } else {
                portrait2.src = "resources/trolldad.png";
                portrait1.src = "resources/71bQXvSriRL._SY355_.png.jpeg";
                
            }
            
            
            Object.getOwnPropertyNames(player1).forEach(function (prop) {
                delete player1[prop];
            });

            Object.getOwnPropertyNames(player2).forEach(function (prop) {
                delete player2[prop];
            });
            
            document.body.appendChild(el);
        
            setTimeout(function(){el.parentNode.removeChild(el);},3000);                

            setTimeout(resetGame, 4000);

            setTimeout(function () {portrait1.src = ""; portrait2.src = "";}, 4100);
        }
    }

    function healSelf(event) {
        muchBetter.play()
        let healingDone;

        let currentPlayer;
        let currentHealthbar;            
        let currentHealth;

        if (event.target.id == `heal1`) {
            currentPlayer = player1;
            currentHealthbar = healthBar1;            
            currentHealth = currentHealth1;

            attack2.style.pointerEvents = `auto`;
            heal2.style.pointerEvents = `auto`;
            yield2.style.pointerEvents = `auto`;

            attack1.style.pointerEvents = `none`;
            heal1.style.pointerEvents = `none`;
            yield1.style.pointerEvents = `none`;

        } else {

            currentPlayer = player2;
            currentHealthbar = healthBar2;            
            currentHealth = currentHealth2;

            attack2.style.pointerEvents = `none`;
            heal2.style.pointerEvents = `none`;
            yield2.style.pointerEvents = `none`;

            attack1.style.pointerEvents = `auto`;
            heal1.style.pointerEvents = `auto`;
            yield1.style.pointerEvents = `auto`;
        }

        healingDone = Math.round(Math.random() * (currentPlayer.maxHealing - currentPlayer.minHealing)) + currentPlayer.minHealing;
        currentPlayer.currentHealth += healingDone;            
        currentHealthbar.value += healingDone;
        
        if (currentPlayer.currentHealth > currentPlayer.maxHealth) {
            currentPlayer.currentHealth = currentPlayer.maxHealth;
            currentHealth.innerHTML = `Currenthealth: ` + currentPlayer.currentHealth;
            currentHealthbar.value = currentPlayer.currentHealth;
            let logMessage = `${currentPlayer.name} healed himself for ${healingDone} hitpoints <br/>`
            log.innerHTML += logMessage;
            scrollLog()
        } else {
            currentHealth.innerHTML = `Currenthealth: ` + currentPlayer.currentHealth;
            currentHealthbar.value = currentPlayer.currentHealth;
            let logMessage = `${currentPlayer.name} healed himself for ${healingDone} hitpoints <br/>`
            log.innerHTML += logMessage;
            scrollLog()
        }
        
    }

    
}

function resetGame () {
    combatWindow1.style.display = `none`;
    combatWindow2.style.display = `none`;
    log.style.display = `none`;
    
    log.innerHTML = ``;

    stats1.style.display = ``;
    stats2.style.display = ``;
    create.style.display = ``;

    currentHealth1.innerHTML = `Currenthealth: `;
    currentHealth2.innerHTML = `Currenthealth `;

    attack1.style.pointerEvents = ``;
    heal1.style.pointerEvents = ``;
    yield1.style.pointerEvents = ``;

    attack2.style.pointerEvents = ``;
    heal2.style.pointerEvents = ``;
    yield2.style.pointerEvents = ``;

    playerHeader1.innerHTML = "player 1";
    playerHeader2.innerHTML = "player 2";

    
}


}
