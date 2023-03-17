import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Backdrop from './Backdrop/Backdrop';
import { VscSearch } from 'react-icons/vsc';
import Fuse from 'fuse.js';

import './Search.css';
import { useGetAllProductsQuery } from '../../redux/RTK/productsApi';
import styled from 'styled-components';
import SizeButtonsModal from './sizeButtonModal';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};



export default function Search({ searching, setSearching }) {

    const [width, setWidth] = useState(0);
    const [query, setQuery] = useState('');
    const [searchedItems, setSearchedItems] = useState([]);
    const [selectedSize, setSelectedSize] = useState("None");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [qty, setQty] = useState(0);


    const handleSearch = (e) => {
        e.preventDefault();

        setQuery(e.target.value);
    }
    const { data } = useGetAllProductsQuery('');
    const searchCarousel = useRef();

    useEffect(() => {
        const fuse = new Fuse(data, {
            keys: [
                'drop',
                'filter',
                'title'
            ],
            includeScore: true
        });

        try {
            const results = fuse.search(query);
            if (data.length > 0 && query.length > 2 && results?.length > 0) {
                setSearchedItems(results)
            } else {
                setSearchedItems([]);
            }
        } catch (error) {
            console.log(error)
        }




    }, [query])

    useEffect(() => {
        if (searchCarousel.current) {
            setWidth(searchCarousel.current.scrollWidth - searchCarousel.current.offsetWidth);
        }
    }, [width, searchCarousel, query]);


    const setSizeAndSizeIndex = (s) => {
        setSelectedSize(s.size);
        setSelectedIndex(s.index);
    };

    return (
        <>
            <Backdrop onClick={() => setSearching(!searching)}>

                <motion.div
                    className="searchContainer"
                    variants={dropIn}
                    animate="visible"
                    initial="hidden"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='searchbar'>
                        <VscSearch />
                        <input className='searchholder' placeholder='Search products by title, category, or gender' value={query} onChange={handleSearch} />
                    </div>
                    <img
                        onClick={() => setSearching(!searching)}
                        className="cancel-icon"
                        src="https://ontallme.sirv.com/icons/cancel_icon.svg"
                    />


                    {searchedItems.length > 0 && (
                        <motion.div className='searchedWrapper' ref={searchCarousel}>
                            <motion.div className="SearchWrapperCarousel" layout whileTap={{ cursor: "grabbing" }}>
                                <motion.div className='innerSearchWrapperCarousel' dragConstraints={{ right: 0, left: -width }} drag="x" >

                                    {searchedItems?.map((i) => (
                                        <>

                                            <div className='itemCard'>

                                                <div className='imageWrapper'>
                                                    <img className='main_img' src={i.item.main_img} />
                                                </div>
                                                <div className='stockContainer'>
                                                    {/* <hr className='seperator' /> */}
                                                    <p className='status'>Sizes</p>
                                                </div>
                                                <SizeButtonsModal
                                                    qty={qty}
                                                    buttonClick={setSizeAndSizeIndex}
                                                    selectedSize={selectedSize}
                                                    data={i.item}
                                                />

                                                <div className='priceContainer'>

                                                    <p className='priceTitle'>Price</p>

                                                </div>
                                                <div className='bottom'>
                                                    <p className='price'>${i.item.price}</p>
                                                    <hr className='seperator' />
                                                </div>

                                            </div>
                                        </>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </Backdrop>
        </>
    )
}


// <h1>
                            //     {i.item.title}
                            // </h1>