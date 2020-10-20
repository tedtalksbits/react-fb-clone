import React from 'react';
import { useStateValue } from './StateProvider';
import Story from './Story';
import "./StoryReel.css";


function StoryReel() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="storyReel">
            <Story 
                image="https://images.unsplash.com/photo-1602361602799-ebe8ce60ec2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                profileSrc={user.photoURL} 
                title={user.displayName} 
            />
            <Story 
                image="https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                profileSrc="https://www.avatarist.com/avatars/Cartoons/Doraemon-figure.jpg" 
                title="Emily Blake" 
            />
            <Story 
                image="https://images.unsplash.com/photo-1602250814153-f00b7b93588f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                profileSrc="https://www.avatarist.com/avatars/Movies/Star-Wars/Chibi-Chewbacca.jpg" 
                title="Chasity Blake" 
            />
            <Story 
                image="https://images.unsplash.com/photo-1602250433203-82bc5df8d97b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                profileSrc="https://www.avatarist.com/avatars/Movies/American-Psycho-blood.jpg" 
                title="Comarsh Blake" 
            />
            <Story 
                image="https://images.unsplash.com/photo-1602249586867-eb4f52bbbc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                profileSrc="https://www.avatarist.com/avatars/Movies/Star-Wars/Multicolored-Lightsaber.gif" 
                title="Tequan Blake" 
            />
            <Story 
                image="https://images.unsplash.com/photo-1602243131186-8514d10eb4c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                profileSrc="https://www.avatarist.com/avatars/Cartoons/Slagar-the-Cruel.jpg" 
                title="Atetra Blake" 
            />
        </div>
    )
}

export default StoryReel
