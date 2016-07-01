var Item = function (name, modifier, imagePath, description) {
    // this.elemId = elemId;
    this.name = name;
    this.modifier = modifier;
    this.imagePath = imagePath;
    this.description = description;
    this.panelHTML = '<div class="col-xs-4 panel-default"><div class="panel-heading">' + name + '</div><div class="panel-body"><img class="item-img img-responsive" src="' + imagePath + '"></div><div class="panel-footer">' + description + '</div></div>'
};

var availableItems = {
    box: new Item("Empty Cardboard Box", 0.2, "media/box.jpg", "Empty, yet strangely alluring."),
    liveMouse: new Item("Live Mouse", 0.3, "media/mouse.jpg", "Alive and wrigling."),
    catnip: new Item("Catnip", 0.4, "media/catnip.jpg", "Sweet, sweet kitty drugs.")
}