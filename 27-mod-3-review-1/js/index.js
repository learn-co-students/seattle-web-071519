//1. take the input from a user search and interpolate it into the fetch request.
//2. use the results and place them inthe DOM

document.addEventListener("DOMContentLoaded", main);

function main() {
  let searchForm = document.getElementById("github-form");
  //searchForm.addEventListener("submit", queryGitHub())
  searchForm.onsubmit = e => {
    e.preventDefault();
    let searchTerm = e.target[0].value;
    queryGitHub(searchTerm);
    e.target.reset();
  };

  queryGitHub = searchTerm => {
    console.log("search Term", searchTerm);
    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then(response => response.json())
      .then(results => displayUsers(results.items));
  };

  displayUsers = usersArray => {
    console.log(usersArray);
    let usersList = document.getElementById("user-list");
    while (usersList.firstChild) {
      usersList.firstChild.remove();
    }
    usersArray.forEach(user => {
      let userLi = document.createElement("li");
      let userAvatar = document.createElement("img");
      userAvatar.src = user.avatar_url;
      let userName = document.createElement("p");
      userName.innerText = user.login;
      let profileButton = document.createElement("button");
      profileButton.innerText = "Repos List";
      profileButton.addEventListener("click", handleProfileClick(user));

      usersList.appendChild(userLi);
      userLi.appendChild(userAvatar);
      userLi.appendChild(userName);
      userLi.appendChild(profileButton);
    });

    function handleProfileClick(user) {
      return function(e) {
        let targetUserName = user.login;
        fetch(`https://api.github.com/users/${targetUserName}/repos`)
          .then(response => response.json())
          .then(usersRepos => displayUsersRepos(usersRepos));
      };
    }

    displayUsersRepos = usersRepos => {
      console.log("users repos", usersRepos);
      let reposList = document.getElementById("repos-list");
      usersRepos.forEach(repo => {
        let repoLi = document.createElement("li");
        repoLi.innerText = repo.full_name;
        reposList.appendChild(repoLi);
      });
    };
  };
}
