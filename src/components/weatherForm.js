import { useState } from "react";

import styles from "./weatherForm.module.css";

function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        placeholder="Escriba una ciudad..."
        onChange={onChange}
        className={styles.input}
      />
    </form>
  );
}

export default WeatherForm;
