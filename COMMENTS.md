<!-- Project Comments Go Here -->

<!-- Project Comments Go Here -->

Hi, for who is reviewing this code, <br/>
hope you are having fun with all the codes, from everyone.

You will see that I only have a few commits, I decided to do it to somehow help in the review,
but I understand the importance for to commit our changes to have the history and if in the future
we need to fix any bug or git conflict we can come back and do it.

## How I wanted to do it (My initial plan):

- Step 01 - Main Task - Fix the feat of the applications that should show 5 new applications when the "load more" button is clicked

  - Step 02 - Refactor the folders, I just followed some "best practices" for the organization of the react app, so I decided to organize as I did. <br />
  - Fix small styling one the main page, data format, currency format, style font bold and link email
  - Should I refactor server side too? I want to use the MVC patterm (Extra) I am focusing client side for now...<br/>

- Step 03 - Second task - Do test:

  - I used postman to test the API endpoint to see the data
  - Unit test for the API since we need check if the endpoint is working or not,
  - Unit test for the button that he is the main thing that will trigger the API call, so I wanted to do a test where I check if is working
  - Do an integration test since the button works with the application component which should show 5 more application with the right titles and text when the button is clicked.<br/>

- Step 04 - Third task - Make the mobile size,
  - Right now the app only has a desktop view so I should improve the user experience
    since most users these days check by mobile app.
  - How I would do it: the main change would be the table that displays the applications instead of showing everything I would only show the company name, application date and expiry date I would put a button to show more where the other
    the information would be showing, I decided to have a button for more accessibility.

Thank you for reviewing my code.

## Reference:

- Currency format with Intl.NumberFormat
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
- Vitest API mock
  https://vitest.dev/api/#test-fails
