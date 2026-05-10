import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";


const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#testimonials", label: "Testimonials"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>

            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-light hover:text-primary">aha-u</a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-4"> 
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"> {/*Passing key tto highest level component to help React process list better*/}
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>


                {/*CTA Button*/}
                <div className="flex gap-7">
                    <div className="hidden md:block">
                        <Button onClick={() => {window.location.href="#contact"}} size="sm">Contact Us</Button>
                    </div>

                    <div className="hidden md:block">
                        <Button size="sm"  className="border border-muted-foreground bg-transparent text-foreground shadow-none hover:bg-white/10 focus-visible:ring-0 transition-all duration-300" onClick={() => {setsMobileMenuOpen(false); window.open("https://online.aha-u.com/", "_blank")}}>
                                Domains & Hosting
                            </Button>
                    </div>
                </div>
                

                {/*Mobile Menu Button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/> }
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animation-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a 
                                href={link.href} key={index} onClick={() => setsMobileMenuOpen(false)} className="text-lg text-muted-foreground hover:text-foreground py-2"> 
                                {/*Passing key tto highest level component to help React process list better*/}
                                {link.label}
                            </a>
                        ))}
                        <div className="flex flex-col gap-2">
                            <Button onClick={() => {setsMobileMenuOpen(false); window.location.href = "#contact"}}>
                                Contact Us
                            </Button>
                            <Button className="border border-muted-foreground bg-transparent text-foreground shadow-none hover:bg-white/10 focus-visible:ring-0" onClick={() => {setsMobileMenuOpen(false); window.open("https://www.secureserver.net?pl_id=592577", "_blank")}}>
                                Domains & Hosting
                            </Button>
                        </div>
                        
                    </div>
                </div>
            )}
        </header>
    )
}