import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/index";
import { fetchUser } from "./store/userSlice";
import "./styles.css";

const App = () => {
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const currentUser = user.data && user.data.results[0];

  return (
    <>
      <h1>{user.loading}</h1>
      <h2>Usuário</h2>
      {user.error && user.error}
      {currentUser && (
        <article>
          <img src={currentUser.picture.large} alt={currentUser.name.first} />

          <h2>Nome</h2>
          <p>{currentUser.name.first + " " + currentUser.name.last}</p>

          <h2>E-mail</h2>
          <p>{currentUser.email}</p>
        </article>
      )}
    </>
  );
};

export default App;
