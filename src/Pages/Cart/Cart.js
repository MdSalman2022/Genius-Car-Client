import React from 'react';
import './Cart.css'
import img from '../../assets/images/checkout/checkout.png'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';
import { TbArrowBackUp } from 'react-icons/tb';
import service from '../../assets/images/services/1.jpg'

const Cart = () => {
    return (
        <div className='py-10 mx-20 '>
            <div id="slide1" className="carousel-item relative mx-auto w-full">
                <div className='hero-img '>
                    <img src={img} alt="" className="object-cover w-full h-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 pt-10 top-1/3">
                    <h1 className='text-3xl font-bold text-white'>
                        Cart Details
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-1/5 left-20 pt-10 top-1/2">
                    <p className='text-xl text-orange-600'>Home - Product Details</p>
                </div>
            </div>

            <div className="cart-products py-20">
                <div className="flex items-center gap-36 py-5">
                    <div className='flex items-center gap-5'>
                        <button className="btn btn-error rounded-full"><ImCross className='text-sm' /></button>
                        <img src={service} alt="" className='w-36' />
                    </div>
                    <div>
                        <p>Martha Knit Top</p>
                        <p>Color: Green</p>
                        <p>Size: S</p>
                    </div>
                    <p>$25.00</p>
                    <p>22-10-2022</p>
                    <button className="btn btn-warning">Approve</button>
                </div>
                <div className="flex items-center gap-36 py-5">
                    <div className='flex items-center gap-5'>
                        <button className="btn btn-error rounded-full"><ImCross className='text-sm' /></button>
                        {/* <RiCloseCircleFill className='text-4xl' /> */}
                        <img src={service} alt="" className='w-36' />
                    </div>
                    <div>
                        <p>Martha Knit Top</p>
                        <p>Color: Green</p>
                        <p>Size: S</p>
                    </div>
                    <p>$25.00</p>
                    <p>22-10-2022</p>
                    <button className="btn btn-warning">Approve</button>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex justify-start'>
                    <button className="btn btn-success"><TbArrowBackUp className='mr-5 text-xl' /> Continue Shopping</button>
                </div>
                <div className='flex justify-end'>
                    <button className="btn btn-warning"><RiDeleteBin6Line className='mr-5 text-xl' /> Clear Shopping Cart</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;