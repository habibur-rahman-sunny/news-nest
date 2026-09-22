import Navbar from "@/component/shared/Navbar/Navbar";
import { montserrat } from "../layout";

const authLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <main>
                <Navbar></Navbar>
                {children}
            </main>
        </div>
    );
};

export default authLayout;