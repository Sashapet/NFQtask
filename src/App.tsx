import React, { memo } from 'react';
import { Provider } from 'react-redux';

import { store } from './state/store';
import Navigator from './routes/Navigator';

const App = memo(() => (
  <Provider store={store}>
    <Navigator />
  </Provider>
));

App.displayName = 'App';

export default App;
