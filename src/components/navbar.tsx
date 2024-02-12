import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ListContext } from "../App";
import clsx from "clsx";


const Navbar = () => {
    const [mobileBar, setMobileBar] = useState(false)
    const ctx = useContext(ListContext)

    return <>
        <div className="space-header-height relative">
            <div className="space-header-wrap space-header-float relative">
                <div className="space-header relative">
                    <div className="space-header-ins space-wrapper relative">
                        <div className="space-header-logo box-25 left relative">
                            <div className="space-header-logo-ins relative">
                                <a href="/" title="Mercury">
                                    <img width="205" height="40" src="/logo.svg" className="attachment-mercury-custom-logo size-mercury-custom-logo" alt="Mercury" decoding="async" loading="lazy" sizes="(max-width: 205px) 100vw, 205px" />
                                </a>
                            </div>
                        </div>
                        <div className="space-header-menu box-75 left relative">
                            <ul id="menu-main-menu" className="main-menu">
                                <li id="menu-item-371" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-145 current_page_item menu-item-371">
                                    <Link to="/" aria-current="page">Home</Link>
                                </li>
                                <li id="menu-item-371" className="  menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-409">
                                    <Link to="/reviews" aria-current="page">Reviews</Link>
                                    <ul className="sub-menu">
                                        {ctx.slice(0, 4).map(s => (<li key={s.id} className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-363 !text-black">
                                            <Link to={"/reviews/" + s.id} className="after:invisible">{s.title}</Link>
                                        </li>))}
                                    </ul>
                                </li>
                                <li id="menu-item-371" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-145 current_page_item menu-item-371">
                                    <Link to="/about-us" aria-current="page">About us</Link>
                                </li>
                                <li id="menu-item-371" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-145 current_page_item menu-item-371">
                                    <Link to="/contact-us" aria-current="page">Contact us</Link>
                                </li>

                            </ul>
                            {/* <div className="space-header-search absolute">
                                <i className="fas fa-search desktop-search-button" aria-hidden="true"></i>
                            </div> */}
                            <div className="space-mobile-menu-icon absolute" onClick={() => setMobileBar(!mobileBar)}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {createPortal(<MobileNavBar isActive={mobileBar} closeBar={() => setMobileBar(false)} />, document.body)}
    </>
}

const MobileNavBar = ({ isActive, closeBar }: { isActive: boolean, closeBar: () => void }) => {
    const ctx = useContext(ListContext)
    const [review, setReview] = useState(false)
    return <>
        <div className={`space-mobile-menu fixed ${isActive ? "active" : ""}`}>
            <div className="space-mobile-menu-block absolute">
                <div className="space-mobile-menu-block-ins relative">
                    <div className="space-mobile-menu-header relative text-center">
                        <a href="/" title="Mercury">

                        </a>
                    </div>
                    <div className="space-mobile-menu-list relative">
                        <ul id="menu-main-menu-1" className="mobile-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-145 current_page_item menu-item-371">
                                <Link onClick={() => closeBar()} to="/" aria-current="page">Home</Link>
                            </li>
                            <li onClick={() => setReview((prev) => !prev)} className={clsx("menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-532 toggled", { "space-up": review })}>
                                <Link onClick={() => closeBar()} to="/reviews" aria-current="page">Reviews</Link>
                                <ul className={clsx("sub-menu", { "!block": review, "!hidden": !review })}>
                                    {ctx.slice(0, 4).map(s => (<li key={s.id} className="menu-item menu-item-type-post_type menu-item-object-page menu-item-534 !text-black">
                                        <Link onClick={() => closeBar()} to={"/reviews/" + s.id} className="after:invisible">{s.title}</Link>
                                    </li>))}
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-145 current_page_item menu-item-371">
                                <Link onClick={() => closeBar()} to="/about-us" aria-current="page">About us</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-145 current_page_item menu-item-371">
                                <Link onClick={() => closeBar()} to="/contact-us" aria-current="page">Contact us</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="space-mobile-menu-copy relative text-center">
                    </div>
                    <div className="space-close-icon space-mobile-menu-close-button absolute" onClick={() => closeBar()}>
                        <div className="to-right absolute"></div>
                        <div className="to-left absolute"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Navbar;