import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Download, 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
  User,
  ArrowRight,
  ChevronDown,
  Home,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const { toast } = useToast();
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          element.classList.add('scroll-animate');
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX - 16, y: e.clientY - 16 });
    };

    const handleClick = () => {
      setIsExpanded(true);
      setTimeout(() => setIsExpanded(false), 500);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const handleDownloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Your resume download will begin shortly.",
    });
    // Add resume download logic here
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div 
        className={`cursor ${isExpanded ? 'expand' : ''}`}
        style={{ 
          left: `${cursor.x}px`,
          top: `${cursor.y}px`
        }}
      />

      <nav className="fixed top-0 right-0 p-4 z-50 flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="group">
              Menu
              <ChevronDown className="h-4 w-4 ml-2 group-hover:rotate-180 transition-transform" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => scrollToSection('home')} className="cursor-pointer group">
              <Home className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              <span>Home</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('about')} className="cursor-pointer group">
              <User className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              <span>About</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('skills')} className="cursor-pointer group">
              <Award className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              <span>Skills</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('education')} className="cursor-pointer group">
              <GraduationCap className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              <span>Education</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('experience')} className="cursor-pointer group">
              <Briefcase className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              <span>Experience</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('contact')} className="cursor-pointer group">
              <Mail className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              <span>Contact</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle />
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="section-padding flex flex-col items-center justify-center min-h-screen relative" data-scroll>
        <div className="glass p-8 rounded-2xl max-w-4xl w-full text-center space-y-6 animate-float hover:scale-105 transition-all duration-300">
          <div className="relative w-32 h-32 mx-auto mb-6 group">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse group-hover:bg-primary/40 transition-colors"></div>
            <img
              src="https://via.placeholder.com/128"
              alt="Gomathi Nayagam"
              className="rounded-full w-full h-full object-cover relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary animate-fade-in">
            Gomathi Nayagam S R
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in delay-100">
            Data Scientist | Web Developer | Problem Solver
          </p>
          <div className="flex justify-center gap-4 pt-4 animate-fade-in delay-200">
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform hover:bg-primary hover:text-white">
              <a href="https://www.linkedin.com/in/gomathi--nayagam/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform hover:bg-primary hover:text-white">
              <a href="https://github.com/Mathi755" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform hover:bg-primary hover:text-white">
              <a href="https://www.instagram.com/prince__mathi__/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <ChevronDown className="w-6 h-6 absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted/50" data-scroll>
        <div className="max-w-4xl mx-auto glass p-8 rounded-2xl animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Passionate about coding, problem-solving, and puzzles. I aspire to become a Data Scientist
            and am currently pursuing my degree in CSE with Data Science at SRM Institute of Science and Technology.
            When I'm not coding, you can find me solving Rubik's Cubes or playing chess - I'm a Tamil Nadu State Chess Player!
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-muted/50" data-scroll>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Python",
              "React",
              "MySQL",
              "C",
              "C++",
              "Java",
              "MERN Stack",
              "Poster Designing",
            ].map((skill, index) => (
              <Card 
                key={skill} 
                className="p-6 glass hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
                data-scroll
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{skill}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section id="education" className="section-padding" data-scroll>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-4">
              <p className="text-xl font-semibold">SRM Institute of Science and Technology</p>
              <p className="text-muted-foreground">CSE with Data Science</p>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in delay-100">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technical Member of DSBS Association</h3>
              <p className="text-muted-foreground">
                Active member of the DSBS Association at SRM Institute of Science and Technology
              </p>
              <div className="mt-4 group">
                <h4 className="font-semibold group-hover:text-primary transition-colors">INNOFUSION '25 Website</h4>
                <p className="text-muted-foreground">
                  Created a website for the DSBS Association event, INNOFUSION '25
                </p>
                <a 
                  href="https://innofusion.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all hover:underline mt-2"
                >
                  View Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/50" data-scroll>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Get in Touch</h2>
          <div className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fade-in delay-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 group hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <a href="mailto:pythonwithmathi@gmail.com" className="hover:underline">
                    pythonwithmathi@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 group hover:text-primary transition-colors">
                  <User className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button 
                  onClick={handleDownloadResume} 
                  className="w-full hover:scale-105 transition-transform group"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Gomathi Nayagam S R. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
