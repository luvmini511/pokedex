import { AXIOS } from '../logics';
import { GetPokemonDetailResponse } from '../../components/pages/Detail/declarations';

export const getPokemonDetail = async (id: number) => {
  return AXIOS.get<GetPokemonDetailResponse>(`/pokemon/${id}`);
};
