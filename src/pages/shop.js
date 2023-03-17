import React, { useRef, useEffect, useState } from "react";
import { Campaign, Navbar, Spinner } from "../components";
import ShopCard from "../components/ShopCard";
import { motion, AnimatePresence } from "framer-motion";
import { useGetProductByCategoryQuery } from "../redux/RTK/productsApi";
import "./shop.css";
import { useLocation } from "react-router-dom";
import { CampaignContainer } from "../components/Campaign/styles/Campaign";

export default function Shop() {

  const location = useLocation();
  const [drop, setDrop] = useState("");
  useEffect(() => {
    setDrop(location.pathname.split("/")[2]);
  }, [drop, location]);

  const { data, isLoading, error } = useGetProductByCategoryQuery(drop); //error

  //animation
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);
  const id = React.useRef(null);
  const ref = useRef(null);
  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);

  }
  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1)
    }, 1000)
  }, [])

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer])

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <img className="loader-img" src="https://ontallme.sirv.com/Group.png" alt="Preloader" />
        </div>
      ) : (
        <>
          <Navbar />

          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <motion.div className="gridContainer">
                <motion.div className="gridWrapper" layout>
                  {data?.map((product) => {
                    return (
                      <>
                        <AnimatePresence>
                          <ShopCard product={product} />
                        </AnimatePresence>
                      </>
                    );
                  })}
                </motion.div>
              </motion.div>
            </>
          )}
        </>
      )}

    </>
  );
}


