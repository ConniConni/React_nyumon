const Profile = ({ name, age, hobbies }) => {
  return (
    <div>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>
        <div>Hobby:</div>
        <ul>
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
        {console.log(`Name: ${name},Age: ${age}, Hobby: ${hobbies}`)}
      </div>
    </div>
  );
};

export default Profile;
