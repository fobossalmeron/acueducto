import Image from "next/legacy/image";
import { Fade } from "react-awesome-reveal";
import UIComponent1a from "public/assets/img/casestudies/wellmee/UIComponent1a.png";
import UIComponent1b from "public/assets/img/casestudies/wellmee/UIComponent1b.png";
import UIComponent1c from "public/assets/img/casestudies/wellmee/UIComponent1c.png";
import UIComponent1d from "public/assets/img/casestudies/wellmee/UIComponent1d.png";
import UIComponent1e from "public/assets/img/casestudies/wellmee/UIComponent1e.png";
import UIComponent2a from "public/assets/img/casestudies/wellmee/UIComponent2a.png";
import UIComponent2b from "public/assets/img/casestudies/wellmee/UIComponent2b.png";
import UIComponent2c from "public/assets/img/casestudies/wellmee/UIComponent2c.png";
import UIComponent2d from "public/assets/img/casestudies/wellmee/UIComponent2d.png";
import UIComponent2e from "public/assets/img/casestudies/wellmee/UIComponent2e.png";
import UIComponent2f from "public/assets/img/casestudies/wellmee/UIComponent2f.png";
import UIComponent2g from "public/assets/img/casestudies/wellmee/UIComponent2g.png";
import UIComponent3a from "public/assets/img/casestudies/wellmee/UIComponent3a.png";
import UIComponent3b from "public/assets/img/casestudies/wellmee/UIComponent3b.png";
import UIComponent3c from "public/assets/img/casestudies/wellmee/UIComponent3c.png";
import UIComponent3d from "public/assets/img/casestudies/wellmee/UIComponent3d.png";
import UIComponent3e from "public/assets/img/casestudies/wellmee/UIComponent3e.png";
import UIComponent3f from "public/assets/img/casestudies/wellmee/UIComponent3f.png";
import UIComponent3g from "public/assets/img/casestudies/wellmee/UIComponent3g.png";
import styled from "styled-components";

const UIComponentsAnimation = (props) => {
  return (
    <>
      <Desktop>
        <Column style={{ alignItems: 'end', gap: '1.4%', maxWidth: '347px' }}>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent1a">
            <Image
              src={UIComponent1a}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent1b">
            <Image
              src={UIComponent1b}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent1c">
            <Image
              src={UIComponent1c}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent1d">
            <Image
              src={UIComponent1d}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent1e">
            <Image
              src={UIComponent1e}
              alt="Wellmee"
            />
          </Fade>
        </Column>
        <Column style={{ alignItems: 'end', gap: '18px', maxWidth: '304px' }}>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent2a">
            <Image
              src={UIComponent2a}
              alt="Wellmee"
            />
          </Fade>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1%' }}>
            <Fade delay={400} direction="up" triggerOnce className="UIComponent2b">
              <Image
                src={UIComponent2b}
                alt="Wellmee"
              />
            </Fade>
            <Fade delay={400} direction="up" triggerOnce className="UIComponent2c">
              <Image
                src={UIComponent2c}
                alt="Wellmee"
              />
            </Fade>
            <Fade delay={400} direction="up" triggerOnce className="UIComponent2d">
              <Image
                src={UIComponent2d}
                alt="Wellmee"
              />
            </Fade>
          </div>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent2e">
            <Image
              src={UIComponent2e}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent2f">
            <Image
              src={UIComponent2f}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent2g">
            <Image
              src={UIComponent2g}
              alt="Wellmee"
            />
          </Fade>
        </Column>
        <Column style={{ alignItems: 'start', gap: '1.4%', maxWidth: '312px' }}>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent3a">
            <Image
              src={UIComponent3a}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent3b">
            <Image
              src={UIComponent3b}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent3c">
            <Image
              src={UIComponent3c}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent3d">
            <Image
              src={UIComponent3d}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent3e">
            <Image
              src={UIComponent3e}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent3f">
            <Image
              src={UIComponent3f}
              alt="Wellmee"
            />
          </Fade>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent3g">
            <Image
              src={UIComponent3g}
              alt="Wellmee"
            />
          </Fade>
        </Column>
      </Desktop>
    </>
  )
};

export default UIComponentsAnimation;

const Desktop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  padding: 6% 6%;
  padding-bottom: 35%;

  span {
    box-shadow: 0.88542px 0.88542px 9.73958px 0px rgba(64, 64, 64, 0.05);
  }

  .UIComponent1a {
    max-width: 240px;
    width: 77.5%;
    span {
      border-radius: 24px;
    }
  }
  .UIComponent1b {
    // max-width: 335px;
    width: 100%;
    span {
      border-radius: 18px;
    }
  }
  .UIComponent1c {
    max-width: 341px;
    span {
      border-radius: 18px;
    }
  }
  .UIComponent1d, .UIComponent1e {
    max-width: 347px;
    span {
      border-radius: 16px;
    }
  }
  .UIComponent1e {
    span {
      border-radius: 50px;
    }
  }

  .UIComponent2a {
    span {
      border-radius: 25.6px;
    }
  }
  .UIComponent2b, .UIComponent2c, .UIComponent2d {
    span {
      border-radius: 10px;
    }
  }
  .UIComponent2e {
    span {
      border-radius: 29px;
    }
  }
  .UIComponent2f {
    span {
      border-radius: 18px;
    }
  }
  .UIComponent2g {
    span {
      border-radius: 27.3px;
    }
  }

  .UIComponent3a {
    max-width: 260px;
    span {
      border-radius: 16px;
    }
  }
  .UIComponent3b {
    max-width: 302px;
    span {
      border-radius: 25.6px;
    }
  }
  .UIComponent3c, .UIComponent3d, .UIComponent3e {
    max-width: 312px;
  }
  .UIComponent3c {
    span {
      border-radius: 18px;
    }
  }
  .UIComponent3d {
    span {
      border-radius: 8px;
    }
  }
  .UIComponent3e {
    span {
      border-radius: 16px;
    }
  }
  .UIComponent3f {
    max-width: 276px;
    span {
      border-radius: 25.6px;
    }
  }
  .UIComponent3g {
    max-width: 255px;
    span {
      border-radius: 50px;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
  width: 100%;
`;