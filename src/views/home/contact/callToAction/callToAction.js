import React from "react"

import './callToAction.scss';

const CallToAction = () => {
  return (
    <section className="CallToAction center-xs">
      <div className="CallToAction__box">
        <div className="CallToAction__content">

            <h1 className="title">Start a project</h1>

            <p className="text">Interested in working together? Lets meet up for a chat. The <strong>coffee</strong> is on me.</p>

            <a href="mailto:kaiz.hudda@gmail.com" class="btn btn--outline">Lets do this</a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction