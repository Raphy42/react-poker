/**
 * Created by rdantzer on 28/07/17.
 */

import React from 'react'
import { Provider } from 'react-redux'
import { Tabs, Tab } from 'material-ui/Tabs'

import Table from '../components/Table'
import Player from '../components/Player'
import configureStore from '../configureStore'

const store = configureStore();


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    }
};

const Home = () => (
  <Provider store={store}>
      <Tabs>
          <Tab label="Table">
              <Table cards={[]}/>
              <Player />
          </Tab>
          <Tab label="Room">

          </Tab>
      </Tabs>
  </Provider>
);

export default Home
