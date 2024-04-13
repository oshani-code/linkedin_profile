import React from 'react';
import "./Feed.css";
import CreateIcon  from '@mui/icons-material/Create';
import ImageIcon  from '@mui/icons-material/Image';
import "./InputOption";
function Feed() {
  return (
    <div className='feed'>
     <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon/>
            <form>
                <input type="text"/>
                <button type="submit">Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
          <inputOptions Icon={ImageIcon} title="Photo" color="#70B5F9"/>
          
        </div>
     </div>
    </div>
  );
}

export default Feed;