import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useSprings, animated } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'
import Company from "./Company"
import oceanThinkIt from "@/assets/thinkit2.jpg"
import valuerAi from "@/assets/val2.jpg"
import fatcatCoders from "@/assets/fcc2.png"
import smartCat from "@/assets/sc.png"

type TCompany = {
    name: string,
    position: string
    description: string,
    backgroundImage?: string
}

const Companies = () => {

    const companies = [
        {
            name: "SmartCat",
            position: "Senior Frontend Developer",
            description: "Working on Content Lion project using React, TypeScript, Docker, and CI/CD. Building solutions to replace Oracle CM.",
            backgroundImage: smartCat,
        },
        {
            name: "Ocean ThinkIt",
            position: "Senior Frontend Developer",
            description: "Enhanced Lean Library browser extension for students to access global articles and eBooks. React, TypeScript, Playwright.",
            backgroundImage: oceanThinkIt,
        },
        {
            name: "Valuer Ai",
            position: "Lead Frontend Developer",
            description: "Led modernization of React app to React 18+ with TypeScript, Zustand, and React Query. Refactored legacy code.",
            backgroundImage: valuerAi,
        },
        {
            name: "FatCat Coders",
            position: "Full Stack Developer",
            description: "Worked on Calendly (Gatsby, GraphQL), SAGE (Next.js, Node.js), and Convertmore (React, Express, AWS) with scheduling features.",
            backgroundImage: fatcatCoders,
        },
       
    ]

    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Create spring animations for each company card
    const [springs, api] = useSprings(
        companies.length,
        () => ({
            from: { 
                opacity: 0, 
                transform: 'translateY(30px) scale(0.95)',
            },
            config: { tension: 100, friction: 25 },
        }),
        []
    );

    // Intersection Observer to trigger animations when section comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                        api.start((index) => ({
                            to: { 
                                opacity: 1, 
                                transform: 'translateY(0) scale(1)',
                            },
                            delay: index * 100,
                        }));
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [isVisible, api]);

  return (
    <div ref={containerRef} className="w-full flex justify-center py-40">
        <Carousel
            opts={{
                align: "start",
            }}
            orientation="vertical"
            className="w-full flex justify-center"
        >
            <CarouselContent className="-mt-1 h-[500px]">
                {companies.map((company: TCompany, index) => (
                    <CarouselItem key={company.name} className="pt-1 md:basis-1/2">
                        <animated.div 
                            className="p-1 h-full"
                            style={springs[index]}
                        >
                            <Card>
                                <Company 
                                    name={company.name}
                                    position={company.position}
                                    description={company.description}
                                    image={company.backgroundImage}
                                />
                            </Card>
                        </animated.div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default Companies