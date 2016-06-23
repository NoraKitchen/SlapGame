#CatGame

This app was created during week two of the BoiseCodeWorks Immersive Full Stack program. At this point in the curriculum, students had experience with HTML, CSS, Bootstrap, and basic Javascript.

The app was originally assigned as a “slap game” in which the user would slap, kick, and punch a stick figure till its health was reduced to zero. I figured I could take a slightly different route so long as I included the same basic functionality.

###Tasks

In this app, my job was to...

1. Display a health value that decreased when “attack” buttons were clicked
2. Make different attacks decrease health by different amounts
3. Make the game end when health reached zero
4. Create “items” with a constructor, and let them be used by the player to decrease damage
5. BONUS: Draw the array of items to the page in some way, and allow the player to select items to use

##Process highlights, and what I'd do differently

I'm a little surprised I was able to accomplish so much after only (I believe at the time) a couple days of first making JavaScript and HTML interact. Still, my experience with JavaScript before this was solely in completing short, self-contained exercises, and I definitely think it shows.

While my CatGame does everything asked for plus a little more on the surface, the structure of the code under the hood is a little quirky and could do with some heavy refactoring.

###Half-done refactors of days since passed

I did actually do some refactoring even as I was originally writing the code. Instructions for the activity implied a separate function could be written for ever single “attack” button, and I initially did this, but later noticed I could simply rewrite the function with a “damage” parameter and use the same function for all buttons, with different damage amounts passed in as arguments. It also seems I chose to put the “addMods” function as a method on the player object, which isn't a bad idea...

###And the transcendental kitteh

...But that begs the question, why is the useItem function not also on the player object? Also, isn't it a little weird that this game clearly contains a cat, but there is no cat object to speak of? Instead, what perhaps ought to have been our cat's properties (his name, his patience level, possibly his pets taken) float freely and globally in random places about the code. The cat has no physical form, no bounds to his existence, no need for the limiting restrictions of JavaScript object encapsulation. The cat is no mere object in this game. He IS them game. He is us all.

So I think someone needs to refactor this code and put that cat back in line. Also, while they're at it, they might consider taking a look at the mildly horrific updatePatience function. Likely originally conceived to update the health in the HTML/view, the function has clearly gone over-achiever on us and decided to also take on not only the job of handling the entire endgame process when “patience” hits zero, but ALSO a number activities that as far as I can tell have no reason to be performed at every single patience update and more likely belong to the replay/restart game function.

###That being said...

One thing that did surprise me looking back over this was the function useItem, whose purpose was to add a used item to the player inventory and display the item panel in the view. This being vanilla JS, I expected the function to be jumbled up with a bunch of HTML (to display the item panel) written inside it. But all there was was a handful of short lines of code. How did the panel appear on the page when the function that added it had no actual HTML inside it to write to the page?

On further inspection, it turned out I had saved the entire string of HTML to write the panel inside a “panelHTML” property on each item object. There are a few things about this that do make me cringe a little (possibly unnecessary repetition of very similar code, and item descriptions are hard-coded in the HTML string rather than using the actual description property), so I'm not sure if it was the best choice overall. But I do still like what I think I was trying to do, which was keep my function free of ugly and confusing HTML strings. Maybe there could even have been a way to keep that basic tactic but remove some of the issues, if I had worked at it a little harder.

##Despite all my complaints, I really enjoyed making CatGame all the way through to the end. I think you will also enjoy playing. All the way through to the end. Please. Also, if your computer is currently muted, please unmute. By the powers of kitteh, I compel you.

###To see the original instructions for this activity, visit README2.md and README3.md. (Note the instructions are old, and for my cohort it was no longer a group activity.)