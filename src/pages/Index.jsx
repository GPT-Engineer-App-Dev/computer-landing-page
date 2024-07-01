import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to Computer World</h1>
        <p className="text-xl mb-8">Your one-stop solution for all computer needs</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg">We are dedicated to providing the best computer services and products.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg">From repairs to custom builds, we offer a wide range of services to meet your needs.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Have questions? Get in touch with us today!</p>
        </div>
      </section>
    </div>
  );
}

export default Index;