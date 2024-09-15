// Add event listener to button
document.querySelector("button").addEventListener("click", function() {
  // Add class to section
  document.querySelector("#about").classList.add("active");
});

// Add event listener to form
document.querySelector("form").addEventListener("submit", function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  
  // Send form data to server
  fetch("/submit", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
