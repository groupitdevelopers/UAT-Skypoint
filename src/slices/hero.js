import React from "react"

export const Hero = props => {
  const cls = props.slice.primary.page_type ? "hero" : "subHero"
  const anchorId = props.slice.primary.anchor_id
  
  return (
    <>
      {!props.slice.primary.background_type  && (
      <>
        <section
          className={`${cls}`}
          style={{
            backgroundImage: `url(${props.slice.primary.background.url})`,
          }}
          id = {anchorId}
        >
          <div className="container">
            <div className="row">
              <div className="txt-white p-3 hero-text">
                <h1>{props.slice.primary.header_text}</h1>
                <div className="hero-content">{props.slice.primary.title}</div>
                <div className="buttons">
                  {props.slice.items.map((btn, index) => (
                    <a href={btn.button_link.uid === null ? btn.button_link.url : '/'+btn.button_link.uid}
                      key={index}
                      className={`btn btn-lg btn-${btn.button_type}`}
                    >
                      {btn.button_text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      )}
      {props.slice.primary.background_type && (
        <section 
          className={`${cls}`}
        >          
          <video playsInline autoPlay muted loop className="videoBackground mdV lgV">
            <source src={props.slice.primary.video.url} type="video/mp4" />
          </video>
          <div className=" xsV smV">
          {props.slice.primary.mobile_video.url && (
          <video playsInline autoPlay muted loop className="videoBackground">
            <source src={props.slice.primary.mobile_video.url} type="video/mp4" />
          </video>
          )}
          {!props.slice.primary.mobile_video.url && (
          <video playsInline autoPlay muted loop className="videoBackground">
            <source src={props.slice.primary.video.url} type="video/mp4" />
          </video>
          )}
          </div>
          <div className="container">
            <div className="row">
              <div className="txt-white p-3 hero-text">
                <h1>{props.slice.primary.header_text}</h1>
                <div className="hero-content">{props.slice.primary.title}</div>
                <div className="buttons">
                  {props.slice.items.map((btn, index) => (
                    <a href={ btn.button_link.uid === null ? btn.button_link.url : '/'+btn.button_link.uid }
                      key={index}
                      className={`btn btn-lg btn-${btn.button_type}`}
                    >
                      {btn.button_text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
