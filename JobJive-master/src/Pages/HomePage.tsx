import Header from "../Header/Header"
import Companies from "../LoadingPage/Companies";
import DreamJoB from "../LoadingPage/DreamJob";
import JobCategory from "../LoadingPage/JobCategory";
import Working from "../LoadingPage/Working";
import Testimonials from "../LoadingPage/Testimonials";
import Footer from "../Footer/Footer";

const   HomePage=()=>{
    return (
        <div className="min-h-[100vh] bg-slate-950 font-['poppins']">
            <DreamJoB/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
        </div>
        
    )
}
export default HomePage;