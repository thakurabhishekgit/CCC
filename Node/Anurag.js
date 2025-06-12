export let student = ["a", "b", "c", "d", "e"];
export let branches = ["branch1", "branch2", "branch3"];

export let studentDetails = {
  name: "Anurag",
  age: 20,
  city: "Delhi",
  branch: "branch1",
};


export let a = () => {
  console.log("This is a function in Anurag.js");
};

const data = {
  student: student,
  branches: branches,
  studentDetails: studentDetails,
  a: a
};

export default data;