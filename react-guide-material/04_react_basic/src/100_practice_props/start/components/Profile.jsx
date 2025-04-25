import "./Profile.css";

const Profile = ({ name, age, country }) => {
  console.log({ name, age, country });
  return (
    <div className="profile">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>From: {country}</p>
    </div>
  );
};

export default Profile;
