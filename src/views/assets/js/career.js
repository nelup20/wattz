$(document).ready(() => {
  const date = new Date().toLocaleDateString().split("/");
  
  const day = date[0];
  const month = date[1];
  const year = date[2];

  $("#birthdate").attr("max", year - 18 + "-" + month + "-" + day);
});
