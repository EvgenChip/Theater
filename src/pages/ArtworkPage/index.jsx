import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { AUTHORS_DATA } from "../../constants/data.js";
import "./styles.css";
import { Header } from "../../component/Header/index.jsx";
import { Footer } from "../../component/Footer/index.jsx";

export const ArtworkPage = () => {
  const { authorId, artworkId } = useParams();

  const author = AUTHORS_DATA.find(({ id }) => id === Number(authorId));
  const { artworks } = author;
  const { id, name, performance, audio, description } = artworks.find(
    ({ id }) => id === Number(artworkId)
  );
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="artwork-page">
      <div className="container">
        <Header />
        <div className="artwork-page__inner">
          <div>
            Здесь должна быть страница о произведении {authorId} {artworkId}
          </div>

          <div className="artwork-page__name">{name}</div>
          <div className="artwork-page__inner">
            <div className="artwork-page__button-wrapper">
              {performance.map((date) => (
                <div className="artwork-page__button">{date}</div>
              ))}
            </div>
            <div className="artwork-page__content">
              <div className="artwork-page__content_title">
                {description.descriptionTitle}
              </div>
              <div className="artwork-page__content_description">
                {description.descriptionInner}
              </div>
            </div>
          </div>
        </div>
        <button onClick={goBack} className="author-page__button_back">
          Назад
        </button>

        <Footer />
      </div>
    </div>
  );
};
