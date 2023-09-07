import React from 'react';
import s from './ToDoItem.module.scss';

const ToDoItem = () => {
  return (
    <div className={s.toDo}>
      <input class={s.status} type="checkbox" id={s.status} />
      <label for="status">Learn js</label>
      <div className={s.editButton}>Edit</div>
      <div className={s.deketeButton}>Delete</div>
    </div>
  );
};

export default ToDoItem;
