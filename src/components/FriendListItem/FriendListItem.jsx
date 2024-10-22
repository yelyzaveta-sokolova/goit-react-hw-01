import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img
        className={styles.friendAvatarImg}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.friendName}>{name}</p>
      {isOnline ? (
        <p className={`${styles.nwStatus} ${styles.isOnline}`}>Online</p>
      ) : (
        <p className={styles.nwStatus}>Offline</p>
      )}
    </div>
  );
}