//**********Good luck************ */



function playerGenerator (name, race, type, health) {
    this.name = name;
    this.race = race;
    this.type = type;
    this.health = health; 

    function skeletorActs (){
        moves = Math.round(Math.random());        
        if(this.moves == 0) {
            let critChance = Math.floor(Math.random() * 4);
            let damage;
            if (critChance == 1) {
                damage = (Math.floor(Math.random() * 6) + 10) * 2;
            } else {
                damage = (Math.floor(Math.random() * 6) + 10);
            }

            let playerHealth = you.health; 
            playerHealth = playerHealth - damage;
            if (playerHealth <= 0) {
                alert("Game over! Skeletor adds you to his spare bone collection");
                you.health = 100;
                skeletor.health = 1000;
            } else {
                you.health = playerHealth;
                console.log("Skeletor attacks you for " + damage + " damage. You have " + you.health + " hp left");
            }

        } else {
            let amountHealed = (Math.floor(Math.random() * 41) + 40);
            let skeletorHealth = skeletor.health; 
            skeletorHealth = skeletorHealth + amountHealed;
            skeletorHealth > 1000 ? skeletorHealth = 1000 : "";
            skeletor.health = skeletorHealth;
            console.log("Skeletor heals himself for " + amountHealed + "hp. Skeletor now has " + skeletor.health + " hp left");
        }
    }
    
    if (this.name == "you"){
        this.attack = function() {
            let critChance = Math.floor(Math.random() * 4);
            let skeletorHealth = skeletor.health;
            let damage;
            if (critChance == 1) {
                damage =  (Math.floor(Math.random() * 101) + 20) * 2;
            } else {
                damage =  (Math.floor(Math.random() * 101) + 20);
            }
            
            skeletorHealth = skeletorHealth - damage;
            if (skeletorHealth <= 0) {
                alert("Congratulations! You've sent skeletor back to the raveyard");
                you.health = 100;
                skeletor.health = 1000;
            } else {
                skeletor.health = skeletorHealth;
                console.log("You attack Skeletor for " + damage + " damage . Skeletor has " + skeletor.health + " hp left");
                randomPun(puns);
                setInterval(skeletorActs(), 2000);
            }
        }
        this.heal = function() {
            let playerHealth = you.health; 
            let amountHealed = (Math.floor(Math.random() * 13) + 8);
            playerHealth = playerHealth + amountHealed;
            playerHealth > 100 ? playerHealth = 100 : "";
            you.health = playerHealth;
            console.log("You heal yourself for" + amountHealed + ". You now have " + you.health + "hp left" );
            randomPun(puns);
            setInterval(skeletorActs(), 2000);
        };


    } else {
        
        this.performMove = function(){
            skeletorActs();
        }; 
    }
}

let skeletor = new playerGenerator("skeletor", "monster", "skeleton", 1000);
let you = new playerGenerator("you", "human", "inquisitor", 100);


console.log(you.attack());





