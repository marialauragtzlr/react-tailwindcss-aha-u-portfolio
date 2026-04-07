import { Handshake, CloudUpload, Keyboard, LineChart } from "lucide-react"

const highlights = [
    {
        icon: Handshake,
        title: "IT Solutions",
        description: "Tailored computer solutions that align with the genuine needs of your company.",
    },
    {
        icon: CloudUpload,
        title: "ERP/SAAS",
        description: "Cloud-based productivity and efficiency tools that enable work wherever you are.",
    },
    {
        icon: Keyboard,
        title: "Web Design (CMS)",
        description: "Creation of websites and web portals customized to the unique needs of each client.",
    },
    {
        icon: LineChart,
        title: "Digital Advertising and Social Media Management",
        description: "Digital advertising to craft strategies that capture the attention of your target audience.",
    }
]

export const About = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Us</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Bringing the essence of soul
                            <span className="font-serif italic font-normal text-white"> to every solution.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                AHA-U is dedicated to helping small businesses thrive in the digital age. Our mission is to provide tailored IT solutions that drive growth, enhance efficiency, and deliver a competitive edge. With our expertise and personalized approach, we empower businesses to embrace digital transformation.
                            </p>
                            <p>
                                At AHA-U, we blend the essence of soul with digital transformation. Our innovations breathe life into technology, infusing heart into every solution. Welcome to a new era of human-centric digital advancement.
                            </p>
                        </div>
                    </div>
                    {/* Right column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(index + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    
    
    )
}