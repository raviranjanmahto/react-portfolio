const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/raviranjan-mahto-2a7360169'
        target='_blank'
        rel='noreferrer'
      >
        <img src={require("../assets/linkedin.png")} alt='linkedin-link' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/raviranjanmahto'
        target='_blank'
        rel='noreferrer'
      >
        <img src={require("../assets/github.png")} alt='github-link' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://replit.com/@raviranjanmahto'
        target='_blank'
        rel='noreferrer'
      >
        <img src={require("../assets/replit.png")} alt='replit-link' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://codesandbox.io/u/raviranjanmahto'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={require("../assets/codesandbox.png")}
          alt='codesandbox-link'
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
