import hero from "../assets/main.jpg";

const Hero = () => {
    return (
        <section className="float-left w-1/4 mr-4">
            <img className="w-full shadow-hero" src={hero} alt="Hero"/>
        </section>
    );
};

export default Hero;