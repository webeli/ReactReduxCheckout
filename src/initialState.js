import glykol from './assets/glykol.jpg';
import oljefilter from './assets/oljefilter.jpg';

export default {
    cart: {
        key1: {
            image: glykol,
            title: 'Blå glykol, koncentrerad',
            desc: 'Castrol Radicool',
            price: 296,
            amount: 1,
            inStock: true
        },
        key2: {
            image: oljefilter,
            title: 'Oljefilter',
            desc: 'Mahle',
            price: 129,
            amount: 1,
            inStock: true
        }
    },
    options: {
      delivery: {
        text: null,
        price: null
      },
      payment: {
        text: null,
        price: null
      }
    }
};
