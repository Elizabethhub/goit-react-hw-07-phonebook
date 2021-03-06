import React from "react";
import PropTypes from "prop-types";
import { ContactListItemStyled } from "./ContactListItemStyled";
import { Delete } from "@material-ui/icons";

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  const onDeleteItem = () => {
    onDeleteContact(id);
  };

  return (
    <ContactListItemStyled>
      <li>
        {name}
        <span>: </span>
        {number}
        <button className="btnDelete" type="button" onClick={onDeleteItem}>
          <Delete color="disabled" fontSize="small" style={{ color: "darkred" }} />
        </button>
      </li>
    </ContactListItemStyled>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
