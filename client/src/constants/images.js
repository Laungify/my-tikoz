// import all images here and export them like import logo from '../assests/logo.png'
//export it like export default {logo}

import logo from '../assets/logo.png';
import bed from '../assets/bed.jpg';
import food from '../assets/food.jpg';
import hiking from '../assets/hiking.jpg';
import musicEvent from '../assets/musicEvent.jpg';
import {CgProfile} from  'react-icons/fa'

const images =  {
    logo,
    bed,
    food,
    hiking,
    musicEvent,
    CgProfile,
}

const getImages = () => {
    return images
}
export default getImages