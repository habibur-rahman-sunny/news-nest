import { format } from "date-fns";
import Image from "next/image";

const Header = () => {
    return (
        <div className="w-10/12 mx-auto flex flex-col items-center space-y-5 m-6">
            <Image
                src="/assets/logo.png"
                alt="header-img"
                width={400}
                height={400}
            />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM, dd, yyyy")}</p>
        </div>
    );
};

export default Header;