import styles from "../styles/login.module.css";
import { userContext } from "../contexts/user";
import { useContext, useState } from "react";
import { getUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { setUser } = useContext(userContext);
  const [userQuery, setUserQuery] = useState("");

  const navigate = useNavigate();
  let currentUser = {};

  function handleSubmit(event) {
    event.preventDefault();
    getUser().then((data) => {
      const validUser = data.filter((singleUser) => {
        if (singleUser.username === userQuery) {
          currentUser = singleUser;
        }
        return singleUser.username === userQuery;
      });
      if (validUser.length === 1) {
        setUser(currentUser);
        navigate("/articles");
      } else {
        navigate("create-user", { state: userQuery });
      }
    });
    setUserQuery("");
  }

  return (
    <div className={styles.loginbox}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <div>username</div>
            <input
              placeholder="Enter a username...."
              onChange={(event) => {
                setUserQuery(event.target.value);
              }}
              value={userQuery}
              type="text"
            ></input>
          </label>
        </div>

        <button className={styles.submitbut}>Submit</button>
      </form>
    </div>
  );
};
