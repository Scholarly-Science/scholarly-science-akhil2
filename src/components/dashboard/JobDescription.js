import React, { useEffect } from "react";
import "./JobDescription.css";
import { data } from "./jobData";
import { Link } from "react-router-dom";

function JobDescription(props) {
  const jobid = props.match.params.jobId;
  const item = data.filter((item) => item.id == jobid);
  console.log(item);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jobDescription">
      {item?.map((item) => (
        <section
          className="section__header  jobDescription__backbutton "
          style={{
            backgroundImage: `url(${item.banner_mobile})`,
          }}
        >
          <Link
            className="section__header--link  jobDescription__backbtn"
            to="/dashboard/openings"
          >
            &#8592; Back
          </Link>
          <div className="banner-overlay"></div>
        </section>
      ))}

      <center>
        <div className="jobDescription__header"></div>
      </center>

      {item?.map((item) => (
        <div className="jobDescription__container">
          <img className="mobilebanner__image" src={item.src} alt="" />
          <div
            className="jobDescription__banner"
            style={{ backgroundImage: `url(${item.banner_desktop})` }}
          >
            <div className="color-overlay"></div>
            <img className="banner__image" src={item.src} alt="" />
          </div>
          <div className="jobDescription__title">
            <h1>{item.title}</h1>
            <div className="jobDescription__name">{item.type}</div>
          </div>

          <div className="jobDescription__desc">{item.description}</div>

          <div className="jobDescription__work">
            <h2>What You’ll Do :</h2>
            <ol>
              {item.work?.map((work) => (
                <div className="work__points">
                  <li>{work}</li>
                </div>
              ))}
            </ol>
            <div className="jobDescription__error">
              {/* <div className="warning__emoji"> */}
              <img className="warning" src="/images/logos/alert.svg" alt="" />
              <p>
                You have not submitted any assignments and didn't complete the
                registration.
                {/* Ensure the completion to discover your dream
                  opportunities. */}
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobDescription;
