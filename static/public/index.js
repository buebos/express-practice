console.log("helloou");

const btnDelete = document.getElementById("btn-delete");
const btnPost = document.getElementById("btn-post");

const deleteProductsReq = () => {
  fetch("http://localhost:3000/products", {
    method: "DELETE",
  })
    .then((res) => res.text())
    .then((text) => console.log(text.toString()));
};

const postProductsReq = () => {
  fetch("http://localhost:3000/products", {
    method: "POST",
    body: JSON.stringify({
      userName: "Buebos",
      id: "1",
      status: "online",
      about: "hello im buebos",
    }),
  })
    .then((res) => {
      console.log(res.status);
      return res.text();
    })
    .then((text) => console.log(text.toString()));
};

btnDelete.onclick = () => deleteProductsReq();
btnPost.onclick = () => postProductsReq();
