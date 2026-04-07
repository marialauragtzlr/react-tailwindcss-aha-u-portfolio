import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"

const projects = [
    {
        title: "StampBox",
        description: "A digital platform for stamp collectors to organize, showcase, trade, and sell stamps globally, with tools for cataloging collections and connecting with other enthusiasts.",
        image: "/projects/stampbox.png",
        tags: ["React", "Typescript", "NodeJS"],
        link: "https://stampbox.com/",
    },
    {
        title: "LAAHR",
        description: "Provides tailored HR solutions for small businesses, including payroll, compliance, talent management, and employee support.",
        image: "/projects/laahr.png",
        tags: ["React", "Typescript", "NodeJS"],
        link: "https://laahr.com/",
    },
    {
        title: "1 Plus Academy",
        description: "A website for an after-school and enrichment center offering programs for children, including tutoring, STEAM activities, and homework support, with a front-end interface that helps parents explore courses and enrollment options easily.",
        image: "/projects/1plusacademy.png",
        tags: ["React", "Typescript", "NodeJS"],
        link: "https://1plusacademy.com/",
    },

]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of our recent projects showcasing tailored solutions and innovative design.
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{animationDelay: `${(index + 1) * 100}ms`}}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"></div>
                                {/* Overlay links*/}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* View All CTA*/}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
                
            </div>
        </section>
    );
}