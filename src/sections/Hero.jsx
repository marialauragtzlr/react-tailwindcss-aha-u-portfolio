import {Button} from "@/components/Button"
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown, Download } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker"
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/*Background image*/}
            <div className="absolute inset-0">
                <img src="/projects/bg-image.jpeg" alt="Hero Image" className="w-full h-full object-cover opacity-30"/>
                <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background to-background"/>
            </div>

            {/*Blue dots*/}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                        style={{
                            backgroundColor: "#3e5dff",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/*Hero content*/}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-1 gap-12 items-center">
                    {/*Left column - Text content*/}
                    <div className=" space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                    Your bridge to digital excellence
                            </span>
                        </div>
                        
                        {/*Headline*/}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Web presence strategy
                                <br />
                                for <span className="font-monospaced font-normal text-primary italic glow-text">your company</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                               We excel in customized IT solutions that cater to your business needs, offering 
                               cloud-based ERP/SAAS tools for smooth productivity and cutting-edge CMS web design 
                               to enhance your online footprint. 
                            </p>
                        </div>

                        {/*CTAs*/}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size={"lg"}>
                                Contact Us <ArrowRight className="w-5 h-5"/>
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5"/> 
                                Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/*Social Links*/}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow us: </span>
                            {[
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" },
                            ].map((social, index) => (
                                <a key={index} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    {<social.icon className="w-5 h-5"/>}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            {/* Technologies Section*/}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies we work with</p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...technologies, ...technologies].map((technology, index) => (
                            <div key={index} className="shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold, text-muted-foreground/50 hover:text-muted-foreground transition-colors">{technology}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce"/>
                </a>
            </div>
        </section>
    )
}