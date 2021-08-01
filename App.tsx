
import React from 'react';
import type {Node} from 'react';
import Router from './src/navigation/Router';
import { Provider } from 'mobx-react';

import * as AppStore from './src/store/AppStore';

const App: () => Node = () => {
  return (
     <Provider store={AppStore}>
 <Router/>
  </Provider>
   
  );
};
export default App;