import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ListContext } from "../../App";

const Detail = () => {
    const { id } = useParams()
    const ctx = useContext(ListContext)
    const item = ctx.find(s => s.id == id);

    return <>
        <section id="header">
            <div className="space-style-2-organization-header box-100 relative">
                <div className="space-style-2-organization-header-ins space-page-wrapper relative">
                    <div className="space-style-2-organization-header-elements box-100 relative">
                        <div className="space-style-2-organization-header-left box-75 relative">
                            <div className="space-style-2-organization-header-left-ins relative">
                                <div className="space-organization-header-logo-title box-100 relative">
                                    <div className="space-organization-header-logo-box relative">
                                        <img width={135} height={135} src={item?.imagePath} style={{ height: 135 }} className="attachment-mercury-135-135 size-mercury-135-135" alt="Royal bet" decoding="async" loading="lazy" sizes="(max-width: 135px) 100vw, 135px" />
                                        <div className="space-organization-header-logo-rating absolute">
                                            {item?.rating} <i className="fas fa-star" aria-hidden="true" />
                                        </div>
                                    </div>
                                    <div className="space-organization-header-title-box relative">
                                        <div className="space-organization-header-title-box-ins box-100 relative">
                                            {/* Title Start */}
                                            <h1>{item?.title}</h1>
                                            {/* Title End */}
                                            {/* Short Description of the Organization Start */}
                                            <div className="space-organization-header-short-desc relative">
                                                {item?.address}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-style-2-organization-header-right box-25 relative">
                            <div className="space-organization-header-button text-center box-100 relative">
                                <a href={item?.website} title="Visit Site" className="space-style-2-button" rel="nofollow" target="_blank">Visit Site <i className="fas fa-arrow-alt-circle-right" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="breadcrumb">
            <div className="space-single-aces-breadcrumbs relative" style={{ padding: "20px 15px 0 15px" }}>
                <div className="space-breadcrumbs relative"><span><span><Link to="/">Home</Link></span> » <span className="breadcrumb_last" aria-current="page">{item?.title}</span></span></div>	</div>
        </section>
        <section id="detail">
            <div className="space-page-section box-100 relative style-2-without-sidebar">
                <div className="space-page-section-ins space-page-wrapper relative" style={{ paddingTop: 35, paddingBottom: 75 }}>
                    <div className="space-content-section box-100 relative">
                        <div className="space-page-content-wrap relative">
                            {/* <div className="space-organization-content-excerpt relative">
                                <p>Cras in nisi id turpis cursus vulputate. Aliquam at sapien non tellus congue efficitur. Nam scelerisque quam quis turpis pellentesque, in placerat erat laoreet.</p>
                            </div> */}
                            <div className="space-page-content-box-wrap relative">
                                <div className="space-page-content box-100 relative">
                                    <h2 className="wp-block-heading">Review</h2>
                                    {item?.review.split("\n").filter(s=>s.length > 0).map(
                                        e=> <p>{e}</p>
                                    )}
                                    {/* <p><strong>Sed mauris libero</strong>, pretium consectetur cursus eu, blandit at arcu. Morbi justo turpis, vulputate et elementum non, dapibus at ante. Morbi id augue id justo pulvinar elementum. Donec volutpat quam quis porta maximus.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Detail;