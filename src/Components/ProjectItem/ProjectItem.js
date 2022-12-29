import React from "react";
import styles from "./ProjectItem.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const splideOptions = {
  perPage: 1,
  perMove: 1,
  type: "loop",
  rewind: true,
  pagination: false,
  speed: 300,
  arrows: true,
};

function ProjectItem({ src, name, technologies, features, preview, source }) {
  return (
    <div className={styles.ProjectItemStyle}>
      <div className={styles.LeftItem}>
        <Splide className={styles.Slipe} options={splideOptions}>
          {src.map((img, index) => (
            <SplideSlide key={index}>
              <img src={img} alt="MU" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className={styles.RightItem}>
        <div className={styles.MainTitle}>Description</div>
        <div className={styles.MainContent}>
          <div className={styles.ContentItem}>
            <p className={styles.LeftContent}>Name</p>
            <p className={styles.RightContent}>: {name}</p>
          </div>
          <div className={styles.ContentItem}>
            <p className={styles.LeftContent}>Technologies</p>
            <p className={styles.RightContent}>: {technologies}</p>
          </div>
          <div className={styles.ContentItem}>
            <p className={styles.LeftContent}>Features</p>
            <p className={styles.RightContent}>: {features}</p>
          </div>
          <div className={styles.ContentItem}>
            <p className={styles.LeftContent}>Project preview</p>
            <a href={preview} className={styles.RightContent}>
              : {preview}
            </a>
          </div>
          <div className={styles.ContentItem}>
            <p className={styles.LeftContent}>Project source</p>
            <a href={source} className={styles.RightContent}>
              : {source}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
