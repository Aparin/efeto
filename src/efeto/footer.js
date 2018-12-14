const footer = () => {
    const ftr =
        `
<footer class="text-muted ">
  <div class="container ">
    <p class="float-right ">
        <a href="# ">Наверх</a>
    </p>
    <p>Efeto.ru - веб под ключ © 2018</p>
  </div>
</footer>
`;

    document.querySelector('body').insertAdjacentHTML('beforeend', ftr);
}
export default footer;