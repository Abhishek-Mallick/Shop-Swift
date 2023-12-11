import React, {useState} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({data}) => {
    const [activeIndex,setActiveIndex]=useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 4 },
    1024: { items: 5.5 },
  };

//   const slidePrev=()=>setActiveIndex(activeIndex-1);
//   const slideNext=()=>setActiveIndex(activeIndex+1);

const slidePrev = () => {
    const newIndex = activeIndex - 1;
    setActiveIndex(newIndex < 0 ? 0 : newIndex);
  };
  
  const slideNext = () => {
    const newIndex = activeIndex + 1;
    setActiveIndex(newIndex >= items.length ? items.length - 1 : newIndex);
  };
  

  const syncActiveIndex=({item})=>setActiveIndex(item);

  const items = data.slice(activeIndex,activeIndex+10).map((item) => <HomeSectionCard product={item}/>);

  return (
    <div className=" border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length-5 &&
        <Button
          onClick={slideNext}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
        }

        {activeIndex !== 0 && (
        <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50 bg-[]"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
