/**
 * Created by rdantzer on 28/07/17.
 */

//@flow

import React, {Component} from 'react'
import Paper from 'material-ui/Paper'

const colorLookup = {
    H: 'red',
    D: 'red',
    S: 'black',
    C: 'black'
};

const nameLookup = {
    H: 9829,
    D: 9830,
    S: 9824,
    C: 9827
};

const valueLookup = {
    T: 10,
    K: 'K',
    Q: 'Q',
    J: 'J',
    A: 'A'
};

function buildCardStyle(name: string, style: any) {
    const [value, color] = name.split('');

    return {
        value: Number.isInteger(+value) ? +value : valueLookup[value],
        style: {
            color: colorLookup[color]
        },
        name: nameLookup[color]
    }
}

const paperStyle = {
    height: 80,
    width: 56,
    margin: 3,
    textAlign: 'center',
    display: 'inline-block'
};

class Card extends Component {
    props: {
        card: string
    };

    render() {
        const {value, style, name} = buildCardStyle(this.props.card);

        return (
            <Paper style={paperStyle} zDepth={4}>
                <p className="card-text" style={style}>{value}</p>
                <p className="card-img" style={style}>{String.fromCharCode(name)}</p>
            </Paper>
        )
    }
}

export default Card