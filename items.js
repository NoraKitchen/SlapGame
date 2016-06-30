function useItem(itemToUse){
    var pressedButton = document.getElementById(itemToUse);
    var activeItemElem = document.getElementById("active-items")
    player.playerInventory.push(items[itemToUse]);
    activeItemElem.innerHTML += items[itemToUse].panelHTML;
    pressedButton.style.display = "none"; 
}