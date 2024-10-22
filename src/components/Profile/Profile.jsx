import styles from "./Profile.module.css";
export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.cardUser}>
      <div className={styles.card}>
        <img className={styles.cardUserImg} src={image} alt="User avatar" />
        <p className={styles.cardUserName}>{name}</p>
        <p className={styles.cardUserInfoTag}>@{tag}</p>
        <p className={styles.cardUserInfoLoc}>{location}</p>
      </div>
      <ul className={styles.cardStatsBox}>
        <li className={styles.cardUserStats}>
          <span className={styles.cardStatsType}>Followers</span>
          <span className={styles.cardStatsNumber}>{followers}</span>
        </li>
        <li className={`${styles.cardUserStats} ${styles.cardUserStatsBord}`}>
          <span className={styles.cardStatsType}>Views</span>
          <span className={styles.cardStatsNumber}>{views}</span>
        </li>
        <li className={styles.cardUserStats}>
          <span className={styles.cardStatsType}>Likes</span>
          <span className={styles.cardStatsNumber}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}