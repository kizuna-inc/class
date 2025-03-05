const variable = Math.floor(Math.random() * 10);

const nav = `<div>
  menu ${variable}
</div>`;

document.querySelector("#nav").innerHTML = nav;
