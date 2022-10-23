import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt=""/>

            <div className="home_row">
                <Product 
                    id="443587392" 
                    title='Secretlab Omega 2020 Dark Knight Gaming Chair - Reclining, Comfortable - High Back Computer Chair with Adjustable Armrests - Headrest & Lumbar Pillow - Black - Synthetic Leather' 
                    price={569.00} 
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/511xvHg10YL._AC_UL480_FMwebp_QL65_.jpg" 
                    rating={3}
                />
                <Product 
                    id="238749283" 
                    title='Logitech G102 USB Light Sync Gaming Mouse with Customizable RGB Lighting, 6 Programmable Buttons, Gaming Grade Sensor, 8K DPI Tracking, 16.8mn Color, Light Weight - Black' 
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/61UxfXTUyvL._SY355_.jpg" 
                    rating={5}
                />
            </div>

            <div className="home_row">
                <Product 
                    id="38240922"
                    title='ASUS TUF F15 144Hz Gaming Laptop, 15.6" FHD, Intel Core i5-10300H, 16GB RAM, 512GB NVMe SSD, NVIDIA GeForce GTX 1650, RGB Backlit Keyboard,Windows 10 Home' 
                    price={878.99}
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71-jd5R6c7L._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                />
                <Product 
                    id="439583099"
                    title='Audio-Technica ATH-M50xBT2 Wireless Over-Ear Headphones'
                    price={199.00}
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71JHF5i937L._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4}
                />
                <Product 
                    id="439350097"
                    title='Logitech G PRO Mechanical Gaming Keyboard, Ultra Portable Tenkeyless Design, Detachable Micro USB Cable, 16.8 Million Color LIGHTSYNC RGB Backlit Keys'
                    price={119.99}
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51K1mE5uVyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    rating={4}
                />
            </div>

            <div className="home_row">
                <Product 
                    id="328729845"
                    title='LeadsaiL Extended Gaming Mouse Pad (32X12X0.16In), Large Non-Slip Rubber Base Mousepad with Stitched Edges, Waterproof Keyboard Mouse Mat Desk Pad for Work, Game, Office, Home (Large Red)'
                    price={9.99}
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Jdcjds4uL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    rating={4}
                />
            </div>
        </div>
    </div>
  )
}

export default Home