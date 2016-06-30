
// var Item = function(name, modifier, imagePath, description) {
//     this.name = name;
//     this.modifier = modifier;
//     this.imagePath = imagePath;
//     this.description = description;
//     this.panelHTML = '<div class="col-xs-4 panel-default"><div class="panel-heading">'+ name + '</div><div class="panel-body"><img class="item-img img-responsive" src="' + imagePath + '"></div><div class="panel-footer">' + description + '</div></div>'
//     };


// var items = {
//     box: new Item("Empty Cardboard Box", 0.2, "media/box.jpg", "Empty, yet strangely alluring."),
//     liveMouse: new Item("Live Mouse", 0.3, "media/mouse.jpg", "Alive and wrigling."),
//     catnip: new Item("Catnip", 0.4, "media/catnip.jpg", "Sweet, sweet kitty drugs.")
// }

var player = {
    playerInventory: [],
    addMods: function(inventoryArray){
        var totalModValue = 0;
        for (var i = 0; i < inventoryArray.length; i++){
            var currentItem = inventoryArray[i];
            totalModValue += currentItem.modifier;
        }
        return totalModValue;
    }
}

// function useItem(itemToUse){
//     var pressedButton = document.getElementById(itemToUse);
//     var activeItemElem = document.getElementById("active-items")
//     player.playerInventory.push(items[itemToUse]);
//     activeItemElem.innerHTML += items[itemToUse].panelHTML;
//     pressedButton.style.display = "none"; 
// }

function updatePatience() {
    var patienceElem = document.getElementById("patience");
    patienceElem.innerText = patience;
    if (patience <= 0){
        document.getElementById("cat-img-div").innerHTML = '<img class="img-responsive cat-img" src="media/angrycat.jpg">'
        no.play();
        document.getElementById("player-panel").classList.add("panel-danger");
        document.getElementById("pet-buttons").style.display = "none";
        document.getElementById("item-buttons").style.display = "none";
        document.getElementById("replay-button").style.display = "block";
        document.getElementById("active-items").innerHTML = "<h3>Oh no!</h1> " + name + " is fed up with your measly attempts at affection. <h1><b>NOW, SUFFER THE CONCEQUENCES.</b></h1>"
    }
    else {
        document.getElementById("cat-img-div").innerHTML = '<img class="img-responsive cat-img" src="media/cat.jpg">';
        document.getElementById("player-panel").classList.remove("panel-danger");
        document.getElementById("pet-buttons").style.display = "block";
        document.getElementById("replay-button").style.display = "none";
    }
}

function updatePets() {
    var petsElem = document.getElementById("pets");
    petsElem.innerText = pets;
}

function getName() {
    name = prompt("What is the name of your kitty?", "Snuggles McSnuggleface");
    var nameElem = document.getElementById("name");
    nameElem.innerText = name;
}

function calcDamage (rawDamage) {
    var damageModValue = player.addMods(player.playerInventory);
    return rawDamage*(1-damageModValue);
}

function petAction(rawDamage) {
    var totalDamage = calcDamage(rawDamage);
    patience -= totalDamage;
    updatePatience();
    pets++;
    updatePets();
}

function replay() {
    patience = 100;
    pets = 0;
    no = new Audio("no.wav");
    getName();
    updatePets();
    updatePatience();
    player.playerInventory = [];
    document.getElementById("item-buttons").style.display = "block";
    document.getElementById("box").style.display = "inline-block";
    document.getElementById("liveMouse").style.display = "inline-block";
    document.getElementById("catnip").style.display = "inline-block";
    document.getElementById("active-items").innerHTML = "";
}

// function Kitty() {
//     this.patience = 100;
//     this.pets = 0
// }

// Kitty.prototype.getName = function(){};
// Kitty.prototype.updatePets = function(){};
// Kitty.prototype.updatePatience = function(){};


replay()