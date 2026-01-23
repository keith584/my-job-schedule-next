import React from 'react';

const News_latter = () => {
  return (

          <div className="footer-section">
          <h4 className='fs-35'>Stay Updated</h4>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className="newsletter-form">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className='c-btn'>Subscribe</button>
          </form>
        </div>

  );
}

export default News_latter;
