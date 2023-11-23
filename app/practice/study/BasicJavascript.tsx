export default function BasicJavascript() {
  const person = {
    name: 'ram',
    age: 30,
  };
  // Object.entries
  // const personFormat = Object.entries(person);
  const keys = Object.keys(person);

  console.log('keys', keys);
  let result = [];
  const personFormat = keys.map((key) => {
    const value = person[key];
    // result.push();
  });

  // console.log('person ->', personFormat);

  //
  return (
    <>
      <div>Here</div>
    </>
  );
}
