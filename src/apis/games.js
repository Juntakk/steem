const GAMES_URL = "http://localhost:5000/games";

export const getAllGames = async (gameId) => {
  const response = await fetch(`${GAMES_URL}/${gameId}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Le jeu ${gameId} n'a pas été récupéré`);
  }
};

export const deleteGameById = async (gameId) => {
  const response = await fetch(`${GAMES_URL}/${gameId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    return gameId;
  } else {
    throw new Error(
      `Une erreur est survenue lors de la suppression du jeu ${gameId} `
    );
  }
};

export const updateGame = async (values, gameId) => {
  const response = await fetch(`${GAMES_URL}/${gameId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...values, _id: gameId }),
  });

  if (response.ok) {
    return true;
  } else {
    throw new Error("Il y a eu une erreur dans la mise à jour du jeu.");
  }
};

export const createGame = async (values) => {
  const response = await fetch(`${GAMES_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (response.ok) {
    return true;
  } else {
    throw new Error(`Une erreur est survenue lors de l'ajout du jeu !`);
  }
};

export const getByIdGame = async (gameId) => {
  const response = await fetch(`${GAMES_URL}/${gameId}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Le jeu ${gameId} n'a pas été récupéré`);
  }
};
