import React from "react"
import PropTypes from "prop-types"

const Card = ({ title, subTitle, image, link }) => {
  return (
    <a href={link} className="card" target="_blank">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-footer">
        <div className="card-info">
          <div className="card-title">{title}</div>
          <div className="card-body">{subTitle}</div>
        </div>
      </div>
    </a>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Card
