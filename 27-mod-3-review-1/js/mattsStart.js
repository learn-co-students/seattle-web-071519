document.addEventListener("DOMContentLoaded", main);

function main() {
  //get search input
  let searchForm = document.getElementById("github-form");
  searchForm.onsubmit = e => {
    e.preventDefault();
    let userSearch = e.target[0].value;
    getUserInfo(userSearch);
  };
}

getUserInfo = userSearch => {
  fetch(`https://api.github.com/search/users?q=${userSearch}`)
    .then(resp => resp.json())
    .then(usersCollection => displayUserInfo(usersCollection));
};

displayUserInfo = usersCollection => {
  console.log(usersCollection);
  let userList = document.getElementById("user-list");
  clearUserList(userList);
  usersCollection.items.forEach(user => {
    let userLi = document.createElement("li");
    let userAvatar = document.createElement("img");
    userAvatar.src = user.avatar_url;

    userLi.onClick = e => {};

    userList.appendChild(userLi);
    userLi.appendChild(userAvatar);
  });
};

clearUserList = userList => {
  while (userList.firstChild) {
    userList.firstChild.remove();
  }
};
