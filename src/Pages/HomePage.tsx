import Header from "../Header/Header"
import Companies from "../LoadingPage/Companies";
import DreamJoB from "../LoadingPage/DreamJob";
import JobCategory from "../LoadingPage/JobCategory";
import Working from "../LoadingPage/Working";

const   HomePage=()=>{
    return (
        <div className="min-h-[100vh] bg-slate-950 font-['poppins']">
            <Header/>
            <DreamJoB/>
            <Companies/>
            <JobCategory/>
            <Working/>
        </div>
        
    )
}
export default HomePage;