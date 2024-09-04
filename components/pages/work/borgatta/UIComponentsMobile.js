import styled from "styled-components";
import Image from "next/legacy/image";
import { Fade } from "react-awesome-reveal";
import UIComponent1 from "public/assets/img/casestudies/borgatta/UIComponent1.png";
import UIComponent2 from "public/assets/img/casestudies/borgatta/UIComponent2.png";
import UIComponent3 from "public/assets/img/casestudies/borgatta/UIComponent3.png";
import UIComponent4 from "public/assets/img/casestudies/borgatta/UIComponent4.png";
import UIComponent6 from "public/assets/img/casestudies/borgatta/UIComponent6.png";
import UIComponent8 from "public/assets/img/casestudies/borgatta/UIComponent8.png";
import UIComponent9 from "public/assets/img/casestudies/borgatta/UIComponent9.png";
import UIComponent10 from "public/assets/img/casestudies/borgatta/UIComponent10.png";
import UIComponent11 from "public/assets/img/casestudies/borgatta/UIComponent11.png";
import UIComponent12 from "public/assets/img/casestudies/borgatta/UIComponent12.png";
import UIComponent14 from "public/assets/img/casestudies/borgatta/UIComponent14.png";
import UIComponent16 from "public/assets/img/casestudies/borgatta/UIComponent16.png";
import UIComponent17 from "public/assets/img/casestudies/borgatta/UIComponent17.png";
import UIComponent18 from "public/assets/img/casestudies/borgatta/UIComponent18.png";
import UIComponent20 from "public/assets/img/casestudies/borgatta/UIComponent20.png";
import UIComponent21 from "public/assets/img/casestudies/borgatta/UIComponent21.png";

const UIComponentsMobile = () => {
  return (
    <ColumnMobile gap="4px" style={{ paddingTop: "16%" }}>
      <FirstComponentsContainerMobile>
        <RowMobile gap="8px">
          <ColumnMobile gap="4px" style={{ alignItems: "flex-end" }}>
            <Fade delay={210} direction="up" triggerOnce className="component1">
              <Image src={UIComponent1} alt="Tipografias del Portal B360" />
            </Fade>
            <Fade delay={210} direction="up" triggerOnce className="component2">
              <Image src={UIComponent2} alt="Estilos del Portal B360" />
            </Fade>
          </ColumnMobile>
          <ColumnMobile
            gap="5px"
            style={{ alignItems: "flex-start", justifyContent: "flex-end" }}
          >
            <Fade
              delay={210}
              direction="up"
              triggerOnce
              className="component10"
            >
              <Image
                src={UIComponent10}
                alt="Imagen de perfil del paciente del Portal B360"
              />
            </Fade>
            <RowMobile gap="10px">
              <Fade
                delay={210}
                direction="up"
                triggerOnce
                className="component11"
              >
                <Image
                  src={UIComponent11}
                  alt="Loader de carga en la imagen de perfil del paciente"
                />
              </Fade>
              <Fade
                delay={210}
                direction="up"
                triggerOnce
                className="component11"
              >
                <Image
                  src={UIComponent12}
                  alt="Imagen de perfil del paciente"
                />
              </Fade>
            </RowMobile>
            <Fade delay={210} direction="up" triggerOnce className="component9">
              <Image
                src={UIComponent9}
                alt="Buscador de pacientes del Portal B360"
              />
            </Fade>
            <Fade
              delay={210}
              direction="up"
              triggerOnce
              className="component14"
            >
              <Image src={UIComponent14} alt="Estilos de botones" />
            </Fade>
          </ColumnMobile>
        </RowMobile>
      </FirstComponentsContainerMobile>
      <SecondComponentsContainerMobile>
        <RowMobile
          gap="8px"
          style={{ alignItems: "flex-start", justifyContent: "flex-end" }}
        >
          <Fade delay={210} direction="up" triggerOnce className="component4">
            <Image
              src={UIComponent4}
              alt="Estilos de campos"
              width={150}
              height={151}
            />
          </Fade>
          <ColumnMobile gap="3px">
            <Fade delay={210} direction="up" triggerOnce className="component6">
              <Image
                src={UIComponent6}
                alt="Card del paciente con status Revisar archivos"
                width={174}
                height={110}
              />
            </Fade>
            <Fade delay={210} direction="up" triggerOnce className="component8">
              <Image
                src={UIComponent8}
                alt="Card del paciente con status En impresión"
                width={174}
                height={137}
              />
            </Fade>
          </ColumnMobile>
        </RowMobile>
        <RowMobile
          gap="5px"
          style={{ alignItems: "flex-start", justifyContent: "space-around" }}
        >
          <ColumnMobile style={{ marginTop: "-33%" }}>
            <Fade delay={210} direction="up" triggerOnce className="component3">
              <Image
                src={UIComponent3}
                alt="Detalle del caso"
                width={136}
                height={197}
              />
            </Fade>
          </ColumnMobile>
          <RowMobile gap="5px" style={{ marginTop: "-5px" }}>
            <ColumnMobile
              style={{ justifyContent: "flex-start", marginTop: "-3px" }}
            >
              <Fade
                delay={210}
                direction="up"
                triggerOnce
                className="component16"
              >
                <Image
                  src={UIComponent16}
                  alt="Fotografía intraoral en oclusión"
                  width={77}
                  height={50}
                />
              </Fade>
              <Fade
                delay={210}
                direction="up"
                triggerOnce
                className="component17"
              >
                <Image
                  src={UIComponent17}
                  alt="Fotografía intraoral derecho"
                  width={77}
                  height={50}
                />
              </Fade>
              <Fade
                delay={210}
                direction="up"
                triggerOnce
                className="component18"
              >
                <Image
                  src={UIComponent18}
                  alt="Fotografía intraoral superior"
                  width={77}
                  height={50}
                />
              </Fade>
            </ColumnMobile>
            <ColumnMobile gap="5px">
              <Fade
                delay={210}
                direction="up"
                triggerOnce
                className="component21"
              >
                <Image
                  src={UIComponent21}
                  alt="Selector de país"
                  width={100}
                  height={122}
                />
              </Fade>
              <Fade
                delay={210}
                direction="up"
                triggerOnce
                className="component20"
              >
                <Image
                  src={UIComponent20}
                  alt="Selector"
                  width={96}
                  height={87}
                />
              </Fade>
            </ColumnMobile>
          </RowMobile>
        </RowMobile>
      </SecondComponentsContainerMobile>
    </ColumnMobile>
  );
};

export default UIComponentsMobile;

const RowMobile = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${(props) => (props.gap ? props.gap : "0px")};
`;

const ColumnMobile = styled.div`
  display: flex;
  flex-direction: column;
  // width: 100%;
  gap: ${(props) => (props.gap ? props.gap : "0px")};

  .component1,
  .component2 {
    width: 130px;
  }

  .component10,
  .component11,
  .component12 {
    width: 53px;
  }

  .component9,
  .component14 {
    width: 194px;
  }
`;

const SecondComponentsContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .component4 {
    width: 149px;
  }

  .component6,
  .component8 {
    width: 173px;
  }

  .component3 {
    width: 136px;
  }

  .component16,
  .component17,
  .component18 {
    width: 77px;
  }

  .component21,
  .component20 {
    width: 100px;
  }
`;

const FirstComponentsContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
`;
