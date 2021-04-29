
export const CartReducer=(state, action)=>{
    const { shoppingCart, totalprice, qty} = state;
    let product;
    let updatedPrice;
    let index;
    let updatedQty;

    switch(action.type){
        case 'ADD_TO_CART':
            const check = shoppingCart.find(product => product.id===action.id);
            if(check){
                return state;
            }
            else{
                product = action.product;
                product['qty']=1;
                updatedQty = qty+1;
                updatedPrice = totalprice+product.price;
                return {shoppingCart: [product, ...shoppingCart], totalprice: updatedPrice, qty: updatedQty};
            } 
            break;
        case 'INC':
            product = action.cart;
            product.qty=product.qty+1;
            updatedPrice = totalprice+ product.price;
            updatedQty = qty+1;
            index = shoppingCart.findIndex( cart => cart.id===action.id);
            shoppingCart[index] = product;
            return {shoppingCart: [...shoppingCart], totalprice: updatedPrice, qty: updatedQty};
            break;
        case 'DEC':
            product = action.cart;
            if(product.qty > 1){
                product.qty=product.qty-1;
                updatedPrice = totalprice - product.price;
                updatedQty = qty - 1;
                index = shoppingCart.findIndex( cart => cart.id===action.id);
                shoppingCart[index] = product;
                return {shoppingCart: [...shoppingCart], totalprice: updatedPrice, qty: updatedQty};
            }
            else {
                return state;
            }
            break;
        case 'DELETE':
            const filtered = shoppingCart.filter( cart => cart.id!==action.id);
            product = shoppingCart.find(cart => cart.id === action.id);
            updatedQty= qty - product.qty;
            updatedPrice  = totalprice - product.price* product.qty;
            return {shoppingCart: [...filtered], totalprice: updatedPrice, qty: updatedQty};
            break;
            
        default:
            return state;
        
    }

}