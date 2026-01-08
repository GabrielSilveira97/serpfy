import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const NavbarComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleScroll = () => {
            const trustedSection = document.getElementById('trusted-section');
            const heroSection = document.getElementById('hero-section');
            
            if (trustedSection && heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                
                setIsVisible(heroBottom <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ 
                        y: isMobile ? 100 : -100,
                        opacity: 0 
                    }}
                    animate={{ 
                        y: 0,
                        opacity: 1 
                    }}
                    exit={{ 
                        y: isMobile ? 100 : -100,
                        opacity: 0 
                    }}
                    transition={{ 
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    className={`fixed ${isMobile ? 'bottom-0 left-0 right-0' : 'top-0 left-0 right-0'} z-50 bg-accent py-5 px-4 md:px-20 flex shadow-md justify-between items-center`}
                >
                    <h1 className="text-black">Logo</h1>
                    <Button className="px-6 md:px-10 text-base md:text-lg">Teste Grátis 7 Dias</Button>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}

export default NavbarComponent;