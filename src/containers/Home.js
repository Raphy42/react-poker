/**
 * Created by rdantzer on 28/07/17.
 */

import React from 'react'
import { Provider } from 'react-redux'

import Table from '../components/Table';

import configureStore from '../configureStore'

const store = configureStore();

const Home = () => (
  <Provider store={store}>
    <Table/>
  </Provider>
);

export default Home
