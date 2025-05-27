import React from 'react';

const Table = () => {
  const tableData = [
    { year: '2025', title: 'Portfolio', type: 'Personal project', link: '#'},
    { year: '2025', title: 'Obys Agency', type: 'Design Studio', link: 'https://obys-agency-clone-pi.vercel.app/' },
    { year: '2025', title: 'Movie-verse', type: 'Personal Project', link: 'https://movie-verse-delta-wine.vercel.app/' },
    { year: '2025', title: 'Floral-Fragility', type: 'design', link: 'https://floral-fragility.vercel.app/' },
    { year: '2024', title: 'Macbook', type: 'Macbook redesigned', link: 'https://macbook-weld.vercel.app/' },
    { year: '2024', title: 'sports department app', type: 'minor project', link: 'https://github.com/YadavGaya031/sports-department-app.git' },
  ];

  return (
    <>
      <div className="h-auto w-full bg-[#222222] px-4 md:px-20 py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">
          Watch my <span className="text-yellow-400">more</span> artwork
        </h1>

        {tableData.map(({ year, title, type, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative overflow-hidden"
          >
            {/* Top line */}
            <div className="w-full h-0.5 bg-amber-100"></div>

            {/* Row */}
            <div className="relative z-10 flex text-white text-xl md:text:8xl font-bold md:py-5 px-6 transition-colors duration-500 group-hover:text-black">
              <h3 className="w-1/3">{year}</h3>
              <h3 className="w-1/3 text-center">{title}</h3>
              <h3 className="w-1/3 text-right">{type}</h3>
            </div>

            {/* Hover background overlay */}
            <div className="absolute inset-0 bg-white z-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
          </a>
        ))}

        {/* Final bottom line */}
        <div className="w-full h-0.5 bg-amber-100"></div>
      </div>
    </>
  );
};

export default Table;
