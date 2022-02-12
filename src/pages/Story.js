import { storyHeroContent, storyContent } from '../assets/content';
import Hero from '../components/Hero';
import Subscribe from '../components/Subscribe';

// styles & icons
import './Story.scss';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Story() {
  const { images, text, team } = storyContent;
  return (
    <div>
      <Hero content={storyHeroContent}/>

    <section className='story'>
      <div className="story_about">
        <div className="story_one">
          <div className="story_one_text">
            <h2>In the beginning...</h2>
            <p>{text[0]}</p>
          </div>
          <div className="story_one_image">
            <img src={images[0].image} alt="" />
          </div>
        </div>

        <div className="story_two">
          <div className="story_two_image">
            <img src={images[1].image} alt="" />
          </div>
          <div className="story_two_text">
            <p>{text[1]}</p>
          </div>
        </div>

        <div className="story_three">
          <div className="story_three_text">
            <p>{text[2]}</p>
          </div>
          <div className="story_three_image">
            <img src={images[2].image} alt="" />
          </div>
        </div>
      </div>

      <h2 className='story_title'>Meet The Team</h2>
      <div className='story_team'>
        {team.map(member => (
          <div key={member.id} className='story_team_member'>
            <div style={{ backgroundImage: `url(${member.image})`, backgroundPosition: `${member.img_position}`}} className="story_team_member_image"></div>
            <div className='story_team_member_bio'>
              <h3>{member.name}</h3>
              <h6>{member.city}</h6>
              <p>{member.bio}</p>
              <p>{member.email}</p>
              <div className="story_social">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
          </div>
        ))}
      </div>     
    </section>


    <Subscribe />
    </div>
  );
}
