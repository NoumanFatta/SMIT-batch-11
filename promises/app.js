const getPaani = () => {
  return new Promise((res, rej) => {
    console.log("Getting paani");
    setTimeout(() => {
      res("💧");
      //   rej("Error getting paani");
    }, 2000);
  });
};

const mixPaaniWithPatti = (paani) => {
  return new Promise((res, rej) => {
    console.log("Mixing patti and paani");
    setTimeout(() => {
      res(`${paani} + 🍀`);
    }, 2000);
  });
};

const mixDoodh = (mixture) => {
  console.log("Mixing doodh");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${mixture} + 🥛`);
    }, 2000);
  });
};

const boilChai = (ingredients, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${ingredients} = ☕`);
    }, 2000);
  });
};

getPaani()
  .then((paani) => {
    mixPaaniWithPatti(paani).then((mixture) => {
      mixDoodh(mixture).then((doodh) => {
        boilChai(doodh).then((chai) => {
          console.log(chai);
        });
      });
    });
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("Finally");
  });


// getPaani()
//   .then((paani) => {
//     mixPaaniWithPatti(paani).then((mixture) => {
//       mixDoodh(mixture).then((doodh) => {
//         boilChai(doodh).then((chai) => {
//           console.log(chai);
//         });
//       });
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });
