import classNames from 'classnames';
import { useState } from 'react';
import { Helpmenu } from '../Helpmenu';
import './form.scss';

export const Form = () => {
  const [typeForm, setTypeForm] = useState('individual');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [index, setIndex] = useState('');

  return (
    <div className="form">
      <div className="form__inner">
        <h2 className="form__title title">Заповнiть форму</h2>
  
        <div className="form__wrap-btn">
          <button
            className={classNames(
              "form__btn-person form__btn-person--left",
              {"form__btn-person--active": typeForm === "individual"}
            )}
            type="button"
            onClick={() => setTypeForm('individual')}
          >
            Фiз.особа
          </button>
          <button
            className={classNames(
              "form__btn-person form__btn-person--right",
              {"form__btn-person--active": typeForm === "entity"}
            )}
            type="button"
            onClick={() => setTypeForm('entity')}
          >
            Юр.особа
          </button>
        </div>
  
        {typeForm === 'individual'&& (
          <form
            id="form"
            className="form__form"
            action="#"
            method='POST'
            onSubmit={(e) => {
              e.preventDefault()
              setName('')
              setSurname('')
              setCompany('')
              setEmail('')
              setPhone('')
              setCountry('')
              setCity('')
              setState('')
              setAddress('')
              setIndex('')
            }}
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
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    required
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </label>
              </div>
      
              <label
                className="form__label form__label--logo"
                htmlFor="company"
              >
                Назва компанii, организацii
                <input
                  className="form__input"
                  type="text"
                  name="company"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
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
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    maxLength={13}
                    placeholder="+380 00 000 00 00"
                    value={phone}
                    onChange={(e) => {
                      if (isFinite(Number(e.target.value)) || e.target.value === '+') {
                        setPhone(e.target.value);
                      }
                    }}
                  />
                </label>
            </div>
    
            <div className="form__part form__part--second">
              <label
                className="form__label"
                htmlFor="country"
              >
                Краiна
                <input
                  className="form__input"
                  type="text"
                  name="country"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </label>
    
              <div className="form__item-wrap">
                <label
                  className="form__label  form__label--sm"
                  htmlFor="city"
                >
                  Мiсто
                  <input
                    className="form__input"
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
    
                <label
                  className="form__label  form__label--sm"
                  htmlFor="state"
                >
                  Штат, район
                  <input
                    className="form__input"
                    type="tel"
                    name="state"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </label>
              </div>
    
              <label
                className="form__label"
                htmlFor="address"
              >
                Адреса
                <input
                  className="form__input"
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
  
              <label
                className="form__label form__label--sm"
                htmlFor="index"
              >
                Поштовий iндекс
                <input
                  className="form__input form__input--sm"
                  type="text"
                  name="index"
                  id="index"
                  value={index}
                  onChange={(e) => {
                    if (isFinite(Number(e.target.value))) {
                      setIndex(e.target.value);
                    }
                  }}
                />
              </label>
            </div>
          </form>
        )}

        {typeForm === 'entity'&& (
          <form
            id="form"
            className="form__form"
            action="#"
            method='POST'
          > 
            <h2>В разработке</h2>
          </form>
        )}
  
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
} 
