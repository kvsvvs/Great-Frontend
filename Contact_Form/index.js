const fs = require("fs");

const jsonFilePath = "directory.json";

function generateId(data) {
  return data.length > 0 ? data[data.length - 1].id + 1 : 1;
}

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  let data = [];
  if (fs.existsSync(jsonFilePath)) {
    const fileContent = fs.readFileSync(jsonFilePath, "utf8");
    data = fileContent ? JSON.parse(fileContent) : [];
  }

  const newEntry = { id: generateId(data), ...formData };
  data.push(newEntry);

  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

  alert("Form submitted successfully!");
  document.getElementById("contactForm").reset();
});
