import userCreatedReporting from "./system2.js";
import userCreated from "./system1.js";

export default function messageBroker(user){
    userCreatedReporting(user);
    userCreated(user);
}