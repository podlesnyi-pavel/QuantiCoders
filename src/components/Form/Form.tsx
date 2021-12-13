import { Helpmenu } from '../Helpmenu';
import './form.scss';

export const Form = () => (
  <div className="form">
    <div className="form__inner">
      <h2 className="form__title title">Заповнiть форму</h2>

      <div className="form__wrap-btn">
        <button
          className="form__btn-person form__btn-person--left form__btn-person--active" type="button"
        >
          Фiз.особа
        </button>
        <button className="form__btn-person form__btn-person--right" type="button">
          Юр.особа
        </button>
      </div>

      <form
      id="form"
        className="form__form"
        action="#"
        method='POST'
      > 
        <div className='form__part'>
          <div className="form__item-wrap">
            <label
              className="form__label form__label--sm"
              htmlFor="name"
            >
              Iм'я
              <input
                className="form__input"
                type="text"
                name="name"
                id="name"
              />
            </label>
            <label
              className="form__label form__label--sm"
              htmlFor="surname"
            >
              Фамiлiя
              <input
                className="form__input"
                type="text"
                name="surname"
                id="surname"
              />
            </label>
          </div>
  
          <label
            className="form__label"
            htmlFor="company"
          >
            Назва компанii, организацii
            <input
              className="form__input"
              type="text"
              name="company"
              id="company"
            />
          </label>
  
          <label
              className="form__label"
              htmlFor="email"
            >
              Email адрес
              <input className="form__input"
                type="email"
                name="email"
                id="email"
              />
            </label>
  
          <label
              className="form__label"
              htmlFor="number"
            >
              Номер телефону
              <input
                className="form__input"
                type="tel"
                name="number"
                id="number"
              />
            </label>
        </div>

        <div className="form__part form__part--second">
          <label
            className="form__label"
            htmlFor="country"
          >
            Краiна
            <input className="form__input" type="text" name="country" id="country" />
          </label>

          <div className="form__item-wrap">
            <label
              className="form__label  form__label--sm"
              htmlFor="city"
            >
              Мiсто
              <input className="form__input" type="text" name="city" id="city" />
            </label>

            <label
              className="form__label  form__label--sm"
              htmlFor="state"
            >
              Штат, район
              <input className="form__input" type="tel" name="state" id="state" />
            </label>
          </div>

          <label
              className="form__label"
              htmlFor="address"
            >
              Адреса
              <input className="form__input" type="text" name="address" id="address" />
            </label>

            <label
              className="form__label form__label--sm"
              htmlFor="index"
            >
              Поштовий iндекс
              <input className="form__input form__input--sm" type="text" name="index" id="index" />
            </label>
        </div>
      </form>

      <h2 className="form__title--margin title">Види допомоги</h2>
      <p className="form__subtitle">Ви можете змiнити вид допомоги</p>

      <Helpmenu />

      <button
        className="form__submit"
        type="submit"
        form="form"
      >
        Допомогти
      </button>
    </div>
  </div>
);