import React, { Component } from "react";
import { Link } from "react-router-dom";

import DashLinks from "../dashboard/dashboard_nav";
import { Modal } from "semantic-ui-react";

class AlertDialog extends Component {
  render() {
    return (
      <>
        <div className="nav_div">
          <button
            type="button"
            className="createPost"
            data-toggle="modal"
            data-target={`#myModal-nav`}
          >
            <i className="fas fa-utensils" title="create dialog" />
          </button>

          <div
            className="modal fade"
            id={`myModal-nav`}
            role="dialog"
            onClick={function() {
              document.getElementById(`close-modal`).click();
            }}
          >
            <div className="modal-dialog">
              <button
                type="button"
                id="close-modal"
                data-dismiss="modal"
                style={{ display: "none" }}
              />

              <section className="modal_dashboard_wrapper">
                <div className="dashboard_icon_box">
                  <Link to="/dashboard/new/text" className="dashboard_icon">
                    <i className="fas fa circle-icon white">Aa</i>
                  </Link>

                  <label className="dashboard_text_label_modal">Text</label>
                </div>

                <div className="dashboard_icon_box">
                  <Link to="/dashboard/new/image" className="dashboard_icon">
                    <i className="fas fa-camera-retro modal-color fa circle-icon red" />
                  </Link>

                  <label className="dashboard_text_label_modal">Picture</label>
                </div>

                <div className="dashboard_icon_box">
                  <Link to="/dashboard/new/quote" className="dashboard_icon">
                    <i className="fas fa-quote-left modal-color fa circle-icon orange" />
                  </Link>
                  <label className="dashboard_text_label_modal">Quote</label>
                </div>

                <div className="dashboard_icon_box">
                  <Link to="/dashboard/new/link" className="dashboard_icon">
                    <i className="fas fa-link modal-color fa circle-icon green" />
                  </Link>
                  <label className="dashboard_text_label_modal">Link</label>
                </div>

                <div className="dashboard_icon_box">
                  <Link to="/dashboard/new/audio" className="dashboard_icon">
                    <i className="fas fa-headphones-alt modal-color fa circle-icon purple" />
                  </Link>
                  <label className="dashboard_text_label_modal">Audio</label>
                </div>

                <div className="dashboard_icon_box">
                  <Link to="/dashboard/new/video" className="dashboard_icon">
                    <i className="fas fa-video modal-color fa circle-icon pink" />
                  </Link>
                  <label className="dashboard_text_label_modal">Video</label>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AlertDialog;
