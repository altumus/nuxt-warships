export interface Starship {
  MGLT: string; // строка, представляющая скорость в мегасветовых годах в час.
  cargo_capacity: string; // строка, представляющая грузоподъёмность.
  consumables: string; // строка, представляющая запас провизии.
  cost_in_credits: string; // строка, представляющая стоимость в кредитах.
  created: string; // строка, представляющая дату и время создания в формате ISO.
  crew: string; // строка, представляющая количество членов экипажа.
  edited: string; // строка, представляющая дату и время последнего редактирования в формате ISO.
  hyperdrive_rating: string; // строка, представляющая дату и время последнего редактирования в формате ISO.
  length: string; // строка, представляющая длину.
  manufacturer: string; // строка, представляющая производителя.
  max_atmosphering_speed: string; // строка, представляющая максимальную атмосферную скорость.
  model: string; // строка, представляющая модель.
  name: string; // строка, представляющая название.
  passengers: string; // строка, представляющая количество пассажиров.
  films: string[]; // массив строк, представляющий ссылки на фильмы.
  pilots: string[]; // массив строк, представляющий ссылки на фильмы.
  starship_class: string; // строка, представляющая класс звездолёта.
  url: string; // строка, представляющая URL на ресурс.
}

export interface StarshipRequestResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}
