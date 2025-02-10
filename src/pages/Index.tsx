
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Download, 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
  User 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Your resume download will begin shortly.",
    });
    // Add resume download logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="section-padding flex flex-col items-center justify-center min-h-screen relative">
        <div className="glass p-8 rounded-2xl max-w-4xl w-full text-center space-y-6 animate-float">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
            <img
              src="https://via.placeholder.com/128"
              alt="Gomathi Nayagam"
              className="rounded-full w-full h-full object-cover relative z-10"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Gomathi Nayagam S R
          </h1>
          <p className="text-xl text-muted-foreground">
            Data Scientist | Web Developer | Problem Solver
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/gomathi--nayagam/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/Mathi755" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.instagram.com/prince__mathi__/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-muted/50">
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
            ].map((skill) => (
              <Card key={skill} className="p-6 glass hover:scale-105 transition-transform">
                <h3 className="font-semibold text-lg">{skill}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-4">
              <p className="text-xl font-semibold">SRM Institute of Science and Technology</p>
              <p className="text-muted-foreground">CSE with Data Science</p>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technical Member of DSBS Association</h3>
              <p className="text-muted-foreground">
                Active member of the DSBS Association at SRM Institute of Science and Technology
              </p>
              <div className="mt-4">
                <h4 className="font-semibold">INNOFUSION '25 Website</h4>
                <p className="text-muted-foreground">
                  Created a website for the DSBS Association event, INNOFUSION '25
                </p>
                <a 
                  href="https://innofusion.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="glass p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:pythonwithmathi@gmail.com" className="hover:text-primary">
                    pythonwithmathi@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button onClick={handleDownloadResume} className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
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
