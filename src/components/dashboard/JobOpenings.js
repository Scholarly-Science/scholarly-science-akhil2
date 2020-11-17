import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./JobOpenings.css";
import { data } from "./jobData";
import JobOpeningsSkeleton from "./JobOpeningsSkeleton.js";

function JobOpenings() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (id) => {
    // history.push(`/openings/:${id}`);
    history.push("/dashboard/openings-detail/" + id);
  };
  return (
    <div className="jobOpenings">
      <div className="jobOpenings__header"></div>
      <div className="jobOpenings__container">
        <h4>OPENINGS OF THE DAY</h4>

        <div className="card__section">
          {data?.map((item) =>
            loading ? (
              <JobOpeningsSkeleton />
            ) : (
              <div
                className="jobOpenings__card"
                onClick={() => handleClick(item.id)}
              >
                <div className="jobOpenings__info">
                  <div
                    className="jobOpenings__image"
                    style={{
                      backgroundImage: `url(${item.src})`,
                    }}
                  ></div>

                  <div className="jobOpenings__infoTitle">{item.title}</div>
                  <div className="type">
                    {item.type} <span>• {item.type_span}</span>{" "}
                  </div>

                  <div className="jobOpenings__location"></div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="loadmore">That's all for the day!</div>
      </div>
    </div>
  );
}

export default JobOpenings;
