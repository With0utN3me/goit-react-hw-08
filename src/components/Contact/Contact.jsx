import css from "./Contact.module.css";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { ModalDelete } from './ModalDelete';
import PropTypes from 'prop-types';
import { ModalEdit } from './ModalEdit';
const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedContact, setEditedContact] = useState({name, number, id});

    const handleEdit = () => {
        dispatch(updateContact({ id: editedContact.id, name: editedContact.name, number: editedContact.number }))
            .then(() => {
                setIsEditModalOpen(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedContact({ ...editedContact, [name]: value });
    };

    const handleDelete = () => {
        dispatch(deleteContact(id))
            .then(() => {
                setIsModalOpen(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return(
        <div className={css["contact-wrapper"]}>
            <div className={css["contact-info"]}>
                <p className={css["contact-p"]}>&#128222;{name}</p>
                <p className={css["contact-p"]}>&#128100;{number}</p>
            </div>
            <div className={css.btnWrap}>
                <button className={css["contact-button"]} onClick={() => setIsEditModalOpen(true)}>Edit</button>
                <button className={css["contact-button"]} onClick={() => setIsModalOpen(true)}>Delete</button>
            </div>
            <ModalDelete
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                onDelete={handleDelete} 
            />
            <ModalEdit
                isOpen={isEditModalOpen}
                onRequestClose={() => setIsEditModalOpen(false)}
                contact={editedContact}
                handleChange={handleChange}
                onSubmit={handleEdit}
            />
        </div>
    )
}
export default Contact;