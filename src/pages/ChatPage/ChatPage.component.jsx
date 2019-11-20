import React from 'react';
import { ReactComponent as Send } from '../../assets/SVG/Location.svg'
import { 
    ChatWrapper, 
    Wrapper, 
    ChatFriends, 
    ChatBox, Title, 
    ListFriends,
    Friend,
    FriendAvatar,
    FriendName,
    Status,
    ChatBody,
    ChatForm,
    MessageBox,
    MessageAvatar,
    MessageContent,
    ButtonSend
 } from './ChatPage.styled'

class ChatPage extends React.Component {

    render(){
        return (
            <ChatWrapper>
                <Wrapper>
                    <ChatFriends>
                        <Title>Friends</Title>
                        <ListFriends>
                            <Friend className='active'>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={false} />
                            </Friend>
                        </ListFriends>
                    </ChatFriends>
                    <ChatBox>
                        <Title>Messages</Title>
                        <ChatBody>
                            <MessageBox owner={true}>
                                <MessageAvatar owner={true} src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <MessageContent owner={true}>
                                    <p>Hi, my name is Phuc</p>
                                </MessageContent>
                            </MessageBox>
                            <MessageBox owner={false}>
                                <MessageAvatar owner={false} src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <MessageContent owner={false}>
                                    <p>Hello, Phuc :) </p>
                                </MessageContent>
                            </MessageBox>
                        </ChatBody>
                        <ChatForm>
                            <input placeholder='Enter your message here..' type='text' name='message' />
                            <ButtonSend>
                                <Send />
                            </ButtonSend>
                        </ChatForm>
                    </ChatBox>
                </Wrapper>
            </ChatWrapper>
        )
    }
}


export default ChatPage;