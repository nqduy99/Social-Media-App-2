import './Home.css'
import ProfileSide from '../../components/profile/ProfileSide';
import PostSide from './../../components/PostSide/PostSide';

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide/>
        <PostSide/>
        <div className="RightSide">Right Side</div>
    </div>
  )
}

export default Home