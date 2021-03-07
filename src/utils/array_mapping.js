//! мы создаем универсальную функцию для изменения каких-либо свойст в объекте внутри массива items. Мы берем из массива объект, Id которого соответствует itemId и возвращаем копию этого объекта с какими-то изменениями ...newObjectProps (это будет объект с какими-то новыми значениями свойств)
export const updateObjectInArray = (items, itemId, objectProrertyName, newObjectProps) => {
  return items.map((item) => {
    if (item[objectProrertyName] === itemId) {
      return { ...item, ...newObjectProps };
    }
    return item;
  })
}


//! в нашем коде функция принимает такие параметры
//usersList: updateObjectInArray(state.usersList, action.userId, 'id', {followed: true})
        //! мы перебираем весь массив пользователей и меняем followed только того, чье id пришло к нам в action Так было до рефакторинга
        // usersList: state.usersList.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // })
