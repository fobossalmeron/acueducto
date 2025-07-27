import Theme from './theme';

const styles = `
  #revealer {
    position: fixed;
    z-index: 101;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    padding: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #0D1111;
    transition: opacity 0.4s ease-out;
    will-change: opacity;
  }
  #bordered {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    border: 1px solid ${Theme.colors.foreground_lowest};
    border-radius: 100%;
    transition: transform 0.4s ease-in, border-width 0.3s ease-in, border-radius 0.3s ease-out;
    will-change: transform;
    overflow: hidden;
  }
  #logo {
    width: 22.4px;
    height: 19.6px;
    z-index: 100;
    transition: opacity 0.2s ease-in;
  }

  #bordered::before {
    content: " ";
    background-color: #1740bf;
    width: 250%;
    height: 250%;
    position: absolute;
    z-index: -1;
    transform: translateX(-100%);
    animation: shine 1s infinite ease-in-out;
    transition: opacity 0.150s ease;
    filter: blur(12px);
  }
  .hidden::before {
    opacity: 0;
  }
  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(80%);
    }
  }

  @font-face {
    font-family: "Wide";
    font-display: block;
    src: url("/assets/font/500.woff2") format("woff2"),
      url("/assets/font/500.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Wide";
    font-display: block;
    src: url("/assets/font/400.woff2") format("woff2"),
      url("/assets/font/400.woff") format("woff");
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: "Wide";
    font-display: block;
    src: url("/assets/font/300.woff2") format("woff2"),
      url("/assets/font/300.woff") format("woff");
    font-weight: 100;
    font-style: normal;
  }

  html {
    font-size: 62.5%;
    font-family: "Wide", sans-serif;
    font-weight: 100;
    font-style: normal;
    background-color: ${Theme.colors.background};
  }

  body {
    padding: 0;
    color: ${Theme.colors.foreground};
    font-size: 1.8rem;
    background-color: ${Theme.colors.background};
    font-family: inherit;
    font-weight: inherit;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    letter-spacing: 0.02px;
  }
  @media (max-width: 600px), (max-height: 450px) {
    body {
      font-size: 1.5rem;
    }
  }

  /* .lenis.lenis-smooth {
    scroll-behavior: auto !important;
  } */


  #__next {
    height: 100%;
    width: 100%;
  }
`;

function renderStyles() {
  return {
    __html: styles
      .replace(/(\r\n|\n|\r)/gm, '') // removes all new lines
      .replace(/ +(?= )/g, ''), // removes all multiple spaces (indenting)
    // .replace(/.}/g, "}\n") // adds new line after every } charracter
  };
}

export default () => <style dangerouslySetInnerHTML={renderStyles()} />;
