import { useContext } from "react"
import Header from "../../components/header"
import ReviewItem from "../../components/reviewItem"
import { ListContext } from "../../App"


const HomePage = () => {
    const ctx = useContext(ListContext)

    return <>

        <div className="space-page-section box-100 space-page-without-title relative">
            <Header />
            <div className="space-page-section-ins space-page-wrapper relative" style={{ padding: "0" }}>
                <div className="space-content-section box-100 relative">
                    <div className="space-page-content-wrap relative">
                        <div className="space-page-content-box-wrap relative">
                            <div className="space-page-content page-template box-100 relative">
                                <section id="reviews">
                                    <div style={{ height: 45 }} aria-hidden="true" className="wp-block-spacer"></div>
                                    <div className="space-shortcode-wrap space-shortcode-4 relative">
                                        <div className="space-shortcode-wrap-ins relative">
                                            <div className="space-organizations-3-archive-items box-100 relative">
                                                {ctx.map((e, i) => {
                                                    return <ReviewItem id={e.id} image={e.imagePath} rank={i + 1} title={e.title} address={e.address} star={e.rating} website={e.website} />
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '45px' }} aria-hidden="true" className="wp-block-spacer" />
                                </section>
                                <section id="contact">
                                    <div className="wp-block-cover alignfull" style={{ minHeight: '900px', backgroundColor: "#f1f3f4" }}>
                                        {/* <span aria-hidden="true" className="wp-block-cover__background has-background-dim" /> */}
                                        <div className="wp-block-cover__inner-container" style={{ color: "black" }}>
                                            <div style={{ height: '25px' }} aria-hidden="true" className="wp-block-spacer" />
                                            <h2 className="wp-block-heading">Welcome</h2>
                                            <div style={{ height: '25px' }} aria-hidden="true" className="wp-block-spacer" />
                                            {/* <div style={{ height: '60px' }} aria-hidden="true" className="wp-block-spacer" />
                                            <h2 className="has-text-align-center wp-block-heading" style={{ fontSize: '51px', fontStyle: 'italic', fontWeight: 900, color: "#060915" }}>The Best Betting Offers</h2>
                                            <p className="has-text-align-center has-text-color" style={{ color: '#8e9496', fontStyle: 'normal', fontWeight: 100 }}>Get $20 Bonus with the first $40 bet every day!<br />Min bet $20. Max Bonus $20. One per customer per day. T&amp;C applies.</p>
                                            <div className="wp-block-buttons is-layout-flex">
                                                <div className="wp-block-button aligncenter"><a className="wp-block-button__link has-mercury-white-color has-mercury-second-background-color has-text-color has-background wp-element-button" href="https://project.mercurytheme.com/009/bonuses/">Get Bonus</a></div>
                                            </div> */}
                                            <p>Welcome to our premier platform dedicated to showcasing the finest hotel casinos in New Zealand. Get ready to embark on an unforgettable journey into the world of thrilling gaming, luxurious accommodations, and top-notch entertainment.</p>
                                            <p>Whether you're a seasoned gambler or simply seeking a remarkable getaway, our platform is your ultimate guide to discovering the best hotel casinos this captivating country has to offer. We bring you comprehensive information, expert reviews, and invaluable insights, ensuring that you make informed choices when planning your next casino adventure.</p>
                                            <p>Immerse yourself in the opulence and excitement of New Zealand's hotel casinos, where elegance meets thrill at every turn. Indulge in the sophisticated atmosphere, enjoy the finest cuisine prepared by renowned chefs, and savor signature cocktails crafted by talented mixologists.</p>
                                            <p>Our platform is your gateway to the world of dazzling casino games, from classic favorites to innovative creations. Feel the rush of adrenaline as you take a seat at the tables, where luck and skill intertwine in captivating games like blackjack, poker, roulette, and more. Or, embrace the excitement of the spinning reels on a vast selection of slot machines, each offering its own unique theme and generous rewards.</p>
                                            <p>Discover the hidden gems of New Zealand's hotel casinos, each with its own distinctive character and charm. From the vibrant city lights to breathtaking natural landscapes, these establishments are strategically located to offer you the best of both worlds – the thrill of gaming and the wonders of the surrounding attractions.</p>
                                            <p>No matter if you're planning a luxurious escape, a thrilling gaming experience, or an unforgettable celebration, our platform is your trusted companion. We strive to provide you with the most up-to-date information, insider tips, and exclusive offers to enhance your journey through New Zealand's hotel casino scene.</p>
                                            <p>So, get ready to roll the dice, spin the wheel, and experience the unparalleled excitement that awaits you. Start exploring our platform today and unlock the extraordinary world of New Zealand's hotel casinos. Your next unforgettable adventure begins here!</p>
                                            <div id="block-10" className="space-widget space-footer-area relative widget_block">
                                                <hr className="wp-block-separator has-alpha-channel-opacity" />
                                            </div>
                                            <div id="block-11" className="space-widget space-footer-area relative widget_block widget_media_image">
                                                <div className="wp-block-image">
                                                    <figure className="aligncenter size-full is-resized">
                                                        <img decoding="async" loading="lazy" src="/footer-safe-1.png" alt="" className="wp-image-166" width={250} height={40} sizes="(max-width: 250px) 100vw, 250px" />
                                                    </figure>
                                                </div>
                                            </div>
                                            {/* <div style={{ height: '45px' }} aria-hidden="true" className="wp-block-spacer" /> */}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    </>
}

export default HomePage
