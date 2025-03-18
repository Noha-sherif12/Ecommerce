import Slider from "react-slick";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetHome, actGetHomeItems } from "@store/Home/homeSlice";
import { useTranslation } from 'react-i18next';


const Home = () => {
  const dispatch = useAppDispatch();
  const { homeData, homeItemsData } = useAppSelector((state) => state.homeSlice);
  const [ t ] = useTranslation();

  useEffect(() => {
    dispatch(actGetHome());
    dispatch(actGetHomeItems());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800, 
  };

  return (
    <>
        <div>
          <div style={{ width: "80%" , margin: "auto"}}>
          <Slider {...settings}>
      {homeData.map((item) => (
        <div key={item.id}>
          <img
           
            src={item.img}
            alt={`Slide ${item.id}`}
            style={{ width: "500px", height: "400px" }}
          />
        </div>
      ))}
    </Slider>
          </div>
      <h2 style={{marginTop: "40px", textAlign:"center", fontWeight:"bold"}}>{t("home.shop")}</h2>
    
    </div>
    <div className="container mt-5">
      <div className="row">
    {homeItemsData.map((item) => (
      <div key={item.id} className="col-md-4 d-flex flex-column align-items-center px-0">
        <img
          src={item.img}
          alt={item.title}
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto", marginBottom: "20px"}}
        />
      </div>
    ))}
  </div>
</div>

    </>

   
  );
};

export default Home;