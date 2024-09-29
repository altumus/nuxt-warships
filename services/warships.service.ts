export async function getShips(page: number) {
  try {
    const shipsResponse = await $fetch(`https://swapi.dev/api/starships/`, {
      method: 'GET',
    });

    return shipsResponse;
  } catch (error) {
    throw error;
  }
}

export default getShips;
