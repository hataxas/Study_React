import style from './Status.module.css';
import React, { useEffect, useState } from 'react';

const StatusWithHooks = (props) => {

  //! Напишем hook который будет отвечать за локальный стейт где editMode может принимать значение true или false (изначально мы задаем ему false) а setEditMode это функция которая может менять значение editMode
  let[editMode, setEditMode] = useState (false);
  //! Напишем hook который будет отвечать за status (каждый hook отвечает за свой кусочек стейта)
  let[status, setStatus] = useState (props.status);

  //! Hook который выполняется после того как все отрисуется и покажется на экране. Мы в качестве зависимости указали [props.status] и теперь когда произойдут изменения этого значения выполнится useEffect (используем вместо componentDidUpdate)
  useEffect( () => {
    setStatus(props.status);
  }, [props.status]);

  const aktivateEditMode = () => {
    setEditMode(true);
  }
  const deaktivateEditMode = () => {
    setEditMode(false);
    //props.updateStatus(status);
  }
  const onStatusChange = (e) => {
    setStatus (e.currentTarget.value);
  }

  return (
    <div className={style.profile_status}>
      {!editMode &&
        <div>
          <span className={style.status} onClick={ aktivateEditMode }>{props.status} </span>
        </div>
      }
      {editMode &&
        <div>
          <input autoFocus={true}
            onChange={onStatusChange}
            onBlur={ deaktivateEditMode }
            className={style.input}
            type="text"
            value={status}
          />
        </div>
      }
    </div>
  );
}

export default StatusWithHooks;
