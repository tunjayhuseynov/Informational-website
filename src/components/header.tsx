import { Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { useContext, useRef, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';


import { ListContext } from '../App';
import { Link } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import clsx from 'clsx';

const RIGHT_LENGTH = 3;
const Header = () => {
    const [controlledSwiper, setControlledSwiper] = useState<SwiperType>();
    const ctx = useContext(ListContext)
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setInit] = useState(false)
    const [disableLeft, setDisableLeft] = useState<boolean>(true)
    const [disableRight, setDisableRight] = useState<boolean>(false)

    return <header className='animate__animated animate__flipInX'>
        <Swiper
            modules={[Autoplay]}
            controller={controlledSwiper ? { control: controlledSwiper } : undefined}
            onSwiper={(s) => setControlledSwiper(s)}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
            navigation={(prevRef.current && nextRef.current) ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            } : false}
            onInit={() => setInit(true)}
            onSlideChange={(swiper) => {
                if (swiper.activeIndex === 0) {
                    setDisableLeft(true)
                } else if (disableLeft) setDisableLeft(false)

                if (swiper.activeIndex === RIGHT_LENGTH - 1) {
                    setDisableRight(true)
                } else if (disableRight) setDisableRight(false)
            }}
            className='relative'
        >
            <div ref={prevRef} className={clsx("hidden sm:block absolute left-10 top-1/2 -translate-y-1/2 text-4xl text-white z-20 cursor-pointer", { "opacity-20": disableLeft })} onClick={() => controlledSwiper?.slidePrev()}>
                <AiOutlineLeft />
            </div>
            <div ref={nextRef} className={clsx('hidden sm:block absolute right-10 top-1/2 -translate-y-1/2 text-4xl text-white z-20 cursor-pointer', { "opacity-20": disableRight })} onClick={() => controlledSwiper?.slideNext()}>
                <AiOutlineRight />
            </div>
            {ctx.slice(0, RIGHT_LENGTH).map((s) => {
                return <SwiperSlide key={s.id}>
                    <div className="wp-block-cover !pb-16">
                        <span aria-hidden="true" className="wp-block-cover__background has-background-dim !opacity-60">
                        </span>
                        <img decoding="async"
                            width="2560" height="1707" className="wp-block-cover__image-background wp-image-426" alt="" src={s.imagePath} data-object-fit="cover" sizes="(max-width: 2560px) 100vw, 2560px" />
                        <div className="wp-block-cover__inner-container">
                            <div aria-hidden="true" className="wp-block-spacer h-[80px] sm:h-[120px]"></div>

                            <h1 className="has-text-align-center wp-block-heading header">{s.title}</h1>

                            <div className='flex justify-center py-5'>
                                <div className="space-organizations-3-archive-item-rating-box relative">
                                    <div className="star-rating">
                                        {Array(Math.floor(s.rating)).fill(<div className="star star-full" aria-hidden="true">
                                        </div>)}
                                        {!Number.isInteger(s.rating) && <div className="star star-half" aria-hidden="true">
                                        </div>}
                                    </div>
                                    <span className='!text-white'>{s.rating.toFixed(1)}</span>
                                </div>
                            </div>
                            <div className='flex justify-center h-[200px]'>
                                <p className="has-text-align-center has-text-color w-2/3 text-center text-sm sm:text-lg" style={{ color: "#FFFFFF", fontStyle: "normal", fontWeight: 100 }}>
                                    {s.review.split(".")?.slice(0, 2).join(".")}
                                </p>
                            </div>
                            <div className='w-full flex justify-center mt-2'>
                                <Link to={`/reviews/${s.id}`} title="Read More">
                                    <div className='max-w-[180px] bg-main text-black py-3 px-8 rounded-[20px] text-center flex space-x-[5px] item-center justify-center'>
                                        <i className="fas fa-arrow-alt-circle-right" aria-hidden="true"></i>
                                        <span>Book now</span>
                                    </div>
                                </Link>
                            </div>

                            {/* <div className="wp-block-image">
                                <figure className="aligncenter size-full is-resized">
                                    <img decoding="async" loading="lazy" src="//e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9.webp" alt="" className="wp-image-432" width="100" height="100" srcSet="//e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9.webp 200w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-150x150.webp 150w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-40x40.webp 40w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-50x50.webp 50w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-100x100.webp 100w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-120x120.webp 120w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-135x135.webp 135w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-32x32.webp 32w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-80x80.webp 80w" sizes="(max-width: 100px) 100vw, 100px" />
                                </figure>
                            </div> */}
                            {/* <div style={{ height: "100px" }} aria-hidden="true" className="wp-block-spacer"></div> */}
                        </div>
                    </div>
                </SwiperSlide>
            })}
            {/* 
            <SwiperSlide>
                <div className="wp-block-cover">
                    <span aria-hidden="true" className="wp-block-cover__background has-background-dim">
                    </span>
                    <img decoding="async"
                        width="2560" height="1707" className="wp-block-cover__image-background wp-image-426" alt="" src="/header.jpg" data-object-fit="cover" sizes="(max-width: 2560px) 100vw, 2560px" />
                    <div className="wp-block-cover__inner-container">
                        <div style={{ height: "120px" }} aria-hidden="true" className="wp-block-spacer"></div>

                        <h1 className="has-text-align-center wp-block-heading header">Experience the Thrill: <br /> New Zealand's Premier Hotel Casinos</h1>

                        <p className="has-text-align-center has-text-color" style={{ color: "#b2bec3", fontStyle: "normal", fontWeight: 100 }}>With a combination of luxurious accommodations, world-class dining options, vibrant casino experiences, and a range of amenities, hotel casinos aim to create a memorable and immersive environment where guests can enjoy a complete entertainment package during their stay.</p>

                        <div className="wp-block-image">
                            <figure className="aligncenter size-full is-resized">
                                <img decoding="async" loading="lazy" src="//e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9.webp" alt="" className="wp-image-432" width="100" height="100" srcSet="//e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9.webp 200w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-150x150.webp 150w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-40x40.webp 40w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-50x50.webp 50w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-100x100.webp 100w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-120x120.webp 120w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-135x135.webp 135w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-32x32.webp 32w, //e2d5j2b4.stackpathcdn.com/009/wp-content/uploads/sites/13/2022/12/icon-demo9-80x80.webp 80w" sizes="(max-width: 100px) 100vw, 100px" />
                            </figure>
                        </div>
                        <div style={{ height: "120px" }} aria-hidden="true" className="wp-block-spacer"></div>
                    </div>
                </div>
            </SwiperSlide> */}
        </Swiper>
    </header>
}


export default Header;