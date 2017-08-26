import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/App/AppContainer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import throttle from 'lodash/throttle';
import {loadFromStorage,saveToStorage} from './localStorage';
import { loadDefaultFeeds, loadDefaultFeed } from '../src/quotesHelpers';
import './index.scss';
//import registerServiceWorker from './registerServiceWorker';

const defaultState={
  app:{todo:false},
  time:new Date(),
  background:null,
  focus:loadFromStorage('focus')||{text:null,
    done:false,
    set:false,
  },
  name:loadFromStorage('name')||'',
  todo:{
    todo:(loadFromStorage('todo'))||[],
    viewFilter:null,
  },
  quoteFeeds: loadFromStorage('feeds')
  ? loadFromStorage('feeds')
  : loadDefaultFeeds(),
  currentFeed: loadFromStorage('currentFeed')
  ? loadFromStorage('currentFeed')
  : loadDefaultFeed(),
  showNewQuote: false
};

const store=createStore(rootReducer,defaultState,applyMiddleware(thunk));
store.subscribe(
  throttle(()=>{
      saveToStorage('focus',store.getState().focus);
      saveToStorage('todo',store.getState().todo.todo);
      saveToStorage('name',store.getState().name);
      saveToStorage('feeds', store.getState().quoteFeeds);
      saveToStorage('currentFeed', store.getState().currentFeed);
      console.log('ran');
  },5000));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, 
  document.getElementById('root')
);

//registerServiceWorker();
