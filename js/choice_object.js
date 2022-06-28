const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500},
];

const getWorhyWorkers = (workersArray) => {
  const worhyWorkers = [];

  for (let i = 0; i < workersArray.length; i++) {
    const currentWorker = workersArray[i];

    if (currentWorker.salary > 1000) {
      worhyWorkers.push(currentWorker.name)
    }
  }

  return worhyWorkers

}

console.log(getWorhyWorkers(workers))