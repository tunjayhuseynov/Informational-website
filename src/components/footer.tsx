import { Link } from "react-router-dom"



const Footer = () => {

    return <>
        <div className="space-footer-copy box-100 relative">
            <div className="space-footer-ins relative">
                <div className="space-footer-copy-left box-50 left relative">
                    © Copyright 2023
                </div>
                <div className="space-footer-copy-menu box-50 left relative">
                    <ul id="menu-footer-menu" className="space-footer-menu">
                        {/* <li id="menu-item-373" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-373">
                            <a href="https://project.mercurytheme.com/009/privacy-policy/">Privacy Policy</a>
                        </li> */}
                        <li id="menu-item-369" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-369">
                            <Link to="/terms-and-conditions">Terms and Conditions | Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Footer