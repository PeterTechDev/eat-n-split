import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriendForm((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriendForm && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {" "}
          {showAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendList() {
  // const [friends, setFriends] = useState(initialFriends);
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {/* Add a conditional class based on the balance */}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} R$ {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you R$ {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>Friend name</label>
      <input type="text" placeholder="Name" />

      <label>Image URL</label>
      <input type="text" placeholder="Insert image URL" />

      <Button>Add Friend</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with ${}</h2>

      <label>Bill amount</label>
      <input type="number" placeholder="insert value" />

      <label>Your expense</label>
      <input type="number" placeholder="add expense" />

      <label>${} expense</label>
      <input type="number" placeholder="add " disabled />

      <label>Who is paying the bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">${}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
