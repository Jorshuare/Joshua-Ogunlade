/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/white-back-laptop.jpg";

const imageAltText = "wood background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a Machine Learning Engineer with a background in Electrical and Electronics Engineering, specialising in Telecommunications. I am passionate about Technology and proffering solutions to real-world problems through innovation. I have been demonstrating my skills through active competitions and hackathons, including the Zindi competition, where I drive positive change. I am committed to pushing the boundaries of Machine Learning to make a meaningful impact.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Science",
  "Data Visualization",
  "Machine Learning Frameworks",
  "Version Control",
  "Data Preprocessing",
  "Continuous Integration",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "My enthusiasm lies in leveraging technology to solve real-world problems. I am a strong believer in the power of collaboration and teamwork. I am a fast learner and I am always looking for opportunities to learn and grow. I am also a strong advocate for diversity and inclusion in the tech space.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
