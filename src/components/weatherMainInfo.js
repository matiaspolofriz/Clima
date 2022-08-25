import styles from "./weatherMainInfo.module.css";
import hum from "../img/hum.png";
import temp from "../img/temp.png";

export default function WeatherMainInfo({ weather }) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>Pais: {weather?.location.country}</div>

      <div>
        <div className={styles.container}>
          <div>
            <div className={styles.imag}>
              <img
                src={`http:${weather?.current.condition.icon}`}
                width="50"
                height="50"
                alt={weather?.current.condition.text}
              />
              <div className={styles.current}>
                Weather: {weather?.current.condition.text}
              </div>
            </div>
          </div>

          <div>
            <div className={styles.imag}>
              <img
                src={temp}
                width="50"
                height="50"
                alt={weather?.current.condition.text}
              />
              <div className={styles.current}>
                Temp: {weather?.current.temp_c}°
              </div>
            </div>
          </div>

          <div>
            <div className={styles.imag}>
              <img
                src={hum}
                width="40"
                height="40"
                alt={weather?.current.condition.text}
              />
              <div className={styles.current}>
                Hum: {weather?.current.humidity}%
              </div>
            </div>
          </div>
        </div>

        <div>
          <iframe
            className={styles.mapa}
            title="mapa"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
