var Item = function (name, modifier, imagePath, description) {
    this.name = name;
    this.modifier = modifier;
    this.imagePath = imagePath;
    this.description = description;
    this.panelHTML =  '<div class="col-xs-4 animated flipInY"><div class="panel-default border"><div class="panel-heading item-panel">'+ name + '</div><div class="panel-body"><img class="item-img img-responsive" src="' + imagePath + '"></div><div class="panel-footer item-panel">' + description + '</div></div></div>';

};

var availableItems = {
    box: new Item("EMPTY BOX", 0.2, "media/box.jpg", "Empty, yet strangely alluring."),
    liveMouse: new Item("LIVE MOUSE", 0.3, "media/mouse.jpg", "Just wants to be friends."),
    catnip: new Item("CATNIP", 0.4, "media/catnip.jpg", "Sweet, sweet kitty drugs.")
}