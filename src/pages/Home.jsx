import AboutSection from "./Home/AboutSection.jsx";
import HeroSection from "./Home/HeroSection.jsx";
import WhyUsSection from "./Home/WhyUsSection.jsx";
import ConcertsSection from "./Home/ConcertsSection.jsx";
import LessonsSection from "./Home/LessonSection.jsx";
import ContactSection from "./Home/ContactSection.jsx";
import TestimonialsSection from "./Home/TestimonialsSection.jsx";
import AddressSection from "./Home/AddressSection.jsx";
import MainSection from "./Home/MainSection.jsx";

export default function Home() {
    return (
        <div className="">
            <MainSection/>
            <AboutSection/>
            <HeroSection/>
            <WhyUsSection/>
            <ConcertsSection/>
            <LessonsSection/>
            <ContactSection/>
            <TestimonialsSection/>
            <AddressSection/>
        </div>
    );
}

