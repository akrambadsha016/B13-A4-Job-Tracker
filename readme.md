1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:

i) getElementById() is used to access a specific element by its unique id attribute. Since an id should be unique in a webpage, this method always returns a single element.

ii) getElementsByClassName() selects all elements that share the same class name. Instead of returning one element, it provides an HTMLCollection containing all matching elements.

iii) querySelector() allows you to select an element using a CSS selector (such as class, id, or tag name). However, it only returns the first element that matches the given selector, even if multiple elements meet the condition.

iv) querySelectorAll() also works with CSS selectors, but unlike querySelector(), it returns all matching elements as a NodeList. This means you can access every element that fits the specified class, id, or tag selector.
  
2. How do you create and insert a new element into the DOM?

Ans:

To add a new element dynamically, the first step is to identify the container where the new content will be placed. You can select that parent element using methods like getElementById() or querySelector().

After selecting the parent, create a new element using document.createElement(), for example creating a div. Then, add your desired HTML structure inside that newly created element. This can be done by assigning content with innerHTML, often using a template literal for flexibility.

Finally, attach the newly created element to the selected parent by using appendChild(), which inserts it into the DOM.

3.What is Event Bubbling? And how does it work?

Ans:

Event Bubbling is a process where an event starts from the element that was triggered and then moves upward through its parent elements in the DOM tree.

For example, imagine you have a main div, inside it another div, and inside that a third div, each containing a button. Now, suppose you add an event listener to all three buttons and all three divs, and inside each listener you use console.log() to display a message.

If you click the button inside the innermost div, the event will first execute the button’s event handler. After that, it will automatically trigger the event of its immediate parent div. Then it will move to the next parent div, and continue upward until it reaches the document.

This happens because of Event Bubbling. When an event is triggered on a child element, it doesn’t stop there. Instead, it “bubbles up” to its ancestors one by one.

In simple terms, Event Bubbling means an event begins at the target element and then propagates upward through its parent elements automatically.

4.What is Event Delegation in JavaScript? Why is it useful?

Ans:

It is a technique where you attach a single event listener to a parent element instead of adding separate event listeners to each of its child elements.

By handling events at the parent level, you reduce the number of event handlers needed. This approach makes the code cleaner, easier to manage, and more efficient, especially when working with many similar child elements.

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:

i) preventDefault() is mainly used to block the browser’s built-in behavior for certain elements like forms and anchor (<a>) tags. For example, when a user submits a login form or clicks a link, the browser usually reloads the page or navigates to another URL automatically. By using preventDefault(), you can stop that automatic action and control what happens instead, such as handling the form submission with JavaScript without refreshing the page.

ii) stopPropagation() is used to prevent an event from moving up through the DOM hierarchy. Normally, when an event occurs on a child element, it travels upward to its parent elements (event bubbling). By calling stopPropagation(), you make sure the event is handled only on the current element and does not trigger any event listeners attached to its parent elements.