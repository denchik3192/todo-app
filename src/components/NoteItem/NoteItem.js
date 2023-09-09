import React from 'react';
import s from './noteitem.module.scss';

const NoteItem = () => {
  return (
    <div className={s.toDo}>
      <div className={s.note}>Купить воды</div>
      <div className={s.info}>
        <div className={s.weather}>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather Icon" />
          <div className={s.temperature}>16 C</div>
        </div>
        <div className={s.date}>2 Nov 2025 </div>
        <time className={s.time}>15:16 </time>
      </div>
      <div className={s.deleteButton}>X</div>
      <div className={s.editButton}>Edit</div>
    </div>
  );
};

export default NoteItem;
