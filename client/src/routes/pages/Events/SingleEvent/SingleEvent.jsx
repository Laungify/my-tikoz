import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { FcLike, FcShare, FcPlus, FcMinus } from "react-icons/fc";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import {
  NavBar,
  EventsButtons,
  CartIcon,
  Button,
  Footer,
  ToggledSourceController,
} from "../../../../common/sharedComponents";

import { useHrOnSmallScreens } from "../../../../common/customHooks";

import { cartSelector } from "../../../../features/selectors";

import "./SingleEvent.scss";
import { onAddItemsToCart } from "../../../../features";
const SingleEvent = () => {
  const id = useParams(); //returns an object {id: "idValue"} of a string
  // find idValue
  const idVal = Object.values(id);
  const events = useSelector((state) => state.eventsDataReducer.eventsData);
  // find the  event matching the id from the params as an integer
  const event = events.find((event) => event.id === Number(idVal[0]));

  const [toggleSourceCart, setToggleSourceCart] = useState("cart");
  const [toggleSourceSeat, setToggleSourceSeat] = useState("selectSeat");
  const [toggleVal, setToggleVal] = useState(true);

  const dispatch = useDispatch();

  const addItemsToCart = (event) => async (dispatchFunc) => {
    try {
      setTimeout(() => {
        dispatchFunc(onAddItemsToCart(event));
        toast.success("Add to Cart Successful!");
      }, 100);
    } catch (error) {
      console.error(error);
      toast.error("Add to Cart Failed!");
    }
  };

  useEffect(() => {
    addItemsToCart();
  }, [addItemsToCart]);

  // change the ddivider to horizontal when screen resized to less than 767
  const isHr = useHrOnSmallScreens();

  return (
    <>
      <NavBar />
      <div className="event__wrapper">
        <div className="buttons">
          <EventsButtons />
        </div>
        <div className="event__image">
          <img src={event.imageUrl} alt="ticket image" />
        </div>
        <div className="event__buttons">
          <div className="event__title">
            <h3>FEB 08</h3>
            <p>{event.title}</p>
          </div>
          <div className="event__share-likes">
            <FcLike className="like" />
            <FcShare className="share" />
          </div>
        </div>
        <div className="event__info">
          <div className="event__info-text">
            <p>
              Too Early for Birds (TEFB) is a series of Kenyan theatre shows
              that stages diverse stories from Kenyan history. Founded in early
              2017 by Kenyan performers Abu Sense and Ngartia, the show and its
              title were inspired by the work of historian and blogger
              Owaahh.[1][2] The production is experimental, mainly employing
              theatrical storytelling and borrowing from other elements like
              reenactments and music. Too Early for Birds is directed by Wanjiku
              Mwawuganga and features a number of upcoming and established
              Kenyan actors in the cast. The series has received wide acclaim
              among critics and audiences.[3]
            </p>
            <div className="select__seats">
              <div className="regular">
                <h3>REGULAR</h3>
                <div className="regular__info">
                  <p>DAY 1</p>
                  <div className="inc__dec-btn">
                    <FcPlus className="seat-btn" />
                    <FcMinus className="seat-btn" />
                  </div>
                  <ToggledSourceController
                    toggleVal={toggleVal}
                    toggleSource={toggleSourceSeat}
                    setToggleVal={setToggleVal}
                    setToggleSource={setToggleSourceSeat}
                  >
                    <Button
                      classType="seat"
                      onClick={() => handleSourceChange("selectSeat")}
                    >
                      SELECT SEAT
                    </Button>
                  </ToggledSourceController>
                </div>
                <div className="regular__info">
                  <p>DAY 1</p>
                  <div className="inc__dec-btn">
                    <FcPlus className="seat-btn" />
                    <FcMinus className="seat-btn" />
                  </div>
                  <ToggledSourceController
                    toggleVal={toggleVal}
                    toggleSource={toggleSourceSeat}
                    setToggleVal={setToggleVal}
                    setToggleSource={setToggleSourceSeat}
                  >
                    <Button
                      classType="seat"
                      onClick={() => handleSourceChange("selectSeat")}
                    >
                      SELECT SEAT
                    </Button>
                  </ToggledSourceController>
                </div>
                <div className="regular__info">
                  <p>DAY 1</p>
                  <div className="inc__dec-btn">
                    <FcPlus className="seat-btn" />
                    <FcMinus className="seat-btn" />
                  </div>
                  <ToggledSourceController
                    toggleVal={toggleVal}
                    toggleSource={toggleSourceSeat}
                    setToggleVal={setToggleVal}
                    setToggleSource={setToggleSourceSeat}
                  >
                    <Button
                      classType="seat"
                      onClick={() => handleSourceChange("selectSeat")}
                    >
                      SELECT SEAT
                    </Button>
                  </ToggledSourceController>
                </div>
              </div>
              <div className="divider">
                {isHr === true ? (
                  <hr className="horizontal_divider" />
                ) : (
                  <div className="divider"></div>
                )}
              </div>
              <div className="regular">
                <h3>VIP</h3>
                <div className="regular__info">
                  <p>DAY 1</p>
                  <div className="inc__dec-btn">
                    <FcPlus className="seat-btn" />
                    <FcMinus className="seat-btn" />
                  </div>
                  <ToggledSourceController
                    toggleVal={toggleVal}
                    toggleSource={toggleSourceSeat}
                    setToggleVal={setToggleVal}
                    setToggleSource={setToggleSourceSeat}
                  >
                    <Button
                      classType="seat"
                      onClick={() => handleSourceChange("selectSeat")}
                    >
                      SELECT SEAT
                    </Button>
                  </ToggledSourceController>
                </div>
                <div className="regular__info">
                  <p>DAY 1</p>
                  <div className="inc__dec-btn">
                    <FcPlus className="seat-btn" />
                    <FcMinus className="seat-btn" />
                  </div>
                  <ToggledSourceController
                    toggleVal={toggleVal}
                    toggleSource={toggleSourceSeat}
                    setToggleVal={setToggleVal}
                    setToggleSource={setToggleSourceSeat}
                  >
                    <Button
                      classType="seat"
                      onClick={() => handleSourceChange("selectSeat")}
                    >
                      SELECT SEAT
                    </Button>
                  </ToggledSourceController>
                </div>
                <div className="regular__info">
                  <p>DAY 1</p>
                  <div className="inc__dec-btn">
                    <FcPlus className="seat-btn" />
                    <FcMinus className="seat-btn" />
                  </div>
                  <ToggledSourceController
                    toggleVal={toggleVal}
                    toggleSource={toggleSourceSeat}
                    setToggleVal={setToggleVal}
                    setToggleSource={setToggleSourceSeat}
                  >
                    <Button
                      classType="seat"
                      onClick={() => handleSourceChange("selectSeat")}
                    >
                      SELECT SEAT
                    </Button>
                  </ToggledSourceController>
                </div>
              </div>
            </div>
          </div>
          <div className="cart">
            <div className="cart__add-price">
              <h3>${event.price}</h3>
              <Button
                classType="activity"
                color="red"
                onClick={() => dispatch(addItemsToCart(event))}
              >
                ADD TO CART
              </Button>
            </div>
            <div className="cart__info">
              <h3>VIEW CART</h3>
              <ToggledSourceController
                toggleVal={toggleVal}
                toggleSource={toggleSourceCart}
                setToggleVal={setToggleVal}
                setToggleSource={setToggleSourceCart}
              >
                <CartIcon onClick={() => handleSourceChange(toggleSourceCart)} />
              </ToggledSourceController>
            </div>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={true} />
      </div>
      <Footer />
    </>
  );
};

export default SingleEvent;
