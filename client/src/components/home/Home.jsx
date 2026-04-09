

//components
import NavBar from "./NavBar";
import Banner from "./Banner" ;
import Slide from "./slide";
import MidSlide from "./midSlide";
import MidSection from "./midSection";

import { Box, styled } from '@mui/material' ;

import { getProducts } from '../../redux/actions/productAction';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
    padding: 10px 10px;
    background: #F2F2F2;
`

const Home = () => {

    const { products } = useSelector(state => state.getProducts)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return(
        <>
            <NavBar />
             <Component>
                  <Banner />
                  <MidSlide products={products} title="Deal of the Day" timer={true}/>
                  <MidSection />
                  <Slide products={products} title="Discount for You" timer={false}/>
                  <Slide products={products} title="Suggestion Items" timer={false}/>
                  <Slide products={products} title="Top Selection" timer={false}/>
                  <Slide products={products} title="Recommended Option" timer={false}/>
                  <Slide products={products} title="Trending Offers" timer={false}/>
                  <Slide products={products} title="Season's Top Picks" timer={false}/>
                  <Slide products={products} title="Top Deals on Accessories" timer={false}/>

             </Component>
        </>
    )
}

export default Home;