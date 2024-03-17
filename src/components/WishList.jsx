import React from "react";
import { ImSad } from "react-icons/im";
import { NavLink } from "react-router-dom";

export const WishList = ({ wishList, removeFromWishList }) => {
  return (
    <>
      <div>
        <h1 className="text-white text-4xl flex justify-center mt-10 mb-10">
          WishList
        </h1>
      </div>
      {wishList.length > 0 ? (
        wishList.map((game) => (
          <>
            <div class="flex justify-center my-1">
              <div class="relative overflow-x-auto shadow-md">
                <table class="w-auto text-2xl text-center rtl:text-right text-gray-500 dark:text-gray-400">
                  <tbody class="">
                    <tr class="bg-gray-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="">
                        <NavLink to={`/games/${game.id}`}>
                          <img
                            src={game.image}
                            class="w-16 max-w-full h-24"
                            alt={game.name}
                          />
                        </NavLink>
                      </td>
                      <td class="w-64 px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {game.name}{" "}
                      </td>
                      <td class="w-32 px-4 py-4 font-semibold text-gray-900 dark:text-white">
                        {game.price}
                      </td>
                      <td class="px-4 py-4">
                        <button
                          onClick={() => removeFromWishList(game.id)}
                          class="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ))
      ) : (
        <p className="flex flex-row justify-center text-white text-xl text-center font-thin italic">
          No games in WishList{" "}
          <span className="mx-2">
            <ImSad size={30} />
          </span>
        </p>
      )}
      {wishList.length > 0 ? (
        <div className="flex justify-center my-7">
          <button className="text-white p-3 hover:bg-blue-800 bg-blue-900">
            Proceed to payment
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
