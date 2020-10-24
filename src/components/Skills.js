import React from "react";
import "../css/Skills.css";

const Skills = () => {
  return (
    <div className="Skills section-wrapper">
      <h2 className="skills-title title">Skills</h2>
      <h4 className="skills-subtitle subtitle">
        Lorem ipsum dolor sit amet consectetu adipiscing elit viverra tristique
        placerat
      </h4>
      <p className="details">
        Viverra tristique placerat in sat massa consectetur quisque. Nunc aces
        fames lectus in libero aliquet ertare feraso est lorem nunc dolor sit
        amet settera aces volutpat in voltare lupar est phasellus. Faucibus sed
        tristique fames sed aliquet ultricies eget viverra arcu.
      </p>
      <div className="experience-wrapper" data-aos="fade-right">
        <div className="experience-section">
          <div className="year">2016</div>
          <div className="experience-details">
            <span>2015 - 2016</span> placerat in massa consectetur quisque. Nunc
            ac fames lectus in libero aliquet est setera nunc.
          </div>
        </div>
        <div className="experience-section">
          <div className="year">2017</div>
          <div className="experience-details">
            <span>2016 - 2017</span> Turpis metus sit diam purus leo in
            variusquam. Nunc amet tristique volutpat adipiscing vulputate
            phasellus. Eget enim aliquam euismod mauris in vitae viverra blandit
            lectus diam feugiat.
          </div>
        </div>
        <div className="experience-section">
          <div className="year">2019</div>
          <div className="experience-details">
            <span>2017 - 2019</span> Nunc amet tristique volutpat adipiscing
            vulputate phasellus. Eget enim aliquam euismod.
          </div>
        </div>
        <div className="experience-section">
          <div className="year">2023</div>
          <div className="experience-details">
            <span>2019 - 2023</span> Eget enim aliquam euismod mauris in vitae
            viverra blandit lectus faucibus diam consequat maecenas turpis metus
            sit diam purus leo in varius.
          </div>
        </div>
      </div>
      <div className="Skills-wrapper">
        <div className="skill">
          <h6>Graphics Design</h6>
          <div className="slider">
            <div className="slider-value design"></div>
          </div>
        </div>
        <div className="skill">
          <h6>SEO</h6>
          <div className="slider">
            <div className="slider-value seo"></div>
          </div>
        </div>
        <div className="skill">
          <h6>Responsive Design</h6>
          <div className="slider">
            <div className="slider-value responsive"></div>
          </div>
        </div>
        <div className="skill">
          <h6>Website Development</h6>
          <div className="slider">
            <div className="slider-value web-dev"></div>
          </div>
        </div>
        <div className="skill">
          <h6>Internet Marketing</h6>
          <div className="slider">
            <div className="slider-value marketing"></div>
          </div>
        </div>
        <div className="skill">
          <h6>Data Management</h6>
          <div className="slider">
            <div className="slider-value data-management"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
