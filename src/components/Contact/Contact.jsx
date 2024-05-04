import css from "./Contact.module.css";
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contactsOps.js";
const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
    return(
        <div className={css["contact-wrapper"]}>
            <div className={css["contact-info"]}>
                <p className={css["contact-p"]}>&#128222;{name}</p>
                <p className={css["contact-p"]}>&#128100;{number}</p>
            </div>
            <button className={css["contact-button"]} onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default Contact;