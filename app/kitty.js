function Kitty() {
    this.patience = 100;
    this.pets = 0;
    this.damageMods = 0;
    this.itemsUsing = [];
}

Kitty.prototype.getName = function () {
    this.name = prompt("What is the name of your kitty?", "Snuggles McSnuggleface");
    controller.displayName();
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
    this.itemsUsing.push(availableItems[itemElemId]);
    this.calcMods();
    controller.displayUsedItem(itemElemId);
}

Kitty.prototype.receivePets = function (rawDamage) {
    var totalDamage = rawDamage * (1 - this.damageMods);
    this.patience -= totalDamage;
    this.pets++;
    controller.displayPatience();
    controller.displayPets();

    //check for endgame
    if (kitty.patience <= 0) {
        controller.displayEndgame();
    }
}