/**
 * Created by rdantzer on 28/07/17.
 */

import React from 'react'
import { Provider } from 'react-redux'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Card, CardMedia, CardHeader, CardActions, CardTitle, CardText } from 'material-ui/Card'
import Divider from 'material-ui/Divider'

import Table from '../components/Table'
import Player from '../components/PlayerActions'
import ActionHistory from '../components/ActionHistory'

import configureStore from '../configureStore'

const store = configureStore();

const style = {
  margin: 5
};

const boardStyle = {
  width: '50em'
};

const Home = () => (
  <Provider store={store}>
      <Tabs>
          <Tab label="room.title">
              <Card style={boardStyle}>
                  <CardHeader title="room.title" subtitle="room.subtitle"/>
                  <Divider/>
                  <CardMedia style={style}>
                      <Table/>
                  </CardMedia>
                  <Divider/>
                  <CardText>
                      <ActionHistory history={[
                          {
                              what: 'folded',
                              who: {
                                  name: 'Pascal'
                              },
                              when: Date.now().toString()
                          },
                          {
                              what: 'raised',
                              who: {
                                  name: 'Fabrice'
                              },
                              payload: {
                                money: 200
                              },
                              when: Date.now().toString()
                          },
                          {
                              what: 'all in',
                              who: {
                                  name: 'Patricia Kaas'
                              },
                              payload: {
                                  money: 5000
                              },
                              when: Date.now().toString()
                          },
                          {
                              what: 'won',
                              who: {
                                  name: 'Patricia Kaas'
                              },
                              payload: {
                                  money: 5200
                              }
                          }
                      ]}/>
                  </CardText>
                  <CardTitle>player.actions</CardTitle>
                  <CardActions>
                      <Player/>
                  </CardActions>
              </Card>
          </Tab>
          <Tab label="Room">

          </Tab>
      </Tabs>
  </Provider>
);

export default Home
