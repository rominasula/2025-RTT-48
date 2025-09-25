
document.addEventListener("DOMContentLoaded", () => {
  const userImage = document.getElementById("user-image");
  const userName = document.getElementById("user-name");
  const userEmail = document.getElementById("user-email");
  const newUserBtn = document.getElementById("new-user-btn");

  // Function to fetch and update user data
  async function fetchUser() {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const user = data.results[0];

      
      userImage.src = user.picture.large;
      userName.textContent = `Name: ${user.name.first} ${user.name.last}`;
      userEmail.textContent = `Email: ${user.email}`;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  fetchUser();

  newUserBtn.addEventListener("click", fetchUser);
});
