import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize}</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

// a função connect pode receber o estado global do redux
// retornar quais valores queremos compartilhar com os demais componentes
// nesse caso, compartilharemos a quantidade de itens no carrinho com o header

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
