So here's my solution.  I used [Create React App](https://github.com/facebook/create-react-app), but outside of this included
no additional libraries.  It would have been easier to sprinkle in npm libraries, but the instructions only indicated using
React for the implementation.  I wenced at using &lt;table> tags at first, but last I recall these are still valid in the spec for displaying tabular data, which our report is doing.  In the real world, Bootstrap or a MUI Datatable or something would probably be more appropriate.

src/data/transactions.json has the transaction data as I would reasonably imagine it coming from an enterprise data store.  Typically this would come in a report ready format from an API, and maybe massaged further in a Reducer, but I figured part of the challenge was to see how I would transmography this data, so I did it manually.  If this was a large amount of data, further memory tuning would be recommended in the Report.getServiceData method.

If I was creating a real-world enterprise React app from scratch, I would instead use [JHipster](https://www.jhipster.tech/).  Their Yeoman scaffolding does an excellent (and clean!) job ingesting a data model, generating the DDL with mechanized version control, entities, caching, optional service layer, self-documenting endpoints, Spring Boot config, authentication, RBAC, audit trail, admin interface, i18n, optimized production containers, your choice of monolithic or micro-service architectures, and your choice of a React, Angular, or Vue UI.  But it solves many more problems than we need to worry about for the use case so I went with the much simpler Create React App.

To run:
yarn start > http://localhost:3000/

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
