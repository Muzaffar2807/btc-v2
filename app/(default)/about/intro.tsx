import Image from 'next/image'
import AboutImage from '@/public/images/about-01.jpg'

export default function AboutIntro() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-1 md:pt-40 md:pb-1">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-1 md:pb-16">
            
            <p className="text-xl text-gray-600">
              Welcome to BrotoCode, where innovation meets excellence in web and
              app development. At BrotoCode, we are passionate about crafting
              digital solutions that empower businesses to thrive in the digital
              age. With a focus on creativity, quality, and customer
              satisfaction, we strive to deliver cutting-edge technology
              solutions tailored to meet your unique needs.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
}