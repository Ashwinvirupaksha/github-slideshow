document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('product-list');
    if (list) {
        fetch('/api/products')
            .then(resp => resp.json())
            .then(data => {
                data.forEach(prod => {
                    const li = document.createElement('li');
                    li.textContent = `${prod.name} - $${prod.price} : ${prod.description}`;
                    list.appendChild(li);
                });
            })
            .catch(err => {
                list.innerHTML = 'Failed to load products.';
            });
    }
});
