import { Link } from "react-router-dom";

const Terms = () => {

    return <>
        <section id="header">
            <div className="space-title-box box-100 relative">
                <div className="space-title-box-ins space-page-wrapper relative">
                    <div className="space-title-box-h1 relative">
                        <h1>Terms and Conditions | Privacy Policy</h1>
                        {/* Breadcrumbs Start */}
                        <div className="space-single-aces-breadcrumbs relative">
                            <div className="space-breadcrumbs relative"><span><span><Link to="/">Home</Link></span> » <span className="breadcrumb_last" aria-current="page">Terms and Conditions | Privacy Policy</span></span></div>
                        </div>
                        {/* Breadcrumbs End */}
                    </div>
                </div>
            </div>
            <div className="space-page-section box-100 relative">
                <div className="space-page-section-ins space-page-wrapper relative" style={{ paddingTop: 41 }}>
                    <div className="space-content-section no-sidebar box-100 relative">
                        <div className="space-page-content-wrap relative">
                            <div className="space-page-content-box-wrap relative">
                                <div className="space-page-content page-template box-100 relative">

                                    <h2 className="wp-block-heading">Welcome to Our Website</h2>

                                    <p>Please read these Terms and Conditions, Privacy Policy, and Cookie Policy carefully before using our website. By accessing or using our website, you agree to be bound by these policies. If you do not agree with any part of these policies, please refrain from using our website.</p>

                                    <h2 className="wp-block-heading">Terms and Conditions</h2>

                                    <p><strong>Intellectual Property:</strong> All content, including text, graphics, logos, images, videos, and software, on our website is protected by intellectual property rights and is the property of the respective hotel casinos. You may not use, reproduce, modify, distribute, or display any of the content without prior written consent.</p>
                                    <p><strong>Age Restrictions:</strong> Access to our website and the services offered is strictly limited to individuals who are at least 18 years of age or the legal age for gambling in their jurisdiction. We reserve the right to request proof of age and deny access to anyone who fails to meet the minimum age requirement.</p>
                                    <p><strong>Responsible Gambling:</strong> We promote responsible gambling and encourage our users to gamble responsibly. It is essential to set personal limits, establish a budget, and seek help if gambling becomes a problem. We are not responsible for any financial losses or damages incurred through gambling activities.</p>
                                    <p><strong>Accuracy of Information:</strong> While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or reliability of the content on our website. The information provided is for general informational purposes only and should not be considered as professional advice.</p>
                                    <p><strong>External Links:</strong> Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. The inclusion of any links does not imply endorsement or affiliation with the linked website.</p>

                                    <h2 className="wp-block-heading">Privacy Policy</h2>

                                    <p><strong>Collection of Personal Information:</strong> We may collect personal information, such as names, email addresses, and contact details, when voluntarily provided by users through our website. We only collect personal information necessary for the purposes stated in this policy.</p>
                                    <p><strong>Use of Personal Information:</strong> We use the personal information provided by users to improve our services, personalize user experience, send promotional materials, and respond to inquiries or requests. We do not share personal information with third parties, except as required by law or with the user's consent.</p>
                                    <p><strong>Data Security:</strong> We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                                    <p><strong>Cookie Policy:</strong> Our website uses cookies to enhance user experience, analyze website traffic, and personalize content. By using our website, you consent to the use of cookies in accordance with this policy. Users can manage cookie preferences through their browser settings.</p>
                                    <p><strong>Changes to the Policy:</strong> We reserve the right to update or modify these policies at any time. Any changes will be posted on our website, and your continued use of the website after such modifications will constitute your acceptance of the revised policies.</p>

                                    <h2 className="wp-block-heading">Conclusion</h2>

                                    <p>These Terms and Conditions, Privacy Policy, and Cookie Policy constitute the entire agreement between the user and the casino hotels, governing the use of our website. If you have any questions or concerns regarding these policies, please contact us using the provided contact information on our website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Terms;