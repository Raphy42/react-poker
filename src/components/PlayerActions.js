/**
 * Created by rdantzer on 7/28/17.
 */

import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 10
};

const PlayerActions = () => (
    <div>
        <FlatButton label="Check" style={style}/>
        <FlatButton label="Raise" style={style} primary={true}/>
        <RaisedButton label="All In" primary={true} style={style}/>
        <RaisedButton label="Fold" primary={true} style={style}/>
    </div>
);

export default PlayerActions
