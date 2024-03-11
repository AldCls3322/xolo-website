import React from 'react'
import coverImg from '../imgs/black03.jpg'
import '../HomePage/Section1.css'
import './Section3.css'

function Section3() {
  return (
    <div className="Container" id="section3-container">
      <div className="section1-title-container">
        <div className="section1-shortbar" />
        <h2 className="section1-title-text">OUR PRODUCT</h2>
        <div className="section1-shortbar" />
      </div>
      <div class="overcoming-img-wrapper">
        <img
          src="https://assets-global.website-files.com/655d24f7842a7c1237f12921/6566ad9d5c3a14c07b591b58_philip-brideaux-counselling-homepage-1.jpg"
          loading="lazy"
          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 43vw"
          srcset="https://assets-global.website-files.com/655d24f7842a7c1237f12921/6566ad9d5c3a14c07b591b58_philip-brideaux-counselling-homepage-1-p-500.jpg 500w, https://assets-global.website-files.com/655d24f7842a7c1237f12921/6566ad9d5c3a14c07b591b58_philip-brideaux-counselling-homepage-1-p-800.jpg 800w, https://assets-global.website-files.com/655d24f7842a7c1237f12921/6566ad9d5c3a14c07b591b58_philip-brideaux-counselling-homepage-1-p-1080.jpg 1080w, https://assets-global.website-files.com/655d24f7842a7c1237f12921/6566ad9d5c3a14c07b591b58_philip-brideaux-counselling-homepage-1.jpg 1240w"
          alt="a woman is sleeping in a bed with white sheets"
          class="section3-centered-img"
        />
      </div>
      <div className="section3-info-container">
        <div
          className="section1-info-desc-container"
          id="section3-info-desc-centered-container"
        >
          <h2 className="section1-info-desc-title">Introducing DORY</h2>
          <div className="section3-info-titlebar" />
          <p className="section1-info-desc-p" id="section3-info-desc-p">
            DORY is a chatting AI. Message her in Whatsapp.
            <br />
            <br />
            She can make even make jokes. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed convallis eros eu dui faucibus
            faucibus sed sit amet sapien. Duis imperdiet quis metus sit amet
            fermentum. Nunc sit amet ultricies nisi. Maecenas ac enim arcu. Ut
            eu quam porta, convallis orci ac, gravida enim. Nunc egestas felis
            et orci cursus faucibus. Nunc ultricies vitae sem lacinia blandit.
            Nunc eget lectus eget nibh fringilla rutrum in sed mauris. Nulla
            blandit efficitur velit nec interdum. Mauris scelerisque enim id dui
            luctus auctor. Maecenas sed arcu odio.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis eros eu dui faucibus faucibus sed sit amet sapien. Duis
            imperdiet quis metus sit amet fermentum. Nunc sit amet ultricies
            nisi. Maecenas ac enim arcu. Ut eu quam porta, convallis orci ac,
            gravida enim. Nunc egestas felis et orci cursus faucibus. Nunc
            ultricies vitae sem lacinia blandit. Nunc eget lectus eget nibh
            fringilla rutrum in sed mauris. Nulla blandit efficitur velit nec
            interdum. Mauris scelerisque enim id dui luctus auctor. Maecenas sed
            arcu odio. 
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis eros eu dui faucibus faucibus sed sit amet sapien. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3