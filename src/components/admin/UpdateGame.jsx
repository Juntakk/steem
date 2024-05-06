import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { updateGame } from "../../apis/games";
import styles from "./styles/UpdateGame.module.scss";
import CustomModal from "../extras/CustomModal";
import { useState } from "react";

const UpdateGame = ({ games, setGames }) => {
  const params = useParams();
  const gameId = params.id;
  const game = games.find((item) => item._id === gameId);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "" });

  const defaultValues = {
    name: game ? game.name : "",
    category: game ? game.category : "",
    description: game ? game.description : "",
    price: game ? game.price : "",
    rating: game ? game.rating : "",
    image: game ? game.image : "",
  };

  const schema = yup.object({
    name: yup
      .string()
      .min(3, "Name input too short")
      .required("Name is required"),
    category: yup
      .string()
      .min(3, "Category input too short")
      .required("Category is required"),
    description: yup
      .string()
      .min(10, "Description too short")
      .required("Description is required"),
    price: yup
      .string()
      .min(2, "Price input too short")
      .required("Price is required"),
    rating: yup
      .string()
      .min(5, "Rating too short")
      .required("Rating is required"),
    image: yup.string().required("Image URL is required"),
  });

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(schema) });

  const submit = async (values) => {
    try {
      const response = await updateGame(values, game._id);
      if (response) {
        setModalOpen(true);
        setModalContent({
          title: `${values.name} updated successfully`,
        });
      }
    } catch (error) {
      setError("submit", { type: "generic", message: error.message });
    }
  };
  const closeModal = () => {
    setModalOpen(false);
    navigate(`/games`);
  };

  return (
    <>
      {!game ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={styles.container}>
          <h2 className={styles.title}>Update {game.name}</h2>
          <form onSubmit={handleSubmit(submit)} className={styles.form}>
            <div className={styles.grid}>
              <div className={styles.flexCol}>
                <label htmlFor="name" className={styles.label}>
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.input}
                  {...register("name")}
                />
                {errors?.name && (
                  <span className={styles.error}>{errors.name.message}</span>
                )}
              </div>
              <div className={styles.flexCol}>
                <label htmlFor="category" className={styles.label}>
                  Category:
                </label>
                <input
                  type="text"
                  id="category"
                  className={styles.input}
                  {...register("category")}
                />
                {errors?.category && (
                  <span className={styles.error}>
                    {errors.category.message}
                  </span>
                )}
              </div>
              <div className={styles.flexCol}>
                <label htmlFor="description" className={styles.label}>
                  Description:
                </label>
                <input
                  type="text"
                  id="description"
                  className={styles.input}
                  {...register("description")}
                />
                {errors?.description && (
                  <span className={styles.error}>
                    {errors.description.message}
                  </span>
                )}
              </div>
              <div className={styles.flexCol}>
                <label htmlFor="price" className={styles.label}>
                  Price:
                </label>
                <input
                  type="text"
                  id="price"
                  className={styles.input}
                  {...register("price")}
                />
                {errors?.price && (
                  <span className={styles.error}>{errors.price.message}</span>
                )}
              </div>
              <div className={styles.flexCol}>
                <label htmlFor="rating" className={styles.label}>
                  Rating:
                </label>
                <input
                  type="text"
                  id="rating"
                  className={styles.input}
                  {...register("rating")}
                />
                {errors?.rating && (
                  <span className={styles.error}>{errors.rating.message}</span>
                )}
              </div>
              <div className={styles.flexCol}>
                <label htmlFor="image" className={styles.label}>
                  Image:
                </label>
                <input
                  type="text"
                  id="image"
                  className={styles.input}
                  {...register("image")}
                />
                {errors?.image && (
                  <span className={styles.error}>{errors.image.message}</span>
                )}
              </div>
            </div>
            <button type="submit" className={styles.button}>
              Update Game
            </button>
          </form>
          <CustomModal
            onClose={closeModal}
            isOpen={modalOpen}
            title={modalContent.title}
            message={modalContent.message}
          />
        </div>
      )}
    </>
  );
};

export default UpdateGame;
