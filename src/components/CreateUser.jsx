import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../contexts/user";
import styles from "../styles/createuser.module.css";
import { postUser } from "../utils/api";

export const CreateUser = ( ) => {



  const { setUser } = useContext(userContext);
  const [newUserQuery, setNewUserQuery] = useState("");
  const [nameQuery, setNameQuery] = useState("");
  const [avatarQuery, setAvatarQuery] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    postUser({
      username: newUserQuery,
      name: nameQuery,
      avatar_url: avatarQuery,
    }).then((res) => {
      setUser(res.data.user);
      navigate("/articles");
    });
    setNewUserQuery("");
    setNameQuery("");
    setAvatarQuery("");
  }

  return (
    <div className={styles.loginbox}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <div>name</div>
            <input
              placeholder="Enter your name...."
              onChange={(event) => {
                setNameQuery(event.target.value);
              }}
              value={nameQuery}
              type="text"
            ></input>
          </label>
        </div>
        <div>
          <label>
            <div>username</div>
            <input
              placeholder="Enter a username...."
              onChange={(event) => {
                setNewUserQuery(event.target.value);
              }}
              value={newUserQuery}
              type="text"
            ></input>
          </label>
        </div>

        <div>
          <label>
            <div>avatar url</div>
            <input
              placeholder="Enter an avatar url...."
              onChange={(event) => {
                setAvatarQuery(event.target.value);
              }}
              value={avatarQuery}
              type="text"
            ></input>
          </label>
        </div>

        <button className={styles.submitbut}>Submit</button>
      </form>
    </div>
  );
};
