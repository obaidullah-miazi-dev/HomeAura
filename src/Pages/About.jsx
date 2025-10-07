import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import bannerImg from '../assets/about-banner.jpeg';
import teamMember1 from '../assets/team-member-1.jpeg'
import teamMember2 from '../assets/team-member-2.jpeg'
import teamMember3 from '../assets/team-member-3.jpeg'

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'Founder & Designer',
      image: teamMember1,
      bio: 'Jane leads the creative vision at HomeAura, crafting unique furniture designs.',
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'Lead Craftsman',
      image: teamMember2,
      bio: 'John ensures every piece meets our high-quality standards with expert craftsmanship.',
    },
    {
      id: 3,
      name: 'Emily Brown',
      role: 'Customer Experience Manager',
      image: teamMember3,
      bio: 'Emily is dedicated to making your shopping experience seamless and delightful.',
    },
  ];

  return (
    <Container>
      <div>
        {/* Hero Section */}
        <div
          className="relative w-full h-[60vh] flex items-center justify-center bg-contain bg-center mt-12 rounded-2xl"
          style={{ backgroundImage: `url(${bannerImg})`, overflow: 'hidden'}}
        >
          <div className="absolute inset-0 bg-[#000000ab] bg-opacity-50"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              About Home Aura
            </h1>
            <p className="text-gray-300 mt-5 max-w-2xl mx-auto font-semibold">
              Discover our passion for creating beautiful, functional furniture that transforms your home.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="my-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At HomeAura, we believe your home should reflect your unique style. Our mission is to design and craft high-quality, sustainable furniture that blends elegance with functionality, making every space feel extraordinary.
          </p>
        </div>

        {/* Team Section */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-amber-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center my-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Our Collection</h2>
          <Link to="/products">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default About;