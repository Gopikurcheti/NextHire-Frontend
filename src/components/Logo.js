import LogoImage from "../assets/Logo.png";

function Logo() {

    return (

        <img
            src={LogoImage}
            alt="NextHire"
            width="55"
            height="55"
            className="navbar-logo"
        />

    );

}

export default Logo;