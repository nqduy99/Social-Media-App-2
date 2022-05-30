import './Home.css'
import ProfileSide from '../../components/profile/ProfileSide';
import PostSide from './../../components/PostSide/PostSide';
import RightSide from './../../components/RightSide/RightSide';

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home