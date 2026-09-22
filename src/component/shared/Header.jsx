import Image from "next/image";

const Header = () => {
    return (
        <div className="w-10/12 mx-auto flex justify-center">
            <Image
                src="/assets/logo.png"
                alt="header-img"
                width={400}
                height={400}
            />
        </div>
    );
};

export default Header;