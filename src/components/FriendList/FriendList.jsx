import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.listFriend}>
      {friends.map((item) => (
        <li key={item.id} className={styles.itemFriend}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}