
const Banner = () => {
    return (
        <div>
            <div className="hero h-[300px] md:h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/DK7d5dP/3.png)' }}>
                <div className=" bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl text-white font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 text-white">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="bg-[#E3B577] text-black px-4 py-1 rounded">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;