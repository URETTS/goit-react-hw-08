import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css'; 
const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;

    // Валідація
    if (!name || !email || password.length < 7) {
      alert('Всі поля обовʼязкові. Пароль має бути не менше 7 символів.');
      return;
    }

    const credentials = { name, email, password };

    console.log('Submitting registration:', credentials);
    dispatch(register(credentials));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" required />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" required />
      </label>
      <label className={css.label}>
        Password (min 7 chars)
        <input type="password" name="password" minLength="7" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
