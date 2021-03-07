import React from 'react';
import style from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, isPageChangeInProgress, onPageChanged}) => {
  //! вычисляем сколько страниц нам нужно нарисовать (делим общее колличество пользователей на колличество пользователей отображаемое на одной странице и округляем это значение вверх (чтобы если получим дробное число страниц рисовалось достаточно))
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  //! создаем пустой массив страниц (номеров) и затем при помощи цикла заполняем его значениями
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div className={style.pagination}>
    {/* перебираем массив pages и для каждой найденой страницы возвращаем ссылку с номером этой страницы (и нужной странице еще и присваиваем класс style.selectedPage) */}
    {pages.map(page => {
      return <button key={page} className={currentPage === page ? style.selectedPage : ''} disabled={isPageChangeInProgress} onClick = {() => {onPageChanged(page)}}>
      {page}
      </button>
    })}
  </div>
}

export default Paginator;
