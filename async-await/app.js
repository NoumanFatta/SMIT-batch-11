const prom = () => {
  return new Promise((res, rej) => {
    console.log("Calling promise");
    setTimeout(() => {
      res("Promise has been resolved");
      rej("Error in promise");
    }, 1000);
  });
};

const getResponse = async () => {
  try {
    console.log("Promise start");
    const response = await prom();
    console.log(response);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Promise has been finished");
  }
};

getResponse();
