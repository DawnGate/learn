import React, { useRef, useState } from "react";

import { CSSTransition } from "react-transition-group";

function RectOne() {
  return <div className={"fadein"}>This is rec one</div>;
}

function RectTwo({ show }) {
  return (
    <div className={`rect ${show ? "fadein" : "fadeout"}`}>This is rec two</div>
  );
}

function RectThree({ show }) {
  return (
    <div
      className={`rect ${show ? "fadein-transition" : "fadeout-transition"}`}
    >
      This is rec three
    </div>
  );
}

function RectThreePlus({ show }) {
  return (
    <div
      className={`rect-plus ${
        show ? "fadein-transition-plus" : "fadeout-transition-plus"
      }`}
    >
      This is rec three + plus
    </div>
  );
}

const RectFour = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`rect`}>
      This is rec four
    </div>
  );
});

function SectionBox(props) {
  return (
    <div>
      <div className="divider" />
      <div>
        <p>Section: {props.title}</p>
      </div>
      <div className="section-box">{props.children}</div>
    </div>
  );
}

export default function MyApp() {
  const [show, setShow] = useState(false);

  const fourRef = useRef(null);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <h1>This is main app</h1>
      <button onClick={handleToggle}>click to toggle rec</button>
      <SectionBox title="Rect one: only show when button active -> only have animation fadein -> the fadeout not working because the element has unmounted before can show animation">
        {show && <RectOne />}
      </SectionBox>

      <SectionBox title="Rect two: pass the show to the component, and change the class with the show props => fadein work and fadeout work but the element is only show => Because we using animation css -> it only apply the animation with your config, but after animation done -> it will bring your component in init css">
        <RectTwo show={show} />
      </SectionBox>

      <SectionBox title="Rect three: pass the show to the component, and change the class with the show props => using transition for animation -> if the element not unmount-> it will correct animation but the element still show in dom tree">
        <RectThree show={show} />
      </SectionBox>

      <SectionBox title="Rect three: pass the show to the component, and change the class with the show props => using both visibility and opacity => the fadein and fadeout css need change a little bit">
        <RectThreePlus show={show} />
      </SectionBox>

      <SectionBox title="Rect four: only show button when active -> but for solving problem when unmount => we using transition css -> This apply when you need to animation mount and unmount on component">
        <CSSTransition
          in={show}
          timeout={{
            enter: 1000,
            exit: 1000,
          }}
          classNames={"rect"}
          nodeRef={fourRef}
          unmountOnExit
        >
          <RectFour ref={fourRef} />
        </CSSTransition>
      </SectionBox>
    </div>
  );
}
