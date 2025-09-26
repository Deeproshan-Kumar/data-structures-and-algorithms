const user = {
  name: "Deeproshan",
  age: 24,
  role: "Frontend Developer",
  experience: "3.5",
  social: {
    github: "https://www.github/com/Deeproshan",
    linkedin: "https://www.github.com/in/Deeproshan-Kumar",
  },
};

const deepClone = (obj) => {
  if (typeof obj !== "object" || typeof obj === null) {
    return obj;
  }

  let result = Array.isArray(obj) ? [] : {};

  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = deepClone(obj[keys[i]]);
  }

  return result;
}

console.log(deepClone(user));