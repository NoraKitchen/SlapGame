function Controller() {
    this.nameElem = document.getElementById("name");
    this.petsElem = document.getElementById("pets");
    this.patienceElem = document.getElementById("patience");
    this.patienceBarElem = document.getElementById("patience-bar");

    this.catImgElem = document.getElementById("cat-img-div");
    this.gamePanel = document.getElementById("player-panel")
    this.petButtons = document.getElementById("pet-buttons");
    this.endgamePanel = document.getElementById("endgame");
    this.catNameSpan = document.getElementById("cat-name");

    this.itemButtonsElem = document.getElementById("item-buttons")
    this.boxButton = document.getElementById("box");
    this.mouseButton = document.getElementById("liveMouse");
    this.catnipButton = document.getElementById("catnip");

    this.activeItems = document.getElementById("active-items");
}

Controller.prototype.displayFAQ = function () {
    alert("CatGame FAQ \n\n Question: Is there a way to win CatGame? \n\n Answer: No. \n\n Thanks for playing.");
}

Controller.prototype.displayName = function () {
    this.nameElem.innerText = kitty.name;
}

Controller.prototype.displayPets = function () {
    this.petsElem.innerText = kitty.pets;
}

Controller.prototype.displayPatience = function () {
    this.patienceElem.innerText = (kitty.patience.toFixed(2));
    this.patienceBarElem.style.height = kitty.patience * 4 + "px";
}

Controller.prototype.displayUsedItem = function (itemElemId) {
    //remove clicked button/item
    var pressedButton = document.getElementById(itemElemId);
    pressedButton.style.display = "none";
    //stop animation for already present cards
    var inUseCards = this.activeItems.childNodes;
    for (var i = 0; i < inUseCards.length; i++){
        var currentCard = inUseCards[i];
        currentCard.classList.remove("animated");
    }
    //add item to items in use
    this.activeItems.innerHTML += availableItems[itemElemId].panelHTML;
}

Controller.prototype.displayEndgame = function () {
    var no = new Audio("media/no.wav");
    no.play();
    this.catImgElem.innerHTML = '<img class="img-responsive cat-img animated wobble" src="media/angrycat.png">'
    this.gamePanel.classList.add("panel-danger");
    this.petButtons.style.display = "none";
    this.itemButtonsElem.style.display = "none";
    this.catNameSpan.innerText = kitty.name;
    this.endgamePanel.style.display = "block";
    this.activeItems.style.display = "none";
}

Controller.prototype.viewReset = function () {
    //reset pics and buttons in view to display new game
    this.catImgElem.innerHTML = '<img class="img-responsive cat-img" src="media/cat.png">';
    this.gamePanel.classList.remove("panel-danger");
    this.petButtons.style.display = "block";
    this.endgamePanel.style.display = "none";
    this.itemButtonsElem.style.display = "flex";
    this.boxButton.style.display = "inline-block";
    this.mouseButton.style.display = "inline-block";
    this.catnipButton.style.display = "inline-block";
    this.activeItems.innerHTML = "";
}

var controller = new Controller();