import Navbar from "@/component/shared/Navbar/Navbar";

const authLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default authLayout;