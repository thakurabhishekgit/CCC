// function fetchData(callback) {
//     setTimeout(() => {
//       console.log("Data fetched");
//       callback(); // Executes after data fetching
//     }, 2000);
//   }
  
//   function processData() {
//     console.log("Processing data...");
//   }
  
//   fetchData(processData);
  



 //promises 
 
//  const fetchData = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = true;
//         success ? resolve("Data received") : reject("Error fetching");
//       }, 2000);
//     });
//   };
  
//   fetchData()
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));



// Async/Await example
const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded"), 2000);
    });
  };
  
  const load = async () => {
    const result = await fetchData();
    console.log(result);
  };
  
  
  load();
  
  