export default class ProductComponent {
    constructor(product) {
        this.state = {
            id: product.id,
            productName: product.name,
            productPrice: product.price,
            productState: product.productState,
            productImg: product.img,
            category: product.category,
            imgAlt: product.imgAlt,
            publishDate: product.publishDate
        }
    }

    render() {
        return `
            <div class="item-container" id=product-${this.state.id}>
                <div class="img-container">
                    <img class="img" src=${ this.state.productImg } alt=${ this.state.imgAlt }>
                    <div class="hover-box">
                        <div class="item-btn">
                            <button><i class="far fa-heart"></i></button>
                            <a href="product.html"><i class="far fa-eye"></i></a>
                        </div>
                        <button class="main-btn">ADD TO CART</button>
                    </div>
                </div>
                <a class="name" href="product.html">${ this.state.productName }</a>
                <p class="price">₮ ${ this.state.productPrice }</p>
            </div>
        `
    }
}