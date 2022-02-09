import ReactPlayer from 'react-player/lazy';

// styles
import './VideoSection.scss';

export default function VideoSection() {
  return (
    <section className='video_section'>
      <ReactPlayer url="https://www.youtube.com/watch?v=2rOcCug6heU" 
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          }
        }}
        width='100%'
        height='400px'
      />
    </section>
  );
}
