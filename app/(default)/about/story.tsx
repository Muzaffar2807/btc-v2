import Image from 'next/image'
import AboutImage from '@/public/images/about-02.jpg'
import AboutLogo from '@/public/images/about-logo.png'

export default function AboutStory() {  
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to redefine digital experiences through innovative
              solutions and unparalleled customer service. We aim to be your
              trusted partner in navigating the complexities of digital
              transformation, delivering measurable results that drive your
              business forward.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Behind every successful project at BrotoCode is a team of
              dedicated professionals with diverse expertise in web and app
              development and UI/UX design </p>
          </div>

        
 
        </div>
      </div>
    </section>
  );
}