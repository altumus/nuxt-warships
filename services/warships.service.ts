import type { StarshipRequestResponse } from '../types/ships';

export async function getShips(page: number): Promise<StarshipRequestResponse> {
  try {
    const shipsResponse = await $fetch(
      `https://swapi.dev/api/starships/?page=${page}`,
      {
        method: 'GET',
      },
    );

    // решение не самое верное, но решил не подключать валидатор запросов
    // тк используем всего один
    return shipsResponse as StarshipRequestResponse;
  } catch (error) {
    throw error;
  }
}

export default getShips;
