import CardOne from "../cards/CardOne";
import CardTwo from "../cards/CardTwo";

import { Link } from "react-router-dom";
import data from "../data.json";
import CardSwiper from "../components/CardSwiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Moon = ({ showSwiper, setShowSwiper, selectedImageID, handleClick }) => {
    return (
        <div className="w-full h-auto bg-neutral-800 p-[10%]">
            <div className="grid grid-cols-2 gap-5 mb-10 max-sm:grid-cols-1 max-sm:my-20 max-sm:gap-10">
                <CardOne
                    title={'Moon'}
                    client={'Emily Patel'}
                    year={2032}
                >
                    {
                        data.moonData.filter(item => item.category === 'moOne').map(({ id, img }) => {
                            return (
                                <LazyLoadImage
                                    key={id}
                                    src={img}
                                    alt="image"
                                    className="w-full h-auto object-cover cursor-pointer hover:opacity-80 duration-300 max-sm:w-full max-sm:h-60"
                                    delayTime={300}
                                    effect="blur"
                                    onClick={() => handleClick(id)}
                                />
                            )
                        })
                    }
                </CardOne>
                <CardTwo>
                    {
                        data.moonData.filter(item => item.category === 'moTwo').map(({ id, img }) => {
                            return (
                                <LazyLoadImage
                                    key={id}
                                    src={img}
                                    alt="image"
                                    className="w-full h-auto object-cover cursor-pointer hover:opacity-80 duration-300 max-sm:w-full max-sm:h-60"
                                    delayTime={300}
                                    effect="blur"
                                    onClick={() => handleClick(id)}
                                />
                            )
                        })
                    }
                </CardTwo>
            </div>
            <div className="w-full h-auto flex justify-between">
                <Link
                    to='/tubes'
                    className="text-white text-xl hover:opacity-80 duration-300"
                >
                    &laquo; Prev Project
                </Link>
                <Link
                    to='/arches'
                    className="text-white text-xl hover:opacity-80 duration-300"
                >
                    Next Project &raquo;
                </Link>
            </div>
            {
                showSwiper ? (
                    <CardSwiper
                        data={data.moonData}
                        setShowSwiper={setShowSwiper}
                        selectedImageID={selectedImageID}
                    />
                ) : (
                    ''
                )
            }
        </div>
    )
}

export default Moon;