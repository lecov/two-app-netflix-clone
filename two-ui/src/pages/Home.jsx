import React, { useState } from 'react'

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset===0 ? false : true);
        return () => (window.onscroll = null);
    };
  return (
    <div>
        <Navbar isScrolled={isScrolled}/>
    </div>
  )
}
