const routes = {
    LOGIN: 'login',
    DASHBOARD: 'dashboard',
    SIGNUP: 'signUp',
    CHECKOUT: 'checkout'
};

export const cart = [];



let total = 0;
function setTotal(value) {
    total = value;
}

export { total, setTotal };

export const productDetailsData = [
    {
        id: 1,
        title: 'Pisces Asian fit',
        imgUrl: '/images/product-1.webp',
        description: '',
        price: 10,
    },
    {
        id: 2,
        title: 'Koko head',
        imgUrl: '/images/product-2.webp',
        description: '',
        price: 20,
    },
    {
        id: 3,
        title: 'Honi',
        imgUrl: '/images/product-3.webp',
        description: '',
        price: 30,
    },
    {
        id: 4,
        title: 'Crater Rim',
        imgUrl: '/images/product-4.webp',
        description: '',
        price: 40,
    },

    {
        id: 5,
        title: 'Diesel Men Eyeglass',
        imgUrl: 'https://cwcdn.coolwinks.com/shared/images/blog/designer-eyeglass-frames.jpg',
        description: '',
        price: 50,
    },
    {
        id: 6,
        title: 'Diesel Women Eyeglass',
        imgUrl: 'https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_180,q_auto:good,w_360/v1/product/front/white/mt6567.jpg',
        description: '',
        price: 60,
    },
  

]

export default routes;