import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmComponent from './FilmComponent.js';
import styled from 'styled-components';

const CharacterCard = styled.div`
    margin: 0 auto 4% auto;
    border-radius: 20px;
    width: 50%;
    padding: 3%;
    text-align: center;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,199,199,1) 0%, rgba(181,188,243,1) 99.3% );
`

const CardStructure = (props) => {
    const [filmAPI, setFilmAPI] = useState([]);

    return (
        <CharacterCard>
        <h1>{props.name}</h1>
        <h2>Born: {props.birth_year}</h2>
        {/* {props.films.map((film, index) => {
            axios.get(film)
            .then(response => {
                console.log(response);
                setFilmAPI(response);
            })
            .catch(error => {
                console.log(error);
            })
            return <li key={index}>{filmAPI.title}</li>
        })} */}
        </CharacterCard>
    )
}

export default CardStructure;