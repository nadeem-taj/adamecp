import { useState, useEffect } from 'react';
import { Sun, Menu, X, ChevronRight, Check, Wind, Battery, Zap, MapPin, FileText, Settings, ThumbsUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Main App Component
export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollY={scrollY} />
            <main className="flex-grow">
                <HeroSection />
                <AboutSection />
                <SolarSolutionsSection />
                <ServicesSection />
                <ProcessSection />
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
}

// Header Component with Scroll Animation
function Header({ isMenuOpen, setIsMenuOpen, scrollY }) {
    const headerClass = scrollY > 50 
        ? "bg-white shadow-lg py-2 transition-all duration-300" 
        : "bg-white shadow-md py-4 transition-all duration-300";

    return (
        <header className={`sticky top-0 z-50 ${headerClass}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-10 h-10 transition-transform duration-300 hover:scale-110">
                        <img className="text-yellow-500 mr-2 object-cover" src='ADAM_EPC_LOGO.png' alt="Logo" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-yellow-500">ADAM EPC</h1>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {['Home', 'About Us', 'Services', 'Contact'].map((item, index) => (
                            <motion.li 
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <a 
                                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                                    className="text-gray-800 hover:text-yellow-500 font-medium transition-colors duration-300 relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden text-gray-800 transition-transform duration-300 hover:scale-110"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="md:hidden bg-white shadow-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="flex flex-col py-4">
                            {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                                <motion.li 
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a 
                                        href={`#${item.toLowerCase().replace(' ', '-')}`} 
                                        className="block px-4 py-2 text-gray-800 hover:bg-yellow-100 transition-colors duration-300" 
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
import logoFull from '../assets/logo_full.png';
import solarPanelImage1 from '../assets/solar1.jpg';
import solarPanelImage2 from '../assets/solar2.jpg';
import solarPanelImage3 from '../assets/solar3.png';
import rooftop from '../assets/rooftop.jpg';
import parking from '../assets/parking.jpg';
import ground from '../assets/ground.jpg';
import field from '../assets/field.jpg';
import carparking from '../assets/carparking.jpg';
import carcharge from '../assets/carcharge.jpg';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpeg';
import profile3 from '../assets/profile3.avif';

// Hero Section Component
function HeroSection() {
    return (
        <section id="home" className="relative bg-gray-900 text-white py-24 overflow-hidden">
            {/* Animated Background */}
            <motion.div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${solarPanelImage1})` }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/80"></div>
            
            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
                <motion.div 
                    className="md:w-1/2 mb-12 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="w-full flex justify-center mb-12 overflow-hidden"
                        animate={{ 
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <img src={logoFull} className="w-72 md:w-96 object-contain" alt="logo" />
                    </motion.div>
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        DIVINE 
                        DISTRIBUTAIONS
                    </motion.h2>
                    <motion.p 
                        className="text-lg mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Specialized in delivering comprehensive Engineering, Procurement, and Construction (EPC) solutions with a strong emphasis on rooftop solar and MEP projects.
                    </motion.p>
                    <motion.div 
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <motion.a 
                            href="#services" 
                            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Our Solutions
                        </motion.a>
                        <motion.a 
                            href="#contact" 
                            className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-6 border border-white rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-full max-w-md">
                        <motion.div 
                            className="bg-white rounded-lg shadow-xl p-6 text-gray-800"
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold mb-4">Get a Free Energy Consultation</h3>
                            <form>
                                {['Your Name', 'Email Address', 'Phone Number'].map((placeholder, index) => (
                                    <motion.div 
                                        key={placeholder}
                                        className="mb-4 group"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 * index }}
                                    >
                                        <input 
                                            type={index === 1 ? "email" : index === 2 ? "tel" : "text"} 
                                            placeholder={placeholder} 
                                            className="w-full px-4 py-2 border rounded-md transition-all duration-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 outline-none" 
                                        />
                                    </motion.div>
                                ))}
                                <motion.button 
                                    type="submit" 
                                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-md transition-all duration-300 relative overflow-hidden group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">Request Consultation</span>
                                    <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// About Section Component
function AboutSection() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4">About ADAM EPC</h2>
                    <motion.div 
                        className="w-24 h-1 bg-yellow-500 mx-auto"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    ></motion.div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Company Profile</h3>
                        <p className="mb-6 text-gray-700">We are a prominent professional services firm offering technical and commercial services in the energy sector. We work closely with clients to complete projects from design to commissioning. ADAM EPC is a pioneer in delivering consultant services in Renewable energy, Energy efficiency, and Clean development mechanisms.</p>

                        <motion.div 
                            className="mb-8"
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h4 className="text-xl font-bold mb-3">Our Vision</h4>
                            <p className="text-gray-700">To utilize natural, free energy sources processed by state-of-the-art solar technology to build a sustainable future and make life easier for humans. To consistently develop, inspire, and apply the concept of clean energy by utilizing the greatest product components that assure maximum production.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h4 className="text-xl font-bold mb-3">Our Mission</h4>
                            <p className="text-gray-700">To provide our customers with the best of the industry standards in renewable energy solutions by using innovative ideas, latest technological findings, and best practices. We strive to make our customers happy, independent, and establish a well-laid foundation for the future.</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div 
                            className="bg-white p-8 rounded-lg shadow-lg"
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {[
                                { icon: <ThumbsUp className="text-white" />, title: "Expert Team", text: "Our professionals have more than 100MW of execution experience" },
                                { icon: <Settings className="text-white" />, title: "Technical Excellence", text: "In-house design, engineering, and construction capabilities" },
                                { icon: <FileText className="text-white" />, title: "Data Analysis", text: "Specialist algorithms based on modern AI technology" },
                                { icon: <MapPin className="text-white" />, title: "Nationwide Service", text: "Serving residential, commercial, and industrial clients" }
                            ].map((item, index) => (
                                <motion.div 
                                    key={item.title}
                                    className="flex items-center mb-6 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300 last:mb-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <motion.div 
                                        className="bg-yellow-500 p-3 rounded-full mr-4"
                                        animate={{ 
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3
                                        }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <div>
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <p className="text-gray-600">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


function SolarSolutionsSection() {
    const solutions = [
        {
            image: solarPanelImage2,
            title: "Monocrystalline Solar Panels",
            description:
                "The most efficient and long-lasting panels, ideal for smaller rooftops with limited space.",
        },
        {
            image: solarPanelImage1,
            title: "Polycrystalline Solar Panels",
            description:
                "A more affordable option with slightly lower efficiency, making them suitable for larger rooftops.",
        },
        {
            image: solarPanelImage3,
            title: "Thin-film Solar Panels",
            description:
                "Lightweight and flexible panels, perfect for large rooftops where cost is a key consideration.",
        },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Solar System Solutions</h2>
                    <motion.div
                        className="w-24 h-1 bg-yellow-500 mx-auto mb-6 origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    ></motion.div>
                    <p className="max-w-2xl mx-auto text-gray-700">
                        We offer various types of solar panel systems to match your specific needs and requirements.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            className="bg-gray-50 rounded-lg p-6 shadow-md flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{
                                y: -10,
                                boxShadow:
                                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                        >
                            <div className="w-full h-48 bg-yellow-500 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                                <img
                                    src={solution.image}
                                    alt={solution.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                            <p className="text-gray-700 mb-4">{solution.description}</p>
                            <motion.a
                                href="#contact"
                                className="text-yellow-500 font-medium flex items-center group mt-auto"
                                whileHover={{ x: 5 }}
                            >
                                Learn More
                                <ChevronRight
                                    size={16}
                                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Services Section Component
function ServicesSection() {
    const services = [
        { image: rooftop, title: "Roof Top Solar Solutions", description: "Custom solar solutions for residential and commercial rooftops." },
        { image: parking, title: "Ground Mounted Solar Plants", description: "Large-scale solar installations for maximum energy production." },
        { image: ground, title: "Hybrid Solar Power Plants", description: "Combined solar solutions for continuous power supply." },
        { image: field, title: "Battery Energy Storage", description: "Store excess energy for use during peak demand or outages." },
        { image: carparking, title: "Solar Carports", description: "Dual-purpose structures providing shade and clean energy." },
        { image: carcharge, title: "Wind Energy Solutions", description: "Harness wind power alongside solar for comprehensive clean energy." }
    ];

    const additionalServices = [
        "Floating Solar Power Plants",
        "Solar Off-grid Solutions",
        "Solar Micro Grid Solutions",
        "Site Survey & Feasibility Studies",
        "Shadow Analysis",
        "Design & Engineering Services"
    ];

    return (
        <section id="services" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div 
                className="absolute inset-0 overflow-hidden opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
                <div className="star-field"></div>
            </motion.div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                    <motion.div 
                        className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    ></motion.div>
                    <p className="max-w-2xl mx-auto">We offer comprehensive solutions for all your renewable energy needs.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            imageSrc={service.image}
                            title={service.title}
                            description={service.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                <motion.div 
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 className="text-2xl font-bold mb-6">Additional Services</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {additionalServices.map((service, index) => (
                            <motion.div
                                key={service}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ServiceTag text={service} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Service Card Component
function ServiceCard({ imageSrc, title, description, delay }) {
    return (
        <motion.div 
            className="bg-gray-800 rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ 
                y: -10,
                backgroundColor: "rgba(55, 65, 81, 1)",
                boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.1), 0 10px 10px -5px rgba(234, 179, 8, 0.04)"
            }}
        >
            <motion.div 
                className="bg-yellow-500 w-100 h-48 rounded-lg flex items-center justify-center mb-6 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={imageSrc}
                    alt={title}
                    className="object-contain w-full h-full"
                />
            </motion.div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </motion.div>
    );
}

// Service Tag Component
function ServiceTag({ text }) {
    return (
        <motion.div 
            className="bg-gray-800 py-2 px-4 rounded-full flex items-center group"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(55, 65, 81, 1)" }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                animate={{ 
                    rotate: [0, 10, -10, 0],
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                <Check size={16} className="text-yellow-500 mr-2" />
            </motion.div>
            <span className="text-sm">{text}</span>
        </motion.div>
    );
}

// Process Section Component
function ProcessSection() {
    const steps = [
        { number: "01", title: "Consultation", description: "We start with understanding your energy needs and goals." },
        { number: "02", title: "Site Survey", description: "Our team conducts a detailed assessment of your property." },
        { number: "03", title: "Design & Planning", description: "We create custom solutions tailored to your requirements." },
        { number: "04", title: "Installation & Commission", description: "Our experts handle the complete setup and testing." }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Our Process</h2>
                    <motion.div 
                        className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    ></motion.div>
                    <p className="max-w-2xl mx-auto text-gray-700">We follow a comprehensive approach to ensure the best results for your solar energy needs.</p>
                </motion.div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting line */}
                    <motion.div 
                        className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div 
                            className="h-full bg-yellow-500 origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                    </motion.div>
                    
                    {steps.map((step, index) => (
                        <ProcessStep
                            key={step.number}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                            delay={index * 0.2}
                        />
                    ))}
                </div>

                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h3 className="text-2xl font-bold mb-4">How Will Our Solutions Help?</h3>
                    <p className="max-w-2xl mx-auto text-gray-700 mb-8">Our solutions provide clean, green energy that helps reduce global warming and makes the world a greener place while also lowering your household's reliance on the grid and reducing electricity expenses.</p>

                    <motion.div 
                        className="bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto"
                        whileHover={{ 
                            y: -5,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <h4 className="text-xl font-bold mb-4">EPC Solution</h4>
                        <p className="text-gray-700">We offer customized and comprehensive EPC solutions for on-grid and off-grid applications, as well as solar power plant operation and maintenance (O&M). Our professionals have more than 100MW of execution, design, installation, and commissioning experience.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// Process Step Component
function ProcessStep({ number, title, description, delay }) {
    return (
        <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
        >
            <motion.div 
                className="bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg"
                animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                }}
            >
                {number}
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </motion.div>
    );
}

// Testimonials Section Component
function TestimonialsSection() {
    const testimonials = [
        {
            name: "TATA Power Solar",
            role: "Industrial Client",
            testimonial: "At Adam EPC, empowered by Tata Power Solar’s legacy of excellence, we bring precision, reliability, and sustainability to every solar project. Our clients value our deep technical expertise and commitment to quality, making us a trusted partner in their clean energy journey.",
            srcImg: profile1
        },
        {
            name: "NTPC",
            role: "Industrial Client",
            testimonial: "Partnering with NTPC, India’s largest energy conglomerate, Adam EPC contributes to large-scale solar initiatives with engineering excellence and on-time execution. Our collaboration reflects a shared vision for sustainable growth and a greener future for India.",
            srcImg: profile2
        },
        {
            name: "Amplus Solar",
            role: "Industrial Client",
            testimonial: "At Adam EPC, a subsidiary of Amplus Solar, client satisfaction is at the heart of everything we do. Our partners trust us for delivering reliable, cost-effective, and innovative solar engineering solutions that drive real results. Hear from our clients how we've helped them transition to clean energy with confidence.",
            srcImg: profile3
        },
        {
            name: "Amplus Solar",
            role: "Industrial Client",
            testimonial: "At Adam EPC, a subsidiary of Amplus Solar, client satisfaction is at the heart of everything we do. Our partners trust us for delivering reliable, cost-effective, and innovative solar engineering solutions that drive real results. Hear from our clients how we've helped them transition to clean energy with confidence.",
            srcImg: profile3
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
                    <motion.div 
                        className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    ></motion.div>
                    <p className="max-w-2xl mx-auto text-gray-700">See what our clients have to say about our solar solutions.</p>
                </motion.div>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <TestimonialCard {...testimonial} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Testimonial Card Component
function TestimonialCard({ name, role, testimonial, srcImg }) {
    return (
        <motion.div 
            className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between"
            whileHover={{ 
                y: -8,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.08)"
            }}
            transition={{ duration: 0.3 }}
        >
            <div>
                <div className="flex items-center mb-3">
                    <motion.div 
                        className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden"
                        whileHover={{ rotate: 5 }}
                    >
                        <img src={srcImg} className="object-fill h-full w-full" alt={name} />
                    </motion.div>
                    <div>
                        <h4 className="font-bold text-sm">{name}</h4>
                        <p className="text-gray-600 text-xs">{role}</p>
                    </div>
                </div>
                <motion.p 
                    className="text-gray-700 text-sm italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    "{testimonial}"
                </motion.p>
            </div>
        </motion.div>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center mb-4">
                            <Sun className="text-yellow-500 mr-2" />
                            <h3 className="text-xl font-bold">ADAM EPC</h3>
                        </div>
                        <p className="text-gray-400 mb-4">Engineering the future of energy, one project at a time.</p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61574939322660" target="_blank" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/adamepcpvtltd/" target="_blank" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                </svg>
                            </a>
                            <a href="https://x.com/Adamepcpvtltd" target="_blank" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/antony-mathew-a65a3435b/" target="_blank" className="text-gray-400 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Projects</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Rooftop Solar Solutions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Ground Mounted Solar Plants</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Hybrid Solar Power Plants</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Battery Energy Storage</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Solar Car Parking</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-yellow-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-400">ADAM EPC PRIVATE LIMITED Building Number 4/73, 1st Floor, Krishna Towers To the South of Thrikkakara Temple, Thrikkakara P0, Kochi, Kerala - 682 021</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-yellow-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-400">info@adamepc.com</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-6 w-6 text-yellow-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-400">+91 860 6061 288, +91 949 7626 459</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} ADAM EPC. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}