// todo reducer recebe como parâmetro o estado anterior e a action despachada
// o carrinho é inicializado com [], ou seja, nenhum produto no carrinho
export default function cart(state = [], action) {
  // verifiac o tipo da action sendo despachada
  switch (action.type) {
    // se for do tipo ADD_PRODUCT_TO_CART
    case 'ADD_PRODUCT_TO_CART':
      // copio todos os produtos que já estão no carrinho
      // e adiciono o produto que está vindo pela action
      return [...state, action.product];
    // se for qlqr outra action
    default:
      // mantém o estado atual
      return state;
  }
}
