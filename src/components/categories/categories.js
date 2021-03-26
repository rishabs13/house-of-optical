import React from 'react';
import './categories.css';

const categoriesData = [
    {
        name: 'Eyeglasses',
        img: '/images/eyeglasses.jpg',
    },
    {
        name: 'Sunglasses',
        img: '/images/sunglasses.jpeg',
    },
    {
        name: 'Blue Light Block glasses',
        img: '/images/blue-light.jpeg',
    },
    {
        name: 'Clip on glasses ',
        img: '/images/clip-on.jpg',
    },
    {
        name: 'Prescription glasses',
        img: '/images/prescreption.webp',
    }
]


function Categories() {
    return (
        <>
            <div className="category_container">
                <h1 className="category_container-main_title">
                    Categories
                </h1>
                <div className="category_container-inner">
                    {categoriesData.map(category => {
                        return (<div className="category_container-category">
                            <img className="category_container-image" src={category.img} alt={category.name} />
                            <h3 className="category_container-title">{category.name}</h3>
                        </div>)
                    })}
                </div>
            </div>
        </>
    );
}

export default Categories;