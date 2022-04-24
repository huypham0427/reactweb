import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FcCancel } from 'react-icons/fc';
import { FaRestroom } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaDumbbell } from 'react-icons/fa';
import { IoBarbellSharp } from 'react-icons/io5'; 
import { GiWeightLiftingUp } from 'react-icons/gi'; 
import BookForm from './BookForm';
import {useState,useEffect} from'react'
import Button from '@mui/material/Button';
import './GymPages.css'


export function GymPages() {
  
  const[modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal)
    }
  
  return (

    <div>
        <div className='gym-name'>
            <h2>Gym A</h2>
            <FaStar /> 5 Location
        </div>


        <Box sx={{ width: 600, height: 400, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={2} gap={8}>
                {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
        </Box>

        <h2 className='about-gym'>About Gym</h2>
        <div className='info-about'>
            <h3>
            <FaDumbbell /> Dumbell
            <br></br>
            <IoBarbellSharp /> Barbell
            <br></br>
            <GiWeightLiftingUp /> Squat machine
            <br></br>
            <FcCancel /> No pet allowed
            <br></br>
            <FaRestroom /> Restroom  available 
            </h3>

            
        </div>

        <button 
        onClick={toggleModal}
        className='btn-modal'>
          Open
        </button>

        <div className="modal">
          <div className="overlay"></div>
          {/* <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>Hello World</p>
            <button className='close-modal'
            onCanPlayThrough={toggleModal}>
              CLOSE
            </button>
          </div> */}
        </div>

        {/* <BookForm /> */}
    </div>

  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=409&q=80',
    title: 'Kitchen',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  //   title: 'Blinds',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
  //   title: 'Chairs',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
  //   title: 'Laptop',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
  //   title: 'Doors',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
  //   title: 'Coffee',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
  //   title: 'Storage',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
  //   title: 'Candle',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
  //   title: 'Coffee table',
  // },
];
