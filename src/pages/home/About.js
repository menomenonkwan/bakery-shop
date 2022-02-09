import React from 'react';
// styles
import './About.scss';

export default function About() {
  return (
    <section className='about'>
      <div className="about_container">
        <div className="about_container_content">
          <h3>Our Goal</h3>
          <h3>Our Promise</h3>
          <div className="about_container_content_text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, labore quibusdam doloribus necessitatibus, error deleniti incidunt rem eveniet architecto a, iure voluptatibus fugiat? Labore ducimus cum unde cumque nostrum vero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, labore quibusdam doloribus necessitatibus, error deleniti incidunt rem eveniet architecto a, iure voluptatibus fugiat? Labore ducimus cum unde cumque nostrum vero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, labore quibusdam doloribus necessitatibus, error deleniti incidunt rem eveniet architecto a, iure voluptatibus fugiat? Labore ducimus cum unde cumque nostrum vero!</p>
          </div>
        </div>
        <div className="about_container_content_image">
          <img src="https://source.unsplash.com/le7D9QFiPr8/" alt="Our smiling staff" />
        </div>
      </div>
    </section>
  );
}
