import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 304,
    width: 400,
    margin: "auto",
    borderRadius: 30,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },
  media: {
    width: "100%",
    height: 200, // You can adjust the height as needed
    objectFit: "cover",
    borderRadius: "30px 30px 0 0",
  },
  content: {
    padding: 24,
  },
  button: {
    marginTop: 24,
    width: "100%",
    backgroundColor: "#1976D2",
    color: "white",
    borderRadius: 30,
    padding: "12px 24px",
    textTransform: "initial",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  chevronIcon: {
    marginLeft: 8,
  },
};

const CardNews1 = ({ imageUrl, rating, quote, delivery }) => {
  const n = rating;

  return (
    <div style={styles.card}>
      <img
        src={imageUrl}
        alt="News"
        style={styles.media}
      />
      <div style={styles.content}>
        {[...Array(n)].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
        <div>
          <h2>{quote}</h2>
          {delivery && <p>{delivery}</p>}
        </div>
        <Link to={`/${quote}`} style={{ textDecoration: 'none' }}>
          <button style={styles.button}>
            Find Out More 
            <span style={styles.chevronIcon}>&rarr;</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardNews1;
