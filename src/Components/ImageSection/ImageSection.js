import React from "react";
import avatar from "../../Image/avatar.jpg";
import styles from "./ImageSection.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton.js";

function ImageSection() {
  console.log(styles);
  return (
    <div className={styles.ImageSectionStyled}>
      <div className={styles.leftContent}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles.rightContent}>
        <h4>
          I am <span>Van Thinh</span>
        </h4>
        <p className={styles.paragraph}>
          I fell in love with programming and I have at least learnt something,
          I think… My field of Interest's are building new Web Technologies and
          Products Whenever possible, I also apply my passion for developing
          products with Node.js and Modern Javascript Library and Frameworks
          like React and Redux
        </p>
        <div className={styles.aboutInfo}>
          <div className={styles.infoTitle}>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className={styles.info}>
            <p>: Nguyen Van Thinh</p>
            <p>: 20</p>
            <p>: Viet Nam </p>
            <p>: Vietnamese, English </p>
            <p>: Da Nang, Viet Nam</p>
            <p>: Freelance</p>
          </div>
        </div>
        <PrimaryButton title={"Download Cv"} />
      </div>
    </div>
  );
}

export default ImageSection;
