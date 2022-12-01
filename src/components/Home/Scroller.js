import React from "react";
import {
  Animator,
  batch,
  FadeIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Fade,
  ZoomIn,
} from "react-scroll-motion";

function Scroller() {
  var num=1;
  const val = ["moiz", "ahmsd", "munawar"];
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <h2>Let me Show You Scroll</h2>
        </Animator>
      </ScrollPage>

      {val.map((v) => (
        <ScrollPage>
          <Animator
            animation={batch(
              Sticky(),
              FadeIn(),
              ZoomIn(),
              MoveOut(0, -200),
              Fade()
            )}
          >
            <h1>{v}</h1>
          </Animator>
        </ScrollPage>
      ))}
     
   
   <ScrollPage>
        <Animator
          animation={batch(
            Sticky(),
            FadeIn(),
            ZoomIn(),
            MoveOut(0, -200),
            Fade()
          )}
        >
          <h2>Fade Up Scroll Out1 </h2>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator
          animation={batch(
            Sticky(),
            FadeIn(),
            ZoomIn(),
            MoveOut(0, -200),
            Fade()
          )}
        >
          <h2>Fade Up Scroll Out1 </h2>
        </Animator>
      </ScrollPage>
    
      <ScrollPage>
        <Animator
          animation={batch(
            Sticky(),
            FadeIn(),
            ZoomIn(),
            MoveOut(0, -200),
            Fade()
          )}
        >
          <h2>Fade Up Scroll Out1 </h2>
        </Animator>
      </ScrollPage>
      {num== 1 &&
        <ScrollPage>
        <Animator animation={batch(Sticky(), FadeIn(), ZoomIn())}>
          <h2>numbersasfas</h2>
        </Animator>
      </ScrollPage>
      }
      <ScrollPage>
        <Animator animation={batch(Sticky(), FadeIn(), ZoomIn())}>
          <h2>Fade Up Scroll Out 2</h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default Scroller;
