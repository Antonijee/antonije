import { useParams, Link } from "react-router-dom";
import { getCompanyByName } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useSpring, animated, useSprings } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const CompanyPage = () => {
    const { name } = useParams();
    const company = name ? getCompanyByName(name) : undefined;
    const colors = company?.colorScheme;

    if (!company || !colors) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 bg-black">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Company Not Found</h1>
                    <p className="text-gray-400 mb-8">The company you're looking for doesn't exist.</p>
                    <Link to="/antonije/">
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    // Helper function to convert hex to rgba
    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    };

    const primaryRgb = hexToRgb(colors.primary);
    const secondaryRgb = hexToRgb(colors.secondary);

    // Scroll to top when component mounts or company changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [name]);

    // Refs for intersection observers
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const responsibilitiesRef = useRef<HTMLElement>(null);
    const achievementsRef = useRef<HTMLElement>(null);
    const techStackRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);

    // Visibility states
    const [heroVisible, setHeroVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [responsibilitiesVisible, setResponsibilitiesVisible] = useState(false);
    const [achievementsVisible, setAchievementsVisible] = useState(false);
    const [techStackVisible, setTechStackVisible] = useState(false);
    const [projectsVisible, setProjectsVisible] = useState(false);

    // Hero animations
    const [heroSprings, heroApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateY(30px)' },
        config: { tension: 50, friction: 30 }
    }));

    const [logoSprings, logoApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'scale(0.8) rotate(-5deg)' },
        config: { tension: 50, friction: 30 }
    }));

    // About section animation
    const [aboutSprings, aboutApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateY(30px)' },
        config: { tension: 50, friction: 30 }
    }));

    // Responsibilities animation
    const [responsibilitiesSprings, responsibilitiesApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateX(-30px)' },
        config: { tension: 50, friction: 30 }
    }));

    // Achievements animation
    const [achievementsSprings, achievementsApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateX(30px)' },
        config: { tension: 50, friction: 30 }
    }));

    // Tech stack animation
    const [techStackSprings, techStackApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateY(30px)' },
        config: { tension: 50, friction: 30 }
    }));

    // Projects animations
    const [projectSprings, projectApi] = useSprings(
        company.projects?.length || 0,
        () => ({
            from: { opacity: 0, transform: 'translateY(30px) scale(0.95)' },
            config: { tension: 50, friction: 30 }
        }),
        []
    );

    // Intersection Observers
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        // Hero observer
        if (heroRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !heroVisible) {
                        setHeroVisible(true);
                        heroApi.start({ to: { opacity: 1, transform: 'translateY(0)' } });
                        logoApi.start({ to: { opacity: 1, transform: 'scale(1) rotate(0deg)' }, delay: 100 });
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(heroRef.current);
            observers.push(observer);
        }

        // About observer
        if (aboutRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !aboutVisible) {
                        setAboutVisible(true);
                        aboutApi.start({ to: { opacity: 1, transform: 'translateY(0)' } });
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(aboutRef.current);
            observers.push(observer);
        }

        // Responsibilities observer
        if (responsibilitiesRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !responsibilitiesVisible) {
                        setResponsibilitiesVisible(true);
                        responsibilitiesApi.start({ to: { opacity: 1, transform: 'translateX(0)' } });
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(responsibilitiesRef.current);
            observers.push(observer);
        }

        // Achievements observer
        if (achievementsRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !achievementsVisible) {
                        setAchievementsVisible(true);
                        achievementsApi.start({ to: { opacity: 1, transform: 'translateX(0)' } });
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(achievementsRef.current);
            observers.push(observer);
        }

        // Tech stack observer
        if (techStackRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !techStackVisible) {
                        setTechStackVisible(true);
                        techStackApi.start({ to: { opacity: 1, transform: 'translateY(0)' } });
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(techStackRef.current);
            observers.push(observer);
        }

        // Projects observer
        if (projectsRef.current && company.projects) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !projectsVisible) {
                        setProjectsVisible(true);
                        projectApi.start((index) => ({
                            to: { opacity: 1, transform: 'translateY(0) scale(1)' },
                            delay: index * 100
                        }));
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(projectsRef.current);
            observers.push(observer);
        }

        return () => {
            observers.forEach(obs => obs.disconnect());
        };
    }, [
        heroVisible, aboutVisible, responsibilitiesVisible, achievementsVisible, 
        techStackVisible, projectsVisible, heroApi, logoApi, aboutApi, 
        responsibilitiesApi, achievementsApi, techStackApi, projectApi, company.projects
    ]);

    return (
        <div 
            className="min-h-screen"
            style={{
                '--color-primary': colors.primary,
                '--color-secondary': colors.secondary,
                '--color-accent': colors.accent,
                '--color-text': colors.text,
                '--color-text-secondary': colors.textSecondary,
                '--primary-rgb': `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`,
                '--secondary-rgb': `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}`,
                background: `linear-gradient(135deg, 
                    rgba(var(--primary-rgb), 0.05) 0%, 
                    #e8e8e8 30%, 
                    #e0e0e0 50%, 
                    #e8e8e8 55%, 
                    rgba(var(--secondary-rgb), 0.05) 90%
                )`
            } as React.CSSProperties & {
                '--color-primary': string;
                '--color-secondary': string;
                '--color-accent': string;
                '--color-text': string;
                '--color-text-secondary': string;
                '--primary-rgb': string;
                '--secondary-rgb': string;
            }}
        >
            <div className="max-w-7xl mx-auto px-8 py-16">
                {/* Header */}
                <div className="mb-16">
                    <Link to="/antonije/">
                        <Button 
                            variant="ghost" 
                            className="mb-12 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                    </Link>
                    
                    {/* Hero */}
                    <animated.div ref={heroRef} className="mb-20" style={heroSprings}>
                        <div className="mb-6">
                            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: colors.primary }}>
                                {company.period}
                            </span>
                        </div>
                        <div className="flex items-center gap-6 mb-6">
                            {company.logo && (
                                <animated.img 
                                    src={company.logo} 
                                    alt={`${company.name} logo`}
                                    className="h-full w-32 object-contain rounded-[12px]"
                                    style={logoSprings}
                                />
                            )}
                            <h1 className="text-7xl font-bold leading-tight text-gray-900">
                                {company.name}
                            </h1>
                        </div>
                        <p className="text-3xl font-light mb-4 text-gray-700">
                            {company.position}
                        </p>
                        {company.client && (
                            <p className="text-lg text-gray-600">
                                Client: <span className="font-medium text-gray-800">{company.client}</span>
                            </p>
                        )}
                    </animated.div>
                </div>

                {/* Main Content */}
                <div className="space-y-24">
                    {/* About Section */}
                    <animated.section ref={aboutRef} style={aboutSprings}>
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold mb-4 text-gray-900">
                                About
                            </h2>
                            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                        </div>
                        <p className="text-xl leading-relaxed max-w-4xl text-gray-700" style={{ lineHeight: '1.8' }}>
                            {company.description}
                        </p>
                    </animated.section>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-2 gap-16">
                        {/* Responsibilities */}
                        <animated.section ref={responsibilitiesRef} style={responsibilitiesSprings}>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                    Responsibilities
                                </h2>
                                <div className="w-16 h-1 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                            </div>
                            <ul className="space-y-6">
                                {company.responsibilities.map((responsibility, index) => (
                                    <li key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                                        <p className="text-lg leading-relaxed text-gray-700" style={{ lineHeight: '1.8' }}>
                                            {responsibility}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </animated.section>

                        {/* Achievements */}
                        {company.achievements && company.achievements.length > 0 && (
                            <animated.section ref={achievementsRef} style={achievementsSprings}>
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                        Achievements
                                    </h2>
                                    <div className="w-16 h-1 rounded-full" style={{ backgroundColor: colors.accent }}></div>
                                </div>
                                <ul className="space-y-6">
                                    {company.achievements.map((achievement, index) => (
                                        <li key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 mt-2 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.accent}20`, border: `1.5px solid ${colors.accent}` }}>
                                                <span className="text-xs font-bold" style={{ color: colors.accent }}>✓</span>
                                            </div>
                                            <p className="text-lg leading-relaxed text-gray-700" style={{ lineHeight: '1.8' }}>
                                                {achievement}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </animated.section>
                        )}
                    </div>

                    {/* Tech Stack */}
                    <animated.section ref={techStackRef} style={techStackSprings}>
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold mb-4 text-gray-900">
                                Technology Stack
                            </h2>
                            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {company.technologies.map((tech, index) => (
                                <span 
                                    key={index}
                                    className="px-5 py-2.5 rounded-lg text-base font-medium border transition-all duration-200 hover:scale-105"
                                    style={{ 
                                        backgroundColor: `${colors.secondary}10`,
                                        borderColor: `${colors.secondary}30`,
                                        color: '#1f2937'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.secondary;
                                        e.currentTarget.style.borderColor = colors.secondary;
                                        e.currentTarget.style.color = '#000';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = `${colors.secondary}10`;
                                        e.currentTarget.style.borderColor = `${colors.secondary}30`;
                                        e.currentTarget.style.color = '#1f2937';
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </animated.section>

                    {/* Projects */}
                    {company.projects && company.projects.length > 0 && (
                        <section ref={projectsRef}>
                            <div className="mb-12">
                                <h2 className="text-4xl font-bold mb-4 text-gray-900">
                                    Projects
                                </h2>
                                <div className="w-16 h-1 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                {company.projects.map((project, index) => (
                                    <animated.div 
                                        key={index}
                                        className="p-8 rounded-2xl border bg-white/50 backdrop-blur-sm transition-all duration-200 hover:border-opacity-60 hover:shadow-lg"
                                        style={{
                                            borderColor: `${colors.primary}20`,
                                            ...projectSprings[index]
                                        }}
                                    >
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                            {project.name}
                                        </h3>
                                        <p className="text-lg leading-relaxed mb-6 text-gray-700" style={{ lineHeight: '1.8' }}>
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="px-4 py-1.5 rounded-md text-sm font-medium border bg-gray-100 border-gray-200 text-gray-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </animated.div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;
