import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import { store } from './store';
// import * as serviceWorker from './serviceWorker.js'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Provider>
  </StrictMode>
);

// serviceWorker()