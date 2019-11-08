import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardStructure from './CardStructure.js';
import styled from 'styled-components';


const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(800px, 2fr));
`

const CharacterCards = () => {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios.get("https://lambda-swapi.herokuapp.com/api/people/")
        .then(response => {
            setCharacter(response.data.results);
            console.log(response.data.results);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <GridLayout>
            {character.map((character, index) => {
                return <CardStructure key={index} name={character.name} birth_year={character.birth_year} films={character.films} />
            })}
        </GridLayout>
    )
}

export default CharacterCards;