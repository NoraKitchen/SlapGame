
function updatePatience(kitty) {
    var patienceElem = document.getElementById("patience");
    patienceElem.innerText = kitty.patience;
    if (kitty.patience <= 0) {
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


///////////////
function Controller(){
    this.petsElem = document.getElementById("pets");


}

Controller.prototype.updatePets = function(){
    this.petsElem.innerText = kitty.pets;
}

var controller = new Controller();


////////////////

function replay() {
    kitty = new Kitty();
    no = new Audio("media/no.wav");
    kitty.getName();
    controller.updatePets();
    updatePatience(kitty);
    document.getElementById("item-buttons").style.display = "block";
    document.getElementById("box").style.display = "inline-block";
    document.getElementById("liveMouse").style.display = "inline-block";
    document.getElementById("catnip").style.display = "inline-block";
    document.getElementById("active-items").innerHTML = "";
}

function Kitty() {
    this.patience = 100;
    this.pets = 0;
    this.damageMods = 0;
    this.itemsUsing = [];
}

Kitty.prototype.getName = function () {
    this.name = prompt("What is the name of your kitty?", "Snuggles McSnuggleface");
    //change this to update display name func
    var nameElem = document.getElementById("name");
    nameElem.innerText = name;
};

Kitty.prototype.calcMods = function () {
    //calculates the total mod value/defence bonus of the items in use by kitty
    //item mod values are in decimals less than 1, totaling no more than 1 (no damage)
    var totalModValue = 0;
    for (var i = 0; i < this.itemsUsing.length; i++) {
        var currentItem = this.itemsUsing[i];
        totalModValue += currentItem.modifier;
    }
    this.damageMods = totalModValue;
}

Kitty.prototype.useItem = function (itemElemId) {
    //htm needs removed - adding active item, removing button
    var pressedButton = document.getElementById(itemElemId);
    var activeItemElem = document.getElementById("active-items")
    this.itemsUsing.push(availableItems[itemElemId]);
    //try taking quotes out see if still works
    activeItemElem.innerHTML += availableItems[itemElemId].panelHTML;
    pressedButton.style.display = "none";
    this.calcMods();
}

Kitty.prototype.receivePets = function (rawDamage) {
    var totalDamage = rawDamage * (1 - this.damageMods);
    this.patience -= totalDamage;
    this.pets++;
    updatePatience(kitty); //change this to new func
    controller.updatePets();//change this to new func
}

replay()