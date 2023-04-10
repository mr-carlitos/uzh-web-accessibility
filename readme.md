
# Exercise 1 – Explore the sample Website

### Try to find features that do not work as expected.

- Clicking on the website logo or the text next to it did not lead to the home page.
- The buttons on the top-right of the screen that look like they should change the font size don't do anything when clicked.
- A lot of links lead to pages that state "This page is currently under construction".
- On the login page, neither the "login" nor the "Forgot password" button are implemented.
- On the login page, the "register" button does not work either.
- Some link targets are wrong, clicking on "Studies > Master Programmes" on the home page leads to the bachelors programmes.
- Some pages, like the "News & Events", are only linked on the homepage and neither in the main navigation nor the footer. 

### Try to find features that are implemented but not very accessible.

- The website suffers from a lot of poor contrasts, text is generally written in grey instead of black.
- The hover indicators on all menu items are very subtle and therefore hard to perceive.
- On the login page, the login form does not state what was done wrong, it just states "Please correct the error(s)". Colorblind people will not perceive the color indication around the form boxes.

### Discuss with your colleagues about your findings and try to propose some solutions or improvements.

- Increase contrast ratio by making the font color darker.
- Check if the links are semantically correct (if a link says that you will be redirected to information about the Master Programmes, then this should happen).
- Don't publish/deploy software features (like login or registration functionality), if they are not yet fully implemented.
- Make hover indicator more dominant: Increase font size on hover or add a clear border as an indicator.
- Add an error symbol and an error text right under the form element that is not correct. State how to recover from this error.

### Now turn of the CSS feature from the browser. Navigate to different pages and try to find structures that have changed compared to when CSS is enabled. Do you think those changes are good or bad? Why?

- The main navigation elements ("Faculties", "Education & research" and "Industry & partners") look like links but nothing happens when you click them, which is bad since it triggers wrong expectations.
- Some buttons, like the buttons to increase and decrease the font size, show up twice when CSS is disabled, which is confusing.
- The "LOREM IPSUM" picture appears twice: Once in huge size and once in small size.
- The navigation hierarchy in the navbar and in the sections of the homepage ("News & events", "Studies", and "Researches") is flat and does not represent the website structure, which makes it hard to navigate through the website.
- Within the Login or the Register form, the structure does not indicate that the respective form elements belong to a certain form (Login form or Register form).

# Exercise 2 – Accessible design

## Contrast Ratio

### Can you change the contrast ratio of the content so that they become more legible?
Yes, we can change the contrast ration. We performed the following steps:
- Changing the overall text color to solid black
- Changing navigation color to solid white
- Changing `a`-tag color to dark green for people with color blindness
- Analyzing contrast ratio using [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/#devtools) and some sample examination with [WebAIM](https://webaim.org/resources/contrastchecker/): The website now fulfills WCAG AA and AAA contrast guidelines. This means that color contrast now can be applied to small and large fonts.

The colors that we chose should provide enough contrast between them such that even people severe visual impairment should be able to perceive and distinguish them.

## Page regions

### How many regions, e.g. header, navigation, etc. are there in the Web page?

- A header, a navigation area, a main area and a footer are present on all pages.
- The home page (index.html) also contains 3 articles and 2 asides.
- The article page additionally has an article section.

It needs to be stated that the pages originally provided the stated regions, but mostly didn't use appropriate tags (e.g., using the `nav` or `main` tags when displaying navigation or main content). Instead, the HTML code revealed that mostly `div` tags were being used. In our rework, we
changed the files such that they now display the correct content with the correct tags.
## Accessible font size

### Can you implement the JavaScript that will dynamically scale all the font sizes?
Yes, we were able to implement JavaScript code that dynamically scales all the font sizes. We performed the following steps:
- Added event listeners to both buttons to increase / decrease the font size by 1 pixel on the root style

### What screen reader will announce for these two buttons? Is this good accessibility practice? If not, can you propose an improvement so that the purposes of these two buttons become clearer using ARIA support?
Initially, the screen reader said that there were a "A plus Button" and a "A Button" inside the website content. When we clicked on one of the two buttons,
there was no voice output. To fix this, we did the following:

- We added the `aria-labelledby` attribute to the buttons and set their values to the respective IDs of the tooltip-divs which describe the buttons. This was done for increased screen reader support. 
  - Screen readers now read 'Increase font size' when clicking on 'A+' and 'Decrease font size' when clicking on 'A-'.

## Reading order (screen reader)

### Compare the HTML code carefully against the actual layout, can you find something counter intuitive?
Yes, we found the following things:
- The input fields of the 'Login' and 'Create new account' sections are different:
  - In the 'Login' section, the input elements are defined first, then the labels/paragraph elements, but the labels/paragraph are moved up to be shown before the input elements using CSS (position: relative; top: -60px).
  - The 'Create new account' section is better, as it does not use CSS to reorder the elements.

### If you turn off the CSS, do you see any difference? If you use a screen reader, what would the reading order be?

- The screen reader reads the HTML elements in the order in which they appear within the HTML code.
- Hence, the order is different for the two sections:
  - While in the "Login" part, you first get the input fields and only then the descriptions for the input fields, the "Create new account" section works more naturally, as it first provides the descriptions for the input fields and later the input fields themselves.

### Can you propose a solution to improve the HTML code so that the HTML code structure better reflects what the user sees?
We suggest the following solution:
- The descriptions are placed within `label` elements. Each `label` element is then marked as a label for the respective input field.
- Place label before input field to respect element ordering.

# Exercise 3 – Accessible navigation

## Headings

### Can you find any headings in the source code?

There are no heading tags in the HTML code.

### Do you think if it is good accessibility practice or not? Why?

We think that this is not a good accessibility practice: The website is not very accessible as no structure or content hierarchy is achieved. It will be very difficult for people that
use screenreaders to navigate through the website, because they cannot recognize topic grouping or structure.

### If you view the same page in your browser, can you visually identify contents that are emphasized with enlarged font size or bolded font face?

Yes, the website has titles which are styled with CSS to be larger and bolder.

### Find the content in the source code, can you propose and implement changes so that those emphasized contents are identified using appropriate heading hierarchy?
Yes, we implemented fundamental changes to the website. We did the following:
- We added `<h1>`-tags to all HTML-elements which had an indication in their class name that they are a `title`
- We added `<h2>`-tags to all HTML-elements which had an indication in their class name that they are a `subtitle`

## Article and their titles

### Look at the index page in your browser. You will find three articles in the news & events section. In the corresponding HTML code, each article is enclosed inside the generic div element. Can you make improvement to this by switching the div elements to HTML5 sematic tags?
Yes, we were able to improve the accessibility of the website by adding `<article>`-tags around all article divs.

### Can you make the user experience better so that the screen reader announces the article title already when the user is on the article, instead of requiring the user to navigate to the title before the announcement is made?
Yes, we were able to improve the user experience. We added the `aria-labelledby` attribute to the articles and set the value of the attribute to the ID of the articles' `<h2>`-tags. This was done because the `<h2>`-tags had the article titles in text form.

## Menu structure

### Do you think the generic div elements are good enough to convey the menu structure?

No, the current menu structure does not use meaningful semantical tags.

### Are there other HTML elements that are better at indicating sub-menu hierarchy

It would be better to use nested lists with `<ul>` and `<li>` tags. The menu itself would be a unordered list (`<ul>`) whose structure would be determined by the list items (`<li>`) which are the nav items.

## Drop-down menu

### Do you think a screen reader user will be updated about the change of status, i.e. whether the sub-menu is displayed or not?

We think that screen readers won't be able to perceive the sub-menu when the 'show' attribute is added/removed on click.

### If not, try to fix the menu s.t. the screenreader will read "menu", "expanded/collapsed" correctly
For this task, we did the following steps:
- We added `aria-haspopup` and `aria-expanded` attributes to the dropdown HTML elements
- To update the `aria-expanded` attributes, we programmed a JavaScript function that updates the values when the dropdown is opened/closed

## Menu keyboard interaction

### Can you implement this feature by using JavaScript to listen to keyboard events on sub-menu and closes it if it is open?
Yes, we registered a `keydown` event listener to close the menu and focus on header on an ESC click.

### To improve the user experience, it would be ideal if the menu items can also be activated by pressing the SPACE key, which is the default for button types.

We registered a `keydown` event listener to open the dropdown menu or click the respective link on SPACE click.

### When navigating outside an open menu with TAB, the now inactive menu should be closed as well

We registered a `keydown` event listener to close the menu on TAB.

## Skip links

### Skip links provides shortcuts for screen reader users to jump to a section of the page quickly. Can you implement this feature?
We did the following steps:
- Created multiple links to the individual sections
- Added `id` attribute to all sections
- Linked links to section IDs
- Made links invisible using CSS
- Made links visible when in focus

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

# Exercise 6 – Accessible tables

## Header cells vs data cells

### Can you identify which rows (columns) belong the table header while which rows (columns) belong to the table data?

- The header cells are perceivable through the structure only

### If you inspect the HTML code of article.html in your code editor, are the header cells and data cells marked up correctly? If not, how can you fix it?

- The table does not use correct table header tags
- You should add `th`-tags to the headers

## Column and row groups 

### Based on the slides containing column and row groups, can you change the HTML code?

- The `scope` attribute can be used to span headers over multiple rows/columns
