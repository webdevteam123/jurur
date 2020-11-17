import ProductComponent from './ProductComponent.js';

export default class ProductContainerComponent {
    constructor(url) {
        this.state = {
            url,
            productList: [],
            category: "",
            lastUpdate: Date.now(),
            isChanged: false
        }
    }

    download(containerElm) {
        fetch(`${ this.state.url }/latest`, {
            headers: {
                "secret-key": "$2b$10$hX6pTzpkeoQeo.BOLFlqXeWsuIyhyBKMNwAFTsEE7N5MgEb6eozBi"
            }
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                let filteredProductList = data.filter(item => Date.parse(item.publishDate) > Date.parse(this.state.productList.length > 0 ? this.state.productList[this.state.productList.length - 1].publishDate : "2020-11-11"));
                if(filteredProductList.length > 0) {
                    const productContainer = document.querySelector(containerElm);
                    productContainer.innerHTML += filteredProductList.map(item => {
                        const newProduct = new ProductComponent(item);
                        this.state.productList.push(newProduct);
                        return newProduct.render();
                    })
                        .reduce((prev, curr) => prev + curr, "");
                }
            })
    }
}
