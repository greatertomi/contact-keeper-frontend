import React, {useContext} from "react";
import './Contact.css'
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const {deleteContact, setCurrent, clearCurrent} = contactContext;
  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent()
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        { type === 'professional' ? <span className={'badge badge-success floatBadge'}>
            {type.charAt(0).toUpperCase() + type.slice(1)}</span> :
          <span className={'badge badge-primary floatBadge'}>
            {type.charAt(0).toUpperCase() + type.slice(1)}</span>}
      </h3>
      <ul className="list">
        {email && (
          <li>
            <FontAwesomeIcon icon={faEnvelope}/> {email}
          </li>
        )}
        {phone && (
          <li>
            <FontAwesomeIcon icon={faPhone}/> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-sm btn-dark" onClick={() => setCurrent(contact)}>Edit</button>
        <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
      </p>
    </div>
  )
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem
