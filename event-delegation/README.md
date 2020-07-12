# Javascript/Web Concepts #1 Event Delegation
This small project contains a simple HTML and Javascript file.

### What is Event Delegation
The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.This is called **Event Delegation**

In the handler we get event.target, see where the event actually happened and handle it accordignly.

Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.

### Benefit
- Simplifies initialization and saves memory: no need to add many handlers.
- Less code: when adding or removing elements, no need to add/remove handlers.
- DOM modifications: we can mass add/remove elements with innerHTML and the like.


### Limitations
- The event must be bubbling. Some events do not bubble. Also, low-level handlers should not use event.stopPropagation().
- The delegation may add CPU load, because the container-level handler reacts on events in any place of the container, no matter whether they interest us or not. But usually the load is negligible, so we don’t take it into account.


See this site for more detail  [Event Delegation](https://javascript.info/event-delegation).







