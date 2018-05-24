# Weather App

Dependencies can be installed by running `npm install` or `yarn install`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## TODO
- [  ] Add the weather details when you select one of the 5 days the forecast is shown for
- [  ] Deploy production build
- [  ] Add missing tests for the `SummaryTabs` component
- [  ] Move the Ajax request out of the `App` component and into a store
- [  ] Cache the response from the API request in local storage for 3 hours (the API is only
- [  ] Tidy up the CSS. Each component should ideally only load what it needs
  updated every 3 hours)
