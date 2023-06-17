let logoutTimer;

function resetLogout() {
  clearTimeout(logoutTimer);
  logoutTimer = setTimeout(logout, 30 * 60 * 1000); // 30 minutes
}

function logout() {
  try {
    fetch("api/user/logout", {
      method: "POST",
    }).then((res) => {
      if (res.ok) {
        window.location.href = "/login";
      } else {
        console.error("logout fail");
      }
    });
  } catch (error) {}
}

document.addEventListener("mousemove", resetLogout);
document.addEventListener("keydown", resetLogout);

resetLogout();
