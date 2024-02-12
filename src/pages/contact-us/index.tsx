import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ContactUs = () => {
    return <>
        <section id="header">
            <div className="space-archive-title-box box-100 relative">
                <div className="space-archive-title-box-ins space-page-wrapper relative">
                    <div className="space-archive-title-box-h1 relative">
                        <h1>Contact us</h1>
                        {/* Breadcrumbs Start */}
                        <div className="space-single-aces-breadcrumbs relative">
                            <div className="space-breadcrumbs relative">
                                <span>
                                    <span><Link to="/">Home</Link></span> » <span className="breadcrumb_last" aria-current="page">Contact us</span>
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
                <div className="space-page-wrapper relative !px-20">
                    <form className="mt-16" action="#" onSubmit={(e) => {
                        e.preventDefault();
                        toast.success("Successfully sent!")
                    }}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                            <input type="text" id="name" name="name" placeholder="E.g: Henry Cooper" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-main" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" placeholder="example@gmail.com" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-main" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                            <textarea id="message" name="message" rows={4} placeholder="" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:border-main" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-main transition duration-300">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
}

export default ContactUs;