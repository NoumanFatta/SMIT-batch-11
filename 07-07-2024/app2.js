const outer = () => {
  console.log("Outer is running");
};
const outer2 = () => {
  console.log("Outer 2 is running");
};

const obj = {
  id: 1,
};

export { outer, outer2 };

export default obj;
