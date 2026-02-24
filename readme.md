1. 
#getElementById: With getElementById(), an element is usually selected and then the ID with which it is called will be returned as the output, and it works first of all, moreover, an ID can be used only once and the ID can be used with multiple names.

   Example: document.getElementById('idName');


#getElementByClassName: You can select multiple elements of an HTML code with getElementByClassName() and if you call it with a className, it will return an HTMLCollection. If you change the code through Dom, the code will be displayed through the live collection.

    Example: document.getElementByClassName('className');


#querySelector: querySelector() is a JavaScript DOM method that selects the First element that matches a CSS selector.

   Example: document.querySelector('.querySelector');

#querySelectorAll: querySelectorAll() will select all matching elements and return a NodeList, it is always used in CSS selector. When the DOM changes, it changes automatically, so live is not needed.

  Example: document.querySelectorAll('querySelectorAll');

  
2. Create a new element:
a new <div> has been created below, but it will not be displayed on the webpage, when an attribute is added to it then it will be displayed on the webpage.

  new <div> create but no attribute
    let newDiv = document.createElement('div');

  So, create a attribute
     newDiv.textContent = "Hello World";


Create a insert:
when inserting, you first need to grab the parent element, then add it using append to complete the insert.

   let parent = document.getElementById('container');
   parent.append(newDiv);


3.