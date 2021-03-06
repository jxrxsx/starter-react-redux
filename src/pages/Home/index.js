import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    // formata o preço dos produtos já antes de renderizar
    // para evitar multiplas chamadas a função de formatação
    // toda vez que o componente renderizar
    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProductToCart = (product) => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.price}</span>

            <button
              type="button"
              onClick={() => this.handleAddProductToCart(product)}
            >
              <div>
                <MdShoppingCart size={16} color="#FFF" /> 3
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);
