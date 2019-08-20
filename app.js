//init Github
const github = new Github();

//init UI
const ui = new UI();
//input
const searchUser = document.getElementById("searchUser");

//event listener for input
searchUser.addEventListener("keyup", e => {
  //get input text
  const userText = e.target.value;

  if (userText !== "") {
    //make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //show alert for not found
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
const ow = new Overwatch();

ow.getProfile("battlenet", "lxj16#1450");
