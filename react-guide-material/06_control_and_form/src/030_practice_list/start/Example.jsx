import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];
const personList = persons.map((person) => (
  /* リストにはkeyを設定することを忘れないように！ */
  <li key={person.name}>
    <Profile {...person} />
  </li>
));

const Example = () => {
  return (
    <>
      <ul>{personList}</ul>
      {console.log(personList)}
    </>
  );
};

export default Example;
