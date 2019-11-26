//Use this script to generate your character
let portrait1 = document.getElementById("portrait1");
let portrait2 = document.getElementById("portrait2");

function Person(name, item, race){
    
    this.name = name;
    this.race = race;
    this.item = item;   
    

    switch (true) { //assigns statistics based on race and item carried
        case (race == `orc`): // orcs get extra health +20 but reduced healing -3
            this.currentHealth = 120;
            this.maxHealth = 120;
           
            
            switch (true) { 
                case (item == `boots`): //base dodge is 12,5 % / boots increase the percentage to 17 %  (allways +1 at the end to have math floor only generate the required possible outcomes)
                    this.minDamage = 3;
                    this.minHealing = 0;
                    this.maxDamage = 20;
                    this.maxHealing = 27;
                    this.dodgeChance = 6;
                    this.critChance = 16; 
                    break;
                case (item == `staff`): //staff increases healing +3
                    this.minDamage = 3;
                    this.minHealing = 3;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = 8;
                    this.critChance = 16;
                    break;
                case (item == `sword`): //sword increases damage +3
                    this.minDamage = 6;
                    this.minHealing = 0;
                    this.maxDamage = 23;
                    this.maxHealing = 27;
                    this.dodgeChance = 8;
                    this.critChance = 16;
                    break;
                case (item == `bow`): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.minDamage = 3;
                    this.minHealing = 0;
                    this.maxDamage = 20;
                    this.maxHealing = 27;
                    this.dodgeChance = 8;
                    this.critChance = 10;
                    break;
                default:
            }
            break;
        case (race == `elf`): // elves get lower health but increased dodge-chance
            this.currentHealth = 90;
            this.maxHealth = 90;
            
            switch (true) { 
                case (item == `boots`): //base dodge is 12,5 % / boots increase the percentage to 17 %  (allways +1 at the end to have math floor only generate the required possible outcomes)
                    this.minDamage = 3;
                    this.minHealing = 3;
                    this.maxDamage = 20;
                    this.maxHealing = 30;
                    this.dodgeChance = 4;
                    this.critChance = 16; 
                    break;
                case (item == `staff`): //staff increases healing +3
                    this.minDamage = 3;
                    this.minHealing = 6;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = 6;
                    this.critChance = 16;
                    break;
                case (item == `sword`): //sword increases damage +3
                    this.minDamage = 6;
                    this.minHealing = 3;
                    this.maxDamage = 23;
                    this.maxHealing = 30;
                    this.dodgeChance = 6;
                    this.critChance = 16;
                    break;
                case (item == `bow`): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.minDamage = 3;
                    this.minHealing = 3;
                    this.maxDamage = 20;
                    this.maxHealing = 30;
                    this.dodgeChance = 6;
                    this.critChance = 10;
                    break;
                default:
            }
            break;
        case (race == `human`): // humans get higher min-damage and healing but lower max output
            this.currentHealth = 100;
            this.maxHealth = 100;
            
            switch (true) { 
                case (item == `boots`): //base dodge is 12,5 % / boots increase the percentage to 17 %  (allways +1 at the end to have math floor only generate the required possible outcomes)
                    this.minDamage = 6;
                    this.minHealing = 6;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = 6;
                    this.critChance = 16; 
                    break;
                case (item == `staff`): //staff increases healing +3
                    this.minDamage = 6;
                    this.minHealing = 9;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = 8;
                    this.critChance = 16;
                    break;
                case (item == `sword`): //sword increases damage +3
                    this.minDamage = 9;
                    this.minHealing = 6;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = 8;
                    this.critChance =16;
                    break;
                case (item == `bow`): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.minDamage = 6;
                    this.minHealing = 6;
                    this.maxDamage = 17;
                    this.maxHealing = 27;
                    this.dodgeChance = 8;
                    this.critChance = 10;
                    break;
                default:
            }
            break;
        case (race == `vampire`): // vampires have higher healing and 10+ hp, but lower dodge 8 %
            this.currentHealth = 110;
            this.maxHealth = 110;
           
            switch (true) { 
                case (item == `boots`): //base dodge is 12,5 % / boots increase the percentage to 17 %  (allways +1 at the end to have math floor only generate the required possible outcomes)
                    this.minDamage = 3;
                    this.minHealing = 6;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = 10;
                    this.critChance = 16; 
                    break;
                case (item == `staff`): //staff increases healing +3
                    this.minDamage = 3;
                    this.minHealing = 9;
                    this.maxDamage = 20;
                    this.maxHealing = 36;
                    this.dodgeChance = 12;
                    this.critChance = 16;
                    break;
                case (item == `sword`): //sword increases damage +3
                    this.minDamage = 6;
                    this.minHealing = 6;
                    this.maxDamage = 23;
                    this.maxHealing = 33;
                    this.dodgeChance = 12;
                    this.critChance = 16;
                    break;
                case (item == `bow`): //base crit-chance is 6,25 % / a bow increases it to 10 %
                    this.minDamage = 3;
                    this.minHealing = 6;
                    this.maxDamage = 20;
                    this.maxHealing = 33;
                    this.dodgeChance = 12;
                    this.critChance = 10;
                    break;
                default:
            }
        default:
            this.currentHealth = 100;
            this.maxHealth = 100;
    }

    /*this.heal = function(){};*/

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

    if ((name1.value == "") && (name2.value == "")) {
        var el = document.createElement(`div`);
        el.setAttribute(`style`,`position:absolute;top:10%;left:40%;background-color:white;`);
        el.innerHTML = "Please give player 1 and 2 a name";

        document.body.appendChild(el);
       
        setTimeout(function(){el.parentNode.removeChild(el);},3000);

    } else {    

    let player1 = new Person(name1.value, items1.value, race1.value);
    let player2 = new Person(name2.value, items2.value, race2.value);

    console.log(player1.name);
    console.log(player2.name);

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
            portrait1.src = "resources/200px-Minsc.jpg";
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
            portrait2.src = "resources/0f4402cb267972c1513878d1e8c0b310.jpg";
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
    
    
    /*console.log(player1.damage()); */
    
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
        el.setAttribute(`style`,`position:absolute;top:10%;left:40%;background-color:white;`);

        if(event.target.id == `yield1`) {
            el.innerHTML = `${player1.name} has forfaited the game. Resetting`;
            portrait1.src = "resources/Dan_Kennedy_Chicken.jpg";
            Object.getOwnPropertyNames(player1).forEach(function (prop) {
                delete player1[prop];
            });

            Object.getOwnPropertyNames(player2).forEach(function (prop) {
                delete player2[prop];
            });
        } else {
            el.innerHTML = `${player2.name} has forfeited the game. Resetting`;
            portrait2.src = "resources/Dan_Kennedy_Chicken.jpg";
            Object.getOwnPropertyNames(player1).forEach(function (prop) {
                delete player1[prop];
            });

            Object.getOwnPropertyNames(player2).forEach(function (prop) {
                delete player2[prop];
            });
        }        
        
        document.body.appendChild(el);

        
       
        setTimeout(function(){el.parentNode.removeChild(el);},3000);

        setTimeout(resetGame, 4000);

        setTimeout(function(){portrait1.src = ""; portrait2.src = "";}, 4100);

        
        
    }

    function scrollLog () {
        log.scrollTop = log.scrollHeight - log.clientHeight; // assures the log will scroll down to the new content
    }

    function attackOpponent(event) {
        let doneDamage;

        if(event.target.id == `attack1`) {

            attack2.style.pointerEvents = `auto`;
            heal2.style.pointerEvents = `auto`;
            yield2.style.pointerEvents = `auto`;

            attack1.style.pointerEvents = `none`;
            heal1.style.pointerEvents = `none`;
            yield1.style.pointerEvents = `none`;

            doneDamage = Math.round(Math.random() * (player1.maxDamage - player1.minDamage)) + player1.minDamage;
            

            switch (true) {
                case (player2.race == `elf`):
                        if (player2.item == `boots`) {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 2) {
                                        log.innerHTML += `${player2.name} has dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        } else {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 3) {
                                        log.innerHTML += `${player2.name} has dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        }
                    break;
                case (player2.race == `vampire`):
                        if (player2.item == `boots`) {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 5) {
                                        log.innerHTML += `${player2.name} has dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        } else {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 6) {
                                        log.innerHTML += `${player2.name} has dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        }
                default:
                        if (player2.item == `boots`) {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 3) {
                                        log.innerHTML += `${player2.name} has dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        } else {
                                    if ((Math.floor((Math.random() * player2.dodgeChance) + 1)) == 4) {
                                        log.innerHTML += `${player2.name} has dodged your attack!<br/>`;
                                        scrollLog()
                                    } else {
                                        hitTarget()
                                    }
                        }
            }

            function didYouCrit () {
                switch (true) {
                    case (player1.item == "bow"):
                        if (Math.floor((Math.random() * player1.critChance) + 1) == 5) {
                            return true;                            
                        } else {
                            return false;
                        }                    
                    default:
                        if (Math.floor((Math.random() * player1.critChance) + 1) == 8) {
                            return true;                            
                        } else {
                            return false;
                        }                    

                }
                      
            }
            

            function hitTarget () {
                if (didYouCrit() == true) { // multiples damage by 1,25 if the player scored a critical hit
                    doneDamage = Math.round(doneDamage * 1,25);
                    player2.currentHealth -= doneDamage;
                    healthBar2.value -= doneDamage;
                } else {
                    player2.currentHealth -= doneDamage;
                    healthBar2.value -= doneDamage;
                }
                

                if (player2.currentHealth <= 0) {
                    player2.currentHealth = player2.maxHealth;
                    var el = document.createElement(`div`);
                    el.setAttribute(`style`,`position:absolute;top:10%;left:40%;background-color:white;`);
    
                    el.innerHTML = `${player2.name} has been defeated`;
                    portrait1.src = "resources/trolldad.png";
                    portrait2.src = "resources/71bQXvSriRL._SY355_.png.jpeg";
                    
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

                } else {
                    currentHealth2.innerHTML = `Currenthealth: ` + player2.currentHealth;

                    if (didYouCrit() == true) {
                        let logMessage = `A critical hit!  <br/> ${player1.name} attacked ${player2.name} for ${doneDamage} damage <br/>`
                        log.innerHTML += logMessage;
                        scrollLog()
                    } else {
                        let logMessage = `${player1.name} attacked ${player2.name} for ${doneDamage} damage <br/>`
                        log.innerHTML += logMessage;
                        scrollLog()
                    }
                    
                }
            }

            

            

        } else {

        attack2.style.pointerEvents = `none`;
        heal2.style.pointerEvents = `none`;
        yield2.style.pointerEvents = `none`;

        attack1.style.pointerEvents = `auto`;
        heal1.style.pointerEvents = `auto`;
        yield1.style.pointerEvents = `auto`;

        doneDamage = Math.round(Math.random() * (player2.maxDamage - player2.minDamage)) + player2.minDamage;

        switch (true) {
            case (player1.race == `elf`):
                    if (player1.item == `boots`) {
                                if ((Math.floor((Math.random() * player1.dodgeChance) + 1)) == 2) {
                                    log.innerHTML += `${player1.name} has dodged your attack!<br/>`;
                                    scrollLog()
                                } else {

                                    hitTarget2()
                                }
                    } else {
                                if ((Math.floor((Math.random() * player1.dodgeChance) + 1)) == 3) {
                                    log.innerHTML += `${player1.name} has dodged your attack!<br/>`;
                                    scrollLog()
                                } else {
                                    hitTarget2()
                                }
                    }
                break;
            case (player1.race == `vampire`):
                    if (player1.item == `boots`) {
                                if ((Math.floor((Math.random() * player1.dodgeChance) + 1)) == 5) {
                                    log.innerHTML += `${player1.name} has dodged your attack!<br/>`;
                                    scrollLog()
                                    console.log("test");
                                } else {
                                    console.log("test");
                                    hitTarget2()
                                }
                    } else {
                                if ((Math.floor((Math.random() * player1.dodgeChance) + 1)) == 6) {
                                    log.innerHTML += `${player1.name} has dodged your attack!<br/>`;
                                    scrollLog()
                                    console.log("test");
                                } else {
                                    console.log("test");
                                    hitTarget2()

                                }
                    }
            default:
                    if (player1.item == `boots`) {
                                if ((Math.floor((Math.random() * player1.dodgeChance) + 1)) == 3) {
                                    log.innerHTML += `${player1.name} has dodged your attack!<br/>`;
                                    scrollLog()
                                } else {
                                    hitTarget2()
                                }
                    } else {
                                if ((Math.floor((Math.random() * player1.dodgeChance) + 1)) == 4) {
                                    log.innerHTML += `${player1.name} has dodged your attack!<br/>`;
                                    scrollLog()
                                } else {
                                    hitTarget2()
                                }
                    }
        }

        function didYouCrit2 () {
            switch (true) {
                case (player2.item == "bow"):
                    if (Math.floor((Math.random() * player2.critChance) + 1) == 5) {
                        return true;                            
                    } else {
                        return false;
                    }                    
                default:
                    if (Math.floor((Math.random() * player2.critChance) + 1) == 8) {
                        return true;                            
                    } else {
                        return false;
                    }                    

            }
                  
        }

        function hitTarget2 () {

            if (didYouCrit2() == true) { // multiples damage by 1,25 if the player scored a critical hit
                doneDamage = Math.round(doneDamage * 1,25);
                player1.currentHealth -= doneDamage;
                healthBar1.value -= doneDamage;
                console.log("test");
            } else {
                player1.currentHealth -= doneDamage;
                console.log(player1.currentHealth);
                healthBar1.value -= doneDamage;
                console.log("test");
            }
            
    
            if (player1.currentHealth <= 0) {

                player1.currentHealth = player1.maxHealth;
                var el = document.createElement(`div`);
                el.setAttribute(`style`,`position:absolute;top:10%;left:40%;background-color:white;`);
    
                el.innerHTML = `${player1.name} has been defeated`;

                portrait2.src = "resources/trolldad.png";
                portrait1.src = "resources/71bQXvSriRL._SY355_.png.jpeg";
                
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
                
            } else {

                currentHealth1.innerHTML = `Currenthealth: ` + player1.currentHealth;

                if (didYouCrit2() == true) {
                    let logMessage = `A critical hit!  <br/> ${player2.name} attacked ${player1.name} for ${doneDamage} damage <br/>`
                    log.innerHTML += logMessage;
                    scrollLog()
                } else {
                    let logMessage = `${player2.name} attacked ${player1.name} for ${doneDamage} damage <br/>`
                    log.innerHTML += logMessage;
                    scrollLog()
                }
            }    
                

        }
                
        }   

        console.log(doneDamage);
    }   
    

    function healSelf(event) {
        let healingDone;

        if(event.target.id == `heal1`) {

            attack2.style.pointerEvents = `auto`;
            heal2.style.pointerEvents = `auto`;
            yield2.style.pointerEvents = `auto`;

            attack1.style.pointerEvents = `none`;
            heal1.style.pointerEvents = `none`;
            yield1.style.pointerEvents = `none`;

            healingDone = Math.round(Math.random() * (player1.maxHealing - player1.minHealing)) + player1.minHealing;
            player1.currentHealth += healingDone;            
            healthBar1.value += healingDone;
            if (player1.currentHealth > player1.maxHealth) {
                player1.currentHealth = player1.maxHealth;
                currentHealth1.innerHTML = `Currenthealth: ` + player1.currentHealth;
                let logMessage = `${player1.name} healed himself for ${healingDone} hitpoints <br/>`
                log.innerHTML += logMessage;
                scrollLog()
            } else {
                currentHealth1.innerHTML = `Currenthealth: ` + player1.currentHealth;
                let logMessage = `${player1.name} healed himself for ${healingDone} hitpoints <br/>`
                log.innerHTML += logMessage;
                scrollLog()
            }
              

        } else {

            attack2.style.pointerEvents = `none`;
            heal2.style.pointerEvents = `none`;
            yield2.style.pointerEvents = `none`;

            attack1.style.pointerEvents = `auto`;
            heal1.style.pointerEvents = `auto`;
            yield1.style.pointerEvents = `auto`;

            healingDone = Math.round(Math.random() * (player2.maxHealing - player2.minHealing)) + player2.minHealing;
            player2.currentHealth += healingDone;
            healthBar2.value += healingDone;
            if (player2.currentHealth > player2.maxHealth) {
                player2.currentHealth = player2.maxHealth;
                currentHealth2.innerHTML = `Currenthealth: ` + player2.currentHealth;
                let logMessage = `${player2.name} healed himself for ${healingDone} hitpoints <br/>`
                log.innerHTML += logMessage;
                scrollLog()
            } else {
                currentHealth2.innerHTML = `Currenthealth: ` + player2.currentHealth;
                let logMessage = `${player2.name} healed himself for ${healingDone} hitpoints <br/>`
                log.innerHTML += logMessage;
                scrollLog()
            }
               
        }
        
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



