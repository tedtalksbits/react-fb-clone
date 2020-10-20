import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ReplyAllOutlinedIcon from '@material-ui/icons/ReplyAllOutlined';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__interaction">
                <div className="post__interactionTop">
                    <div className="post__interactionTopLike">
                        <span role="img" aria-label="">❤️😂😓</span>
                        <p>2.8k</p>
                    </div>
                    <p>700 Comments</p>
                    <p>319 Shares</p>
                </div>
                <hr size="2" />
                <div className="post__interactionBottom">
                    <div className="post__interactionBottomIcon">
                        <ThumbUpIcon />
                        <p>Like</p>
                    </div>
                    <div className="post__interactionBottomIcon">
                        <ChatBubbleIcon />
                        <p>Comment</p>
                    </div>
                    <div className="post__interactionBottomIcon">
                        <ReplyAllOutlinedIcon />
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
