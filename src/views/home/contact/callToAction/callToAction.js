import React from "react"

import './callToAction.scss';

const CallToAction = () => {
  return (
    <section className="CallToAction center-xs">
      <div className="CallToAction__box">
        <div className="CallToAction__content">
          <div className="col-md-3 col-xs-12">
            <h1 className="title">Start a project</h1>
          </div>
          <div className="col-md-5 col-xs-12">
            <p className="text">Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
          </div>
          <div className="col-md-3 col-xs-12">
            <a href="#" class="btn btn--outline">Lets do this</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction