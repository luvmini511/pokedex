import React from 'react';
import styled from 'styled-components';
import { FormattedPokemonList } from './declarations';
import { ListCard } from '../../molecules/ListCard';
import { SearchArea } from '../../molecules/SearchArea';

type Props = {
  pokemonList: FormattedPokemonList;
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 0;
`;

const Heading = styled.p`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

export const HomePresentation = ({ pokemonList }: Props) => {
  return (
    <Container>
      <Heading>
        <span>Welcome To Pokedex!</span>
      </Heading>
      <SearchArea />
      <List>
        {pokemonList.map((pokemonListItem) => {
          const { id, name, imageUrl } = pokemonListItem;
          return <ListCard id={id} name={name} imageUrl={imageUrl} key={id} />;
        })}
      </List>
    </Container>
  );
};
