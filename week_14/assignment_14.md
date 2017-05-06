#Issues

##Enter button should launch search
_Found by Robert, Kristi, Nick and Brigit_

I think the search bar and button need to be bound together in a <form> element, but I'm not sure how that "submit" action will work since the form doesn't send any data. I will try this approach first, and if it doesn't work, I'll put a jquery event listener on the button for the enter key to launch the searchwiki function.

##Can't get back to landing page/initial state
_Found by Robert, Kristi, Nick and Brigit_

The landing page is just a different CSS class applied to the body or main element, so I will put in some way to change back to that class. Possibly by clicking the H1 in the top left, or by automatically doing it when clearing the search results.

##Github link doesn't work
_Found by Robert_

I will update the href attribute for the link.

##Search results could include images
_Found by Robert_

The Wikipedia API can provide image urls for each article, but I didn't look into this when making the site. If I have time this week (probably the last thing I look at), I will see if I can include image results in the widest views - desktop or wider.

##Article titles (or entire tiles) could be links
_Found by Robert_

I thought about making the entire search result tile a link to the article - this would be really helpful on mobile. I will try this first, as I don't think it will screw up the rest of the css too much. If it does, I'll just link the header for each article instead.

##Sass partial kind of long
_Found by Robert_

I started developing the main chunk of the sass/css in the _styles partial. This spiraled out of control a little, so I will try splitting up the partials based on function or state: UI, Landing page, search results, etc.

##About button not inuitive
_Found by Kristi_

I can see where this doesn't feel too intuitive. I will try some options like adding a +/- to the link for open/closed states, or possible an arrow that turns. I could also switch the About text for an X when open. I may reference the Material Design guide to see if it has any suggestions for this.

##Back to top option
_Found by Kristi, Nick and Brigit_

I didn't include this - instead I just make the H1 do this function. Now that everyone has pointed out that it's not super intuitive, I will try some other approaches like adding a back to top link in the footer OR injecting it at the end of the search results each time the function runs.

##Fixed Search bar (mobile)
_Found by Kristi and Brigit_

I played around with this originally in the development, but I felt like it took up too much vertical real estate in the mobile view. I never actually tested this on my phone, though, so I will give it a whirl and see how it feels. I may opt to leave it as is though if it obscures to much of the content. (Or if I could figure out how to do the thing where it pops out as soon as you start scrolling up like Safari on iOS does, that might be a good middle ground.)

##Search bar clearing
_Found by Kristi_

I see the point on this one, and I also think it brings up an opposite issue by clearing the results. What if you typed in a long search with 1-2 typos? Would be it be more frustrating to have to retype everything or deal with clearing your input each time? Will do some testing on this one, but I'm not sure which direction is better, especially on mobile where typing patience is at a premium.

##Map image visual balance
_Found by Brigit_

I kept the image the same mainly to 1) reuse assets and 2) keep a familiarity between the landing and the search states, but I also wondered if this balance issue would come up as I was developing the site last week. I will experiment with some different options on this, like darker overlays or adjusting transparency to see if those feel better. I also wonder if transitioning between the landing state and search result state (once implemented) will affect how this is perceived.