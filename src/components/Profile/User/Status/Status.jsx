import style from './Status.module.css';
import React from 'react';

class Status extends React.Component {

  //! создаем локальный state для нашей компоненты
  state = {
    editMode: false,
    status: this.props.status,
  }
  //! создаем метод который будет менять editMode на true, если мы хотим изменить статус (нам нужно кликнуть на тексте (так мы запускаем эту функцию) и появится поле ввода. setState асинхронный метод
  aktivateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deaktivateEditMode = () => {
    this.setState ({
      editMode: false
    });
    //this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState ({
      status: e.currentTarget.value
    });
  }
  //! это метод жизненного цикла в который приходят соообщения о том что в компоненте что-то изменилось (она обновилась) и запускается код прописанный внутри этого метода. Мы используем этот метод чтобы синхронизировать работу локального стэйта и глобального (с глобальным мне еще нужно разобраться (это сейчас не работает))
  componentDidUpdate (prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState ({
        status: this.props.status
      });
    }
  }
  render () {
    return (
      <div className={style.profile_status}>
        {!this.state.editMode &&
          <div>
            <span onClick={ this.aktivateEditMode } className={style.status}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deaktivateEditMode } className={style.input}
              type="text"
              value={this.state.status}
            />
          </div>
        }
      </div>
    );
  }

}

export default Status;
