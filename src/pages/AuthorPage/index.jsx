import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { Header } from "../../component/Header";
import { AUTHORS_DATA } from "../../constants/data.js";
import "./styles.css";
import { Footer } from "../../component/Footer";

export const AuthorPage = () => {
  const { id: matchId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const author = AUTHORS_DATA.find(({ id }) => id === Number(matchId));
  const { id, name, picture, history, artworks } = author;
  console.log(picture);

  return (
    <div className="author-page">
      <div className="container">
        <Header />
        <div className="author-page__name">{name}</div>
        <div className="author-page__inner">
          <div className="author-page__button-wrapper">
            {artworks.map(({ id, name }) => (
              <Link key={id} to={`/authors/${matchId}/artworks/${id}`}>
                <div className="author-page__button">{name}</div>
              </Link>
            ))}
          </div>
          <div className="author-page__content">
            <div className="author-page__content_title">{history.title}</div>
            <div className="author-page__content_description">
              {history.description}
            </div>
          </div>
        </div>
        <div className={`author-page__back_${picture.name}`}>
          <img
            className={`author-page__back_${picture.name}_left`}
            src={picture.img.left}
            alt=""
          />
          <img
            className={`author-page__back_${picture.name}_right`}
            src={picture.img.right}
            alt=""
          />
        </div>
        <button onClick={goBack} className="author-page__button_back">
          Назад
        </button>

        <Footer />
      </div>
    </div>
  );
};
