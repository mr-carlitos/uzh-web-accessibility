
# Exercise 1 – Explore the sample Website

### Try to find features that do not work as expected.

- Clicking on the website logo or the text next to it did not lead to the home page
- The buttons on the top-right of the screen that look like they should change the font size don't do anything when clicked
- A lot of links lead to pages that state "This page is currently under construction"
- On the login page, neither the "login" nor the "Forgot password" button are implemented
- On the login page, the "register" button does not work either
- Some link targets are wrong, clicking on "Studies > Master Programmes" on the home page leads to the bachelors programmes.
- Some pages, like the "News & Events", are only linked on the homepage and neither in the main navigation nor the footer. 

### Try to find features that are implemented but not very accessible.

- The website suffers from a lot of poor contrasts, text is generally written in grey instead of black
- The hover indicators on all menu items is very subtle and therefore hard to perceive
- On the login page, the login form does not state what was done wrong, it just states "Please correct the error(s)". Colorblind people will not perceive the color indication around the 

### Discuss with your colleagues about your findings and try to propose some solutions or improvements.

- Increase contrast ratio by making the font color darker
- Make hover indicator more dominant: Increase font size on hover or add a clear border as an indicator
- Add an error symbol and an error text right under the form element that is not correct. State how to recover from this error.

### Now turn of the CSS feature from the browser. Navigate to different pages and try to find structures that have changed compared to when CSS is enabled. Do you think those changes are good or bad? Why?

- The navigation elements look like links but nothing happens when you click them, which is bad since it triggers wrong expectations
- Some buttons, like the buttons to increase and decrease the font size, show up twice when CSS is disabled, which is confusing
- The navigation hierarchy is flat and does not represent the website structure, which makes it hard to navigate visually

# Exercise 2 – Accessible design

## Contrast Ratio

### Can you change the contrast ratio of the content so that they become more legible?

- Change the overall text color to solid black
- Change navigation color to solid white
- Change a-tag color to dark green for people with color blindness
- Analyzed contrast ratio using Lighthouse, fulfills WCAG AA and AAA contrast guidelines

## Page regions

### How many regions, e.g. header, navigation, etc. are there in the Web page?

- Header, Navigation, Main and Footer is present in all files
- The home page contains 3 articles and 2 asides
- The article page contains 1 article

## Accessible font size

### Can you implement the JavaScript that will dynamically scale all the font sizes?

- Added event listeners to both buttons to increase / decrease the font size by 1 pixel on the root style
- Add aria-described-by ID and tooltip div wit the same ID for screen reader support
- Screen readers now read 'Increase font size'

## Reading order (screen reader)

### Compare the HTML code carefully against the actual layout, can you find something counter intuitive?

- The input fields of the 'Login' and 'Create new account' sections are different
- In the login section, the inputs are defined first, then the labels, but the labels are moved up to be shown before the html element using CSS
- The 'Create new account' section is better, as it does not use CSS to reorder the elements

### If you turn off the CSS, do you see any difference?

- The screen reader reads the elements in the order that they appear in the HTML
- Hence, the order is different for the two sections

### Can you propose a solution to improve the HTML code so that the HTML code structure better reflects what the user sees?

- Mark text as a label for the input field
- Place label before input field to respect element ordering

# Exercise 3 – Accessible navigation

## Headings

### Can you find any headings in the source code?

- There are no h-tags in the html code

### Do you think if it is good accessibility practice or not? Why?

- This is not accessible as no structure or content hierarchy is achieved

### If you view the same page in your browser, can you visually identify contents that are emphasized with enlarged font size or bolded font face?

- Yes, the pseudo-titles are styled with CSS to be larger and bolder

### Find the content in the source code, can you propose and implement changes so that those emphasized contents are identified using appropriate heading hierarchy?

- Add `<h1>`-Tags to all `.title` elements
- Add `<h2>`-Tags to all `.subtitle` elements

## Article and their titles

### Can you make improvement to this by switching the div elements to HTML5 sematic tags?

- Add `<article>`-Tags around all article divs

### Can you make the user experience better so that the screen reader announces the artilce title already when the user is on the article, instead of requiring the user to navigate to the title before the announcement is made?

- Add `aria-labelledby` to the article
- Add ID to articles `<h2>`-tag

## Menu structure

### Do you think the generic div elements are good enough to convey the menu structure?

- No, the current menu structure does not use semantically meaningful tags

### Are there other HTML elements that are better at indicating sub-menu hierarchy

- It would be better to use nested lists with `<ol>` and `<li>` tags

## Drop-down menu

### Do you think a screen reader user will be updated about the change of status, i.e. whether the sub-menu is displayed or not?

- Screen readers will not be able to perceive the sub menu as the 'show' attribute is added/removed on click

### If not, try to fix the menu s.t. the screenreader will read "menu", "expanded/collapsed" correctly

- Add `aria-haspopup` and `aria-expanded` attributes to the dropdown html
- Control aria using javascript when dropdown is opened/closed

## Menu keyboard interaction

### Can you implement this feature by using JavaScript to listen to keyboard events on sub-menu and closes it if it is open?

- Register a `keydown` event listener to close the menu and focus on header on escape click

### To improve the user experience, it would be ideal if the menu items can also be activated by pressing the SPACE key, which is the default for button types.

- Register a `keydown` event listener to open the dropdown menu or click the respective link on space click

### When navigating outside an open menu with TAB, the now inactive menu should be closed as well

- Register a `keydown` event listener to close the menu on tab

## Skip links

### Skip links provides shortcuts for screen reader users to jump to a section of the page quickly. Can you implement this feature?

- Create multiple links to the individual sections
- Add `id` attribute to all sections
- Link links to section IDs
- Make links invisible using CSS
- Make links visible when in focus

# Exercise 4 – Accessible forms

## Form control labelling 

### Do you think the form labels are implemented and associated with the corresponding input controls correctly?

- No, the form labels are just implemented as paragraphs
- The `label` tag should be used instead

### Would a screen reader user experience any difficulty when interacting with these forms? Can you improve the situation?

- Screen readers tell to enter an email. However, it is unclear from the spoken text alone why the email is needed
- Could be improved with a fieldset and label

## Related control grouping

### Can you update the HTML source code so that the two groups are grouped using the proper element instead of the generic div elements

- You can use the `fieldset` tag instead of a div
- Use one `fieldset` for the basic information
- Use the second `fieldset` for additional information

## Form input validation

### If you leave the login form empty and click the login button, do you see any indication of errors?

- An error appears above all form elements
- The incorrect field becomes bordered in red
- The error does not state clearly what went wrong nor how to recover from the error
- There is only visual feedback, no audio or haptic feedback

### Based on your knowledge, are those features sufficient to notify the user about his/her mistake?

- No, since screen readers won't catch up on the red border
- There is no way of knowing whether the login process went through or whether there was an error

### Can you introduce some improvement to the form input validation?

- Display error messages below corresponding fields
- Add `aria-live='assertive'` attributes to error messages

# Exercise 5 – Accessible images

## Informative images

### Please identify all the informative images in the sample Website.

- Logo
- Article Images (3 times)

### Are these images accessible to people using screen readers?

- Not accessible since no `alt` text is present
- Add `alt` description if image displays something meaningful
- Add empty `alt` tag for logo as its content is not relevant

## Complex images 

### Can you add accessibility features to make this part more accessible?

- You can wrap the image into a `figcaption` tag with a descriptive text
- We could also use `aria-describedby` but screen readers won't reference the image in this case and the text might be confused with regular text content


