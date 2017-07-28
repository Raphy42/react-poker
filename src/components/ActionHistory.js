/**
 * Created by rdantzer on 7/28/17.
 */

import React, {Component} from 'react'

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person'

class ActionHistory extends Component {
    props: {
        history: Array<{
            what: string,
            who: {
              name: string,
            },
            payload?: {
                money?: number,
                cards?: string[]
            },
            when: string
        }>
    };

    render() {
        return (
            <List>
                <Subheader>History</Subheader>
                {this.props.history.map((action, index) => (
                        <ListItem
                            key={index}
                            leftAvatar={<Avatar icon={<Person />} />}
                            rightIcon={<ActionInfo />}
                            primaryText={action.who.name + ' ' + action.what}
                            secondaryText={action.payload ? action.payload.money : 0}
                        />
                    )
                )}
            </List>
        )
    }
}

export default ActionHistory
