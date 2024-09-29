import type { StarshipRequestResponse, Starship } from '../types/ships';

// решение не самое верное, но решил не подключать валидатор запросов
export async function getShips(page: number): Promise<StarshipRequestResponse> {
  try {
    const shipsResponse = await $fetch(
      `https://swapi.dev/api/starships/?page=${page}`,
      {
        method: 'GET',
      },
    );

    return shipsResponse as StarshipRequestResponse;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getShipById(shipId: number): Promise<Starship> {
  try {
    const shipResponse = await $fetch(
      `https://swapi.dev/api/starships/${shipId}/`,
      {
        method: 'GET',
      },
    );

    return shipResponse as Starship;
  } catch (error) {
    return Promise.reject(error);
  }
}
