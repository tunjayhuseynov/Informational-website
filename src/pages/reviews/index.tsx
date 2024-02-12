import { useContext } from "react";
import { Link } from "react-router-dom";
import { ListContext } from "../../App";
import ReviewItem from "../../components/reviewItem";

const Reviews = () => {
    const ctx = useContext(ListContext)

    return <>
        <section id="header">
            <div className="space-archive-title-box box-100 relative">
                <div className="space-archive-title-box-ins space-page-wrapper relative">
                    <div className="space-archive-title-box-h1 relative">
                        <h1>Reviews</h1>
                        {/* Breadcrumbs Start */}
                        <div className="space-single-aces-breadcrumbs relative">
                            <div className="space-breadcrumbs relative">
                                <span>
                                    <span><Link to="/">Home</Link></span> » <span className="breadcrumb_last" aria-current="page">Reviews</span>
                                </span>
                            </div>
                        </div>
                        {/* Breadcrumbs End */}
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="space-archive-section box-100 relative space-organization-archive tax-organization-category">
                <div className="space-archive-section-ins space-page-wrapper relative">
                    <div className="space-organization-archive-ins box-100 relative">
                        {/* <div className="space-categories-list-box relative">
                            <ul className="space-categories-title">
                                <li className="active">
                                    All						</li>
                                <li>
                                    <a href="https://project.mercurytheme.com/009/betting-category/certified-bookmakers/" title="Certified Bookmakers">Certified Bookmakers</a>
                                </li>
                                <li>
                                    <a href="https://project.mercurytheme.com/009/betting-category/mobile-bookmakers/" title="Mobile Bookmakers">Mobile Bookmakers</a>
                                </li>
                                <li>
                                    <a href="https://project.mercurytheme.com/009/betting-category/newest-bookmakers/" title="Newest Bookmakers">Newest Bookmakers</a>
                                </li>
                                <li>
                                    <a href="https://project.mercurytheme.com/009/betting-category/online-bookmakers/" title="Online Bookmakers">Online Bookmakers</a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="space-companies-archive-items box-100 relative">
                            {ctx.map((e) => {
                                return <ReviewItem id={e.id} image={e.imagePath}  title={e.title} address={e.address} star={e.rating} website={e.website} />
                            })}
                        </div>
                        {/* <div className="space-taxonomy-description box-100 relative" style={{ marginTop: '45px' }}>
                            <div className="space-page-content case-15 relative">
                                <h2 className="wp-block-heading">Best Bookmakers</h2>
                                <p>Quisque ornare, arcu quis lacinia hendrerit, quam metus hendrerit mauris, sit amet luctus turpis sem nec diam. Aliquam feugiat nibh tortor, a varius leo tristique nec. Curabitur dignissim aliquet erat, in elementum nisi dignissim nec. Curabitur id vulputate elit, a pulvinar felis. Etiam tristique et turpis a laoreet. Nunc consectetur odio metus, non rutrum elit viverra non. Aliquam ut placerat libero. Duis mi nulla, elementum non varius lobortis, aliquam ut massa. In porttitor laoreet nibh a tincidunt. Proin ac libero a neque auctor feugiat. Cras vitae erat congue lacus feugiat vehicula sed a mauris. Nunc bibendum sagittis scelerisque. Sed sem sapien, tristique eget mollis non, fringilla lobortis orci.</p>
                                <p>Donec scelerisque fermentum sem, vel feugiat massa egestas tristique. Ut semper vulputate est. Proin sodales libero nec lectus vitae ex ultricies egestas. Mauris vitae vulputate tortor. Fusce malesuada auctor quam, eu cursus urna placerat in. Aliquam sit amet dignissim tellus, non porta massa. Fusce rhoncus ornare dui in facilisis.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Reviews;