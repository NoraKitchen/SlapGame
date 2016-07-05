function Controller() {
    this.nameElem = document.getElementById("name");
    this.petsElem = document.getElementById("pets");
    this.patienceElem = document.getElementById("patience");

    this.catImgElem = document.getElementById("cat-img-div");
    this.gamePanel = document.getElementById("player-panel")
    this.petButtons = document.getElementById("pet-buttons");
    this.replayButton = document.getElementById("replay-button");

    this.itemButtonsElem = document.getElementById("item-buttons")
    this.boxButton = document.getElementById("box");
    this.mouseButton = document.getElementById("liveMouse");
    this.catnipButton = document.getElementById("catnip");

    this.activeItems = document.getElementById("active-items");
}

Controller.prototype.displayName = function () {
    this.nameElem.innerText = kitty.name;
}

Controller.prototype.displayPets = function () {
    this.petsElem.innerText = kitty.pets;
}

Controller.prototype.displayPatience = function () {
    this.patienceElem.innerText = (kitty.patience.toFixed(2));
}

Controller.prototype.displayUsedItem = function (itemElemId) {
    var pressedButton = document.getElementById(itemElemId);
    pressedButton.style.display = "none";
    this.activeItems.innerHTML += availableItems[itemElemId].panelHTML;
}

Controller.prototype.displayEndgame = function () {
    var no = new Audio("media/no.wav");
    no.play();
    this.catImgElem.innerHTML = '<img class="img-responsive cat-img" src="media/angrycat.png">'
    this.gamePanel.classList.add("panel-danger");
    this.petButtons.style.display = "none";
    this.itemButtonsElem.style.display = "none";
    this.replayButton.style.display = "block";
    this.activeItems.innerHTML = "<h3>Oh no!</h1> " + kitty.name + " is fed up with your measly attempts at affection. <h1><b>NOW, SUFFER THE CONCEQUENCES.</b></h1>"

}

Controller.prototype.viewReset = function () {
    //reset pics and buttons in view to display new game
    this.catImgElem.innerHTML = '<img class="img-responsive cat-img" src="media/cat.png">';
    this.gamePanel.classList.remove("panel-danger");
    this.petButtons.style.display = "block";
    this.replayButton.style.display = "none";
    this.itemButtonsElem.style.display = "flex";
    this.boxButton.style.display = "inline-block";
    this.mouseButton.style.display = "inline-block";
    this.catnipButton.style.display = "inline-block";
    this.activeItems.innerHTML = "";
}

var controller = new Controller();