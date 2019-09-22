import "../css/style.css";
import { validateLogin, validateSignUp } from "./validation";
import { createUser, logUser, logOut } from "./log";
import { addPost, removePost, postTask, deleteTask } from "./taskfunctions";


validateLogin();
validateSignUp();
createUser();
logUser();
logOut();
addPost();
removePost();
postTask();
deleteTask();

