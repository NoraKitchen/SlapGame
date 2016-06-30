var Item = function (elemId, name, modifier, imagePath, description) {
    this.elemId = elemId;
    this.name = name;
    this.modifier = modifier;
    this.imagePath = imagePath;
    this.description = description;
    this.panelHTML = '<div class="col-xs-4 panel-default"><div class="panel-heading">' + name + '</div><div class="panel-body"><img class="item-img img-responsive" src="' + imagePath + '"></div><div class="panel-footer">' + description + '</div></div>'
};

Item.prototype.useItem = function () {
    var pressedButton = document.getElementById(this.elemId);
    var activeItemElem = document.getElementById("active-items")
    player.playerInventory.push(items[this.elemId]);
    activeItemElem.innerHTML += items[this.elemId].panelHTML;
    pressedButton.style.display = "none";
}

var items = {
    box: new Item("box", "Empty Cardboard Box", 0.2, "media/box.jpg", "Empty, yet strangely alluring."),
    liveMouse: new Item("liveMouse", "Live Mouse", 0.3, "media/mouse.jpg", "Alive and wrigling."),
    catnip: new Item("catnip", "Catnip", 0.4, "media/catnip.jpg", "Sweet, sweet kitty drugs.")
}

// function useItem(itemToUse) {
//     var pressedButton = document.getElementById(itemToUse);
//     var activeItemElem = document.getElementById("active-items")
//     player.playerInventory.push(items[itemToUse]);
//     activeItemElem.innerHTML += items[itemToUse].panelHTML;
//     pressedButton.style.display = "none";
// }

