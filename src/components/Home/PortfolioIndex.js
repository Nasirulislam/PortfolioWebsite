<ScrollContainer>
      <div
        className={changeClass ? "viewall" : "home-title"}
        onClick={() => ViewAllClick()}
      >
        <h1 data-text={value}>
          {projectsData.length > 0 && value === "" ? "David Ellis" : value}
        </h1>
      </div>
      <div ref={(el) => (GrouRef.current[-1] = el)} style={{ height: "100vh", width: "100vw" }} data-bgcolor={"white"}>
        <HomeIndex
          randomIndex={randomIndex}
          projectsData={projectsData}
          onChange={handleChange}
        />
      </div>

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
          <div
            ref={(el) => (GrouRef.current[0] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={projectsData[0]?.color}
          >
            <Fencher
              image1={projectsData[0]?.images[2]}
              image2={projectsData[0]?.images[2]}
              name={projectsData[0]?.name}
              images={projectsData[0]?.images}
              slug={"/".concat(projectsData[0]?.slug)}
              setCount={props.setCount}
              nextProject={projectsData[1]}
              onChange={handleChange}
            />
          </div>
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
          <div
            ref={(el) => (GrouRef.current[1] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={projectsData[1]?.color}
          >
            <Auston
              image1={projectsData[1]?.images[0]}
              image2={projectsData[1]?.images[1]}
              image3={projectsData[1]?.images[2]}
              slug={"/".concat(projectsData[1]?.slug)}
              name={projectsData[1]?.name}
              images={projectsData[1]?.images}
              nextProject={projectsData[2]}
              onChange={handleChange}
            />
          </div>
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
          <div
            ref={(el) => (GrouRef.current[2] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={projectsData[2]?.color}
          >
            <Amoeba
              image1={projectsData[2]?.images[0]}
              image2={projectsData[2]?.images[1]}
              image3={projectsData[2]?.images[2]}
              slug={"/".concat(projectsData[2]?.slug)}
              name={projectsData[2]?.name}
              images={projectsData[2]?.images}
              nextProject={projectsData[3]}
              onChange={handleChange}
            />
          </div>
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
          <div
            ref={(el) => (GrouRef.current[3] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={projectsData[3]?.color}
          >
            <Fencher
              image1={projectsData[3]?.images[2]}
              image2={projectsData[3]?.images[2]}
              name={projectsData[3]?.name}
              images={projectsData[3]?.images}
              slug={"/".concat(projectsData[3]?.slug)}
              setCount={props.setCount}
              nextProject={projectsData[4]}
              onChange={handleChange}
            />
          </div>
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
          <div
            ref={(el) => (GrouRef.current[4] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={projectsData[4]?.color}
          >
            <Ballet
              image1={projectsData[2]?.images[0]}
              image2={projectsData[2]?.images[1]}
              image3={projectsData[2]?.images[2]}
              slug={"/".concat(projectsData[2]?.slug)}
              name={projectsData[2]?.name}
              images={projectsData[2]?.images}
              nextProject={projectsData[3]}
              onChange={handleChange}
            />
          </div>
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
          <div
            ref={(el) => (GrouRef.current[5] = el)}
            style={{ height: "100vh", width: "100vw" }}
            data-bgcolor={"white"}
          >
            <ViewAll
              name="View All Projects"
              slug="viewAll"
              onChange={handleChange}
            />
          </div>
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
          <ViewAll
            name="View All Projects"
            slug="viewAll"
            // viewAllTrans = {viewAllTrans}
            onChange={handleChange}
          />
        </Animator>
      </ScrollPage>
      </ScrollContainer>