import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { IoIosTrash } from 'react-icons/io';
import Icon from '../../Icon';

import './styles.css';

const Item = ({ isReverse, isRemovable, messages, avatar, onRemove }) => {
  const onRemoveHandle = (event) => {
    const { id } = event.currentTarget.dataset;
    onRemove(+id);
  };

  return (
    <div className={classNames('item', { reverse: isReverse, removable: isRemovable })}>
      <img src={avatar} className="avatar" alt="Avatar" />
      <div className="list">
        {messages.map((message) => (
          <div className="list-item" key={message.id}>
            <div className="text">{message.text}</div>
            <div className="time">{dayjs(message.date).format('HH:mm')}</div>
            <Icon
              size={15}
              className="message-status"
              name={message.status === 'sended' ? 'MessageSended' : 'MessageReaded'}
            />
            <IoIosTrash onClick={onRemoveHandle} data-id={message.id} size={18} className="remove-message" />
          </div>
        ))}
      </div>
    </div>
  );
};

Item.propTypes = {
  isReverse: PropTypes.bool.isRequired,
  isRemovable: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.oneOf(["sended", "readed"]),
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default Item;
