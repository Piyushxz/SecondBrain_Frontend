import { ShareIcon } from '../icons/ShareIcon';

const featuresData = [
  {
    icon: (
        <ShareIcon variant='lg'/>
    ),
    title: 'Social Sharing Options',
    description: 'Easily share your saved links with friends or on social media platforms.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-auto text-primary">
        <path d="M3 13h8V3H3v10zm2-8h4v6H5V5zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2zM13 21h8v-8h-8v8zm2-6h4v4h-4v-4z" />
      </svg>
    ),
    title: 'Personalized Dashboard',
    description: 'Enjoy a customized homepage that displays your favorite and most visited links.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-auto text-primary">
        <path d="M15.07 1.57l1.57 1.57L14 6.78 12.43 5.2l3.64-3.63zm-6.1 0l1.56 1.56L6.79 5.2 5.22 3.63 8.97 1.57zM4 10h16v2H4v-2zm2 4v2h12v-2H6zM4 18h16v2H4v-2z" />
      </svg>
    ),
    title: 'Time-Efficient Summarization',
    description: 'Use our AI tool to summarize text, articles, and documents efficiently.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-auto text-primary">
        <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
      </svg>
    ),
    title: 'Effortless Link Organization',
    description: 'Categorize and tag your links for quick access and better management.',
  },
];

const Features = () => {
  return (
    <div className="relative text-white py-12 mt-10">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`hover:bg-backgroundColor opacity-75 hover:opacity-100 transition duration-300 p-8 text-center border-gray-500 ${
                (index + 1) % 2 !== 0 ? 'border-r' : ''
              } ${index < featuresData.length - 2 ? 'border-b' : ''}`}
            >
              <div className="group relative">
                <span className="inline-block mb-6 mx-auto w-16 h-16">{feature.icon}</span>
                <h4 className="font-semibold font-satoshi tracking-tighter text-xl mb-4">{feature.title}</h4>
                <p className="font-satoshi tracking-tighter text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
