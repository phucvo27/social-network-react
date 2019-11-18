import React from 'react';
import { HeaderWrapper, HeaderTitle, HeaderForm, HeaderInteract, HeaderItem, Dropdown, DropdownTitle } from './Header.styled';
import FormInput from '../../components/FormInput/Form-Input.component'
import { ReactComponent as Message} from '../../assets/SVG/Message.svg';
import { ReactComponent as Notification} from '../../assets/SVG/Notification.svg';
//import { ReactComponent as Message} from '../../assets/SVG/Message.svg';
const Header = ()=>{
    return (
        <HeaderWrapper>
            <HeaderTitle>Home Page</HeaderTitle>
            <HeaderForm>
                <FormInput 
                    type='text'
                    placeholder='Search people here'
                    width='30rem'
                />
            </HeaderForm>
            <HeaderInteract>
                <HeaderItem>
                    <Message fill='#fff' className='icon'/>
                    <p className='notification'>2</p>
                    <Dropdown>
                        <DropdownTitle>Messages</DropdownTitle>
                    </Dropdown>
                </HeaderItem>
                <HeaderItem>
                    <Notification fill='#fff' className='icon'/>
                    <p className='notification'>2</p>
                    <Dropdown>
                        <DropdownTitle>Notification</DropdownTitle>
                    </Dropdown>
                </HeaderItem>
                <HeaderItem>
                    <Message fill='#fff' className='icon'/>
                    <p className='notification'>2</p>
                    <Dropdown>
                        <DropdownTitle>Notification</DropdownTitle>
                    </Dropdown>
                </HeaderItem>
            </HeaderInteract>
        </HeaderWrapper>
    )
}

export default Header