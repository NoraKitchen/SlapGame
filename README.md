#CatGame

This app was created during week two of the BoiseCodeWorks Immersive Full Stack program. At this point in the curriculum, students had experience with HTML, CSS, Bootstrap, and basic Javascript.

NOTE: This app was heavily refactored at the end of the 3 month program. To see code for the original CatGame, see branch CatGameV1.

The app was originally assigned as a “slap game” in which the user would slap, kick, and punch a stick figure till its health was reduced to zero. I figured I could take a slightly different route so long as I included the same basic functionality.

###Tasks

In this app, my job was to...

1. Display a health value that decreased when “attack” buttons were clicked
2. Make different attacks decrease health by different amounts
3. Make the game end when health reached zero
4. Create “items” with a constructor, and let them be used by the player to decrease damage
5. BONUS: Draw the array of items to the page in some way, and allow the player to select items to use

##Issues with the original

My experience with JavaScript before creating CatGame was solely in completing short, self-contained exercises or functions, and it definitely showed. When I originally completed the activity, I fulfilled all the requirements, but the structure of the code (as well as the look of the thing) was pretty quirky. Some of the problems were...

A lot of global variables and functions, needed to be more object-oriented
Some functions with way too much to do, single responsibility principal would roll in grave
Logic hopelessly mixed with changes to the view,  code hard to follow
Clearly had other things on my mind than visuals

I decided at the end of class to come back to my CatGame and see what kind of improvements I could make.

###Object Time

If the original code of CatGame is any indication, my use and understanding of objects at the beginning of BCW was laughably bad. I've created a game with a cat in it—a cat who clearly has properties such as 'patience' and 'name'--yet no cat object to speak of. All his properties and functions sit in the global space, and instead I have a 'player' object with hardly any real purpose whatsoever.

To rectify those problems, I got rid of my player object and made a Kitty object/constructor instead, moving all the appropriate properties and functions onto Kitty. I also fine-tuned my item-related constructor/objects and moved them into kitty.js and item.js files for better organization.

One rough spot I did run into was in whether the “useItem” method (which allowed items such as catnip to be applied to the kitty and reduce the rate at which his patience decreased) should be placed on the Item or on the Kitty. The method would work roughly the same either way, merely requiring the other object instance that the method didn't belong to (either the Item or Kitty) be passed in as an argument.

In the end I decided to put the method on Kitty, since the item is not actually using itself and because various calculations were happening within Kitty when an item was used, so it seemed the more active party. Looking at it now, I also notice 'calcMods' (which is called within useItem) could easily have been made a private method on Kitty, in which case useItem would need to be on the Kitty object to even use it.

###Breaking up Frankenfunction

Probably my best Frankenfunction was “updatePatience.” Sounds like it's meant to update the kitty's patience, doesn't it? But why only have it do that when we could also make it take care of the entire end game sequence as well? Also, let's have it do the resets to the images and text in the view needed when the player restarts the game *every single time the player pets the cat*, because....because we can.

So I rewrote updatePatience. Now it's job is to—you're not going to believe this—update the patience. The end game process is handled in a method of its own, as are the resets to the view required on replay.

###Controlling the view

HTML mixed in with the game logic gives me the skin wriggles, especially after using Angular for the majority of the time at BCW. I decided to make another file/object that carried all the responsibility of updating the view. It separates the game workings from the UI, and I feel like this did wonders for the readability and potential future editing or manageability of the code. 

One slightly odd thing/violation is the 'panelHTML' property for each of the items, stored on the Item objects themselves. This was a carry-over from the way the game was originally written. I think this was actually done as an attempt to do the very same thing I am doing now (keep the long string of HTML from mixing with the logic within the 'useItem' function).

While and odd but noble attempt in its time, I probably should taken it out of the Item object and put into the view controller, perhaps into a buildPanel function that could create the panel HTML for any item that is passed in.

###Some visual flare

Working on visuals is always rough for me. I dream of the day when I'll simply be handed a PSD to clone rather than having design myself, because it is not my strong suit. I did use this opportunity to play with transparent images, opacity, and putting solid text or images on opaque-like things, since this was something I was fuzzy on (but curious about) before. In the future, I might work on making the game more mobile-friendly.

###To see the original instructions for this activity, visit README2.md and README3.md.

(Note the instructions are old, and for my cohort it was no longer a group activity.)