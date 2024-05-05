import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createGame } from "../../apis/games";
import styles from "./styles/AddGame.module.scss";

const AddGame = () => {
  const defaultValues = {
    name: "",
    category: "",
    description: "",
    price: "",
    rating: "",
    image: null,
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
    reset,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(schema) });

  const submit = async (values) => {
    try {
      const response = await createGame(values);
      if (response) {
        reset(defaultValues);
      }
    } catch (error) {
      setError("submit", { type: "generic", message: error.message });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <h2 className={styles.title}>Add a Game</h2>
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
              <span className={styles.error}>{errors.category.message}</span>
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
              <span className={styles.error}>{errors.description.message}</span>
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
          Add Game
        </button>
      </form>
    </div>
  );
};

export default AddGame;
