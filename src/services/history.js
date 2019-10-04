import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
  basename: '/', // The base URL of the app (see below)
});

export default history;
