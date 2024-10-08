import "./Lists.css";

export const Lists = (props) =>{
    const {name, id , img_url, rating , desc, watch_url} = props.data;
    return (
    <li key={id}>
        <div>
          <div>
            <img
              src={img_url}
              alt={id}
              width="40%"
              height="40%"
            />
          </div>
          <h2>Name: {name}</h2>
          <p>
            <b>Rating: {rating}</b>
          </p>
          <p>
            <b>Summary: </b>
            {desc}
          </p>
          <a href={watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </li>
    );
};

// props mein warning errors ko htane k liye ... eslint.config.js mein rule mein 'react/prop-types' : 'off'ko add kr do

 