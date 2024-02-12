import { Link } from "react-router-dom";

interface IProps {
    id: string,
    title: string,
    rank?: number,
    image: string,
    address: string
    star: number,
    website: string,
}

const ReviewItem = ({ title, image, rank, address, star, website, id }: IProps) => {

    return <>
        <div className="space-organizations-3-archive-item box-100 relative">
            <div className="space-organizations-3-archive-item-ins relative">
                <div className="space-organizations-3-archive-item-logo box-25 relative">
                    <div className="space-organizations-3-archive-item-logo-ins box-100 text-center relative">

                        <div className="space-organizations-3-logo-title-box box-100 text-left relative">
                            <div className="space-organizations-3-logo-box relative">
                                <Link to={`/reviews/${id}`} title={title}>
                                    <img width="50" height="50" src={image} className="attachment-mercury-50-50 size-mercury-50-50" alt={title} decoding="async" loading="lazy" style={{ height: 50 }} />
                                </Link>
                                {rank && <div className="space-organizations-3-archive-item-count-2 absolute">
                                    <span>{rank}</span>
                                </div>}
                            </div>
                            <div className="space-organizations-3-title-box relative">
                                <Link to={`/reviews/${id}`} title={title}>{title}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-organizations-3-archive-item-terms box-25 relative">
                    <div className="space-organizations-3-archive-item-terms-ins box-100 text-center relative">
                        {/* <strong>{address}</strong><br /> */}
                        {address}
                    </div>
                </div>
                <div className="space-organizations-3-archive-item-rating box-25 relative">
                    <div className="space-organizations-3-archive-item-rating-ins box-100 text-center relative">


                        <div className="space-organizations-3-archive-item-rating-box relative">
                            <div className="star-rating">
                                {Array(Math.floor(star)).fill(<div className="star star-full" aria-hidden="true">
                                </div>)}
                                {!Number.isInteger(star) && <div className="star star-half" aria-hidden="true">
                                </div>}
                            </div>
                            <span>{star.toFixed(1)}</span>
                        </div>
                        {/* <div className="space-organizations-archive-item-button-notice relative" style={{ marginTop: 5 }}>
                            New players only
                        </div> */}
                    </div>
                </div>
                <div className="space-organizations-3-archive-item-button box-25 relative">
                    <div className="space-organizations-3-archive-item-button-ins box-100 text-center relative">
                        <a href={website} title="VISIT" target="_blank" rel="nofollow"><i className="fas fa-check-circle" aria-hidden="true"></i> VISIT</a>

                        <Link to={`/reviews/${id}`} title="Read Review"><i className="fas fa-arrow-alt-circle-right" aria-hidden="true"></i> Read Review</Link>
                    </div>
                </div>
                {/* <div className="space-organizations-archive-item-detailed-tc box-100 relative">
                    <div className="space-organizations-archive-item-detailed-tc-ins relative">
                        18+. New players only. Welcome Bonus - Place 4 x €/$/£10 or more bets to receive €/$/£25 in free bets. This bonus only applies for deposits of €/$/£10 or higher! All you need to do is just deposit the money in your website.com account and you will receive this bonus instantly!								</div>
                </div> */}
            </div>
        </div>
    </>
}

export default ReviewItem;