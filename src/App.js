import { timelineElements } from "./timelineElements"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import { AiOutlineHtml5 } from 'react-icons/ai';
import { PiFileCss } from 'react-icons/pi';
import { DiJavascript1 } from 'react-icons/di';
import { BiLogoReact } from 'react-icons/bi';
import { BiLogoRedux } from 'react-icons/bi';
import { SiJest } from 'react-icons/si';


function App() {
  let basicIconStyles = { background: "#06D6A0" }
  let advanceIconStyles = { background: "#f9c74f" }

  return (
    <div className="App">
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map(element => {
          let isBasic = element.icon === "HTML" | element.icon === "CSS" | element.icon === "Javascript"
          let showButton = element.buttonText !== "undefined" && element.buttonText !== null && element.buttonText !== ""
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isBasic ? basicIconStyles : advanceIconStyles}
              icon={element.icon === "HTML" ? <AiOutlineHtml5 /> :
                element.icon === "CSS" ? <PiFileCss /> :
                  element.icon === "Javascript" ? <DiJavascript1 /> :
                    element.icon === "React" ? <BiLogoReact /> :
                      element.icon === "Redux" ? <BiLogoRedux /> :
                        <SiJest />
              }
            >
              <h3 className="vertical-timeline-element-title">{element.title}</h3>
              <h5 className="vertical-timeline-element-subtitle"></h5>
              <p id="description">{element.description}</p>
              { showButton && (<a className={ `button ${isBasic ? "basicButton" : "advanceButton"}` } href="https://portfolio-smoky-two-25.vercel.app/" target="blanc_">{ element.buttonText }</a>) }
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;
