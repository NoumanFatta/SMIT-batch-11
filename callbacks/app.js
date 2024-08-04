// const getId = (cb) => {
//   console.log("getting user id");
//   setTimeout(() => {
//     cb(2);
//     // return 1;
//   }, 2000);
// };
// const getUser = (id, cb) => {
//   console.log("Getting user");
//   const users = [
//     { id: 1, name: "foo" },
//     { id: 2, name: "bar" },
//   ];
//   setTimeout(() => {
//     cb(users.find((e) => e.id === id));
//   }, 2000);
// };

// getId((data) => {
//   console.log(`Got user id ${data}`);
//   getUser(data, (user) => {
//     console.log("Got user", user);
//   });
// });

// console.log("hello ====");

const getPaani = (cb) => {
  console.log("Getting paani");
  setTimeout(() => {
    cb(null, "💧");
  }, 2000);
};

const mixPaaniWithPatti = (paani, cb) => {
  console.log("Mixing patti and paani");
  setTimeout(() => {
    cb("Error mixing paani", `${paani} + 🍀`);
  }, 2000);
};
const mixDoodh = (mixture, cb) => {
  console.log("Mixing doodh");
  setTimeout(() => {
    cb(`${mixture} + 🥛`);
  }, 2000);
};
const boilChai = (ingredients, cb) => {
  setTimeout(() => {
    cb(`${ingredients} = ☕`);
  }, 2000);
};
const makeChai = () => {
  getPaani((err, paani) => {
    if (!err) {
      mixPaaniWithPatti(paani, (e, mixture) => {
        if (!e) {
          mixDoodh(mixture, (doodh) => {
            boilChai(doodh, (chai) => {
              console.log(chai);
            });
          });
        } else {
          console.log(e);
        }
      });
    }
  });
};

makeChai();
