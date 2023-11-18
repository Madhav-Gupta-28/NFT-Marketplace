"use client"
import React from 'react';
import Image from 'next/image';

import image from "../../img";


import Style from "./about.module.css";

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Subscribe from '@/components/SubscribeEmail/Subscribe';

const AboutUs = () => {

    const foundersArray = [
        {
            image : image.user5,
            position:"Co-founder and Chief Executive",
            name : 'Niamh Shea',
        },
        {
            image : image.user4,
            position:"Co-founder and Chief Executive",
            name : 'Danien Jame',
        },
        {
            image : image.user6,
            position:"Co-founder, Chairman",
            name : 'Orla Dwyer',
        },  {
            image : image.user8,
            position:"Co-Founder, Chief Strategy Officer",
            name : 'Dara Frazier',
        }
    ]

  return (
    <>
    <Navbar/>

    <div className={Style.AboutUs} >
        {/* First Div */}
        <div className={Style.AboutUs_div1} >
            <div>
                <div>
                    <span>👋</span>
                    <p>About Us</p>
                </div>
                <div>
                We’re impartial and independent, and every day we create distinctive, world-class programmes and content 
                which inform, educate and entertain millions of people in the around the world.
                </div>
            </div>
            <div>
                <Image src={image.nft_image_1} width={300} height={700} />
                <Image  src={image.nft_image_1} width={300} height={1000} />
                <Image src={image.nft_image_1} width={300} height={700} />

            </div>
        </div>

        {/* 2 Div */}
        <div>
            <div>
                <div>
                    <span></span>
                    <p>Founder</p>
                </div>
                <div>
                We’re impartial and independent, and every day we create distinctive, world-class programmes and content
                </div>
            </div>
            <div>

                {foundersArray.map((el,i) => (
                    <div>
                        <div>
                        <Image src={el.image} />
                        </div>

                        <div>
                            <h1>{el.name}</h1>
                            <p>{el.position}</p>
                        </div>
                       

                    </div>
                ))}

            </div>
        </div>
        {/* 3 div */}
        <div>
            <div>
                <h>
                🚀 Fast Facts
                </h>

                <p>We’re impartial and independent, and every day we create distinctive, world-class programmes and content</p>
            </div>

            <div>
                <div>
                    <h>10 million</h>
                    <p>Articles have been public around the world (as of Sept. 30, 2021)</p>
                </div>
                <div>
                    <h>100,000</h>
                    <p>Registered users account (as of Sept. 30, 2021)</p>
                </div>
                <div>
                    <h>220+</h>
                    <p>Countries and regions have our presence (as of Sept. 30, 2021)</p>
                </div>
            </div>
        </div>
        <div></div>
    </div>
    
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default AboutUs