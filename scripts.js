const menuOptions = [
  { name: 'X-Bacon', price: 35, vegan: false, src: 'assets/X-Bacon.webp' },
  { name: 'X-Ovo', price: 30, vegan: false, src: 'assets/x-Bacon com Ovo.webp' },
  { name: 'X-Fitness', price: 40, vegan: true, src: 'assets/X-Fitness.webp' },
  { name: 'X-Fitness_2', price:42, vegan: true, src: 'assets/X-Fitness-2.webp' },
  { name: 'X-Salada', price: 30, vegan: false, src: 'assets/X-Salada.webp' },
  { name: 'X-Monstruoso', price: 50, vegan: false, src: 'assets/X-Mostruoso.webp' },
  { name: 'X-Normal', price: 30, vegan: false, src: 'assets/X-Normal.webp' },
  { name: 'X-Queijo', price: 30, vegan: false, src: 'assets/X-Queijo.webp' },
  { name: 'X-Vegano', price: 40, vegan: true, src: 'assets/X-Vegano.webp' },
  { name: 'X-Vegano_2', price: 45, vegan: true, src: 'assets/X-Vegano-2.webp' },
];

const ul = document.getElementById('menu-list');

function adicionarTudo() {

  ul.innerHTML = "";

  menuOptions.forEach(item => {
    const li = document.createElement('li');

    li.innerHTML = `
  <img src="${item.src}" alt="${item.name}">
  <div class="informacoes">
    <p class="nome">${item.name}</p>
    <p class="preco">R$ ${item.price},00</p>
  </div>
`;

    ul.appendChild(li);
  });

}

function adicionarDesconto() {

  ul.innerHTML = "";

  menuOptions.forEach(item => {
    const li = document.createElement('li');

    const novoPreco = item.price * 0.9;

    li.innerHTML = `
      <img src="${item.src}" alt="${item.name}">
      <div class="informacoes">
        <p class="nome">${item.name}</p>
        <p class="preco">R$ ${novoPreco.toFixed(2)}</p>
      </div>
    `;

    ul.appendChild(li);
  });
}

function SomarTudo() {

  ul.innerHTML = "";

  const total = menuOptions.reduce((acumulador, item) => {
    return acumulador + item.price;
  }, 0);

  const li = document.createElement('li');

  li.innerHTML = `
      <div class="informacoes">
        <p class="nome">Valor total</p>
        <p class="preco">R$ ${total.toFixed(2)}</p>
      </div>
    `;

  ul.appendChild(li);
}

function apenasAlguns() {

  ul.innerHTML = "";

  const xisDiferente = menuOptions.filter(item => item.vegan);

  xisDiferente.forEach(item => {
    const li = document.createElement('li');

    li.innerHTML = `
      <img src="${item.src}" alt="${item.name}">
      <div class="informacoes">
        <p class="nome">${item.name}</p>
        <p class="preco">R$ ${item.price.toFixed(2)}</p>
      </div>
    `;

    ul.appendChild(li);
  });
}


