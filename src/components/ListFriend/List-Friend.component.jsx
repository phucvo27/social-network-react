import React from 'react';
import { ListFriendWrapper, List, Friend, FriendState } from './List-Friend.styled'

class ListFriend extends React.Component {


    render(){
        return (
            <ListFriendWrapper>
                <List>
                    <Friend>
                        <img src="https://html.crumina.net/html-olympus/img/avatar69-sm.jpg" className='avatar' alt='user-avatar'/>
                        <FriendState online={true}></FriendState>
                    </Friend>
                    <Friend>
                        <img src="https://html.crumina.net/html-olympus/img/avatar69-sm.jpg" className='avatar' alt='user-avatar'/>
                        <FriendState className='state'></FriendState>
                    </Friend>
                </List>
            </ListFriendWrapper>
        )
    }
}

export default ListFriend;