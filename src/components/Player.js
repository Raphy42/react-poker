/**
 * Created by rdantzer on 7/28/17.
 */

import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

const style = {
  width: '30em'
};

const Player = () => (
    <Paper style={style}>
        <FlatButton label="Check" primary={true} />
        <FlatButton label="Raise" secondary={true} />
        <RaisedButton label="All In" />
        <Divider />
        <FlatButton label="Fold" fullWidth={true}/>
    </Paper>
);

export default Player
