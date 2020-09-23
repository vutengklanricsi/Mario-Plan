import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
          <div className="center">Notifications</div>
            <ul className="notifications">
              {notifications && notifications.map(notification => {
                return(
                  <li key={notification.id}>
                    <span className="pink-text">{notification.user}</span>
                    <div>{notification.content}</div>
                    <div className="grey-text note-date">
                      {moment(notification.time.toDate()).fromNow()}
                    </div>
                  </li>
                )
              })}
            </ul>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Notifications;
