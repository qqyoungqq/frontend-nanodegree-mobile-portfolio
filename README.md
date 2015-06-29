## Website Optimization Portfolio Project
Front-End Web Developer Nanodegree Project 4

### Project Overview
To optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second. 

### Instructions on how to run the application
1. Visit my Github page (http://qqyoungqq.github.io/frontend-nanodegree-mobile-portfolio/).
2. Test the PageSpeed score (target: >= 90) on index.html using https://developers.google.com/speed/pagespeed/insights/.
3. Test the frame rate (target: < 60fps) when scrolling in pizza.html using Chrome DevTools or other similar tools.
4. Test the computation efficiency (target: < 5ms) for pizza.html by the time to resize pizzas in pizza.html shown in your browser console.  

### Optimizations 
For index.html:  
1. Eliminate render-blocking CSS (print.css) by using media queries  
2. Eliminate render-blocking CSS (style.css) by inline CSS  
3. Eliminate render-blocking JavaScript (analytics.js) by adding async attribute  
4. Optimize images (profilepic.jpg, pizza.png and pizzeria.jpg) by compression 

For pizza.html(in views/js/main.js):  
1. Optimize the JavaScript by fixing FLS problem in updataPosition() and in changePizzaSizes(size)  
2. Create moving pizzas according to the screen size rather than creating 200 moving pizzas  
3. Reduce the scripting time by replacing document.querySelectorAll() with document.getElementsByClassName() to access specified DOM elements (mover and randomPizzaContainer)  
4. Reduce the paint time by promoting moving pizza to its own layer 

Note:  
The above optimization is applied to master branch and gh-pages branch. But in the gh-pages branch, HTML, CSS, JavaScript are minified.   
