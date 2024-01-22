import React from "react";
import DashboardImage1 from "../../assets/images/announcements-dashboard-img-1.png";
import DashboardImage2 from "../../assets/images/announcements-dashboard-img-2.png";
import { viewdetails } from "../../config/routConst";
import { Link } from "react-router-dom";
const Announcements = () => {
  const AnnouncementsContnet = [
    {
      image: DashboardImage1,
      title: "Introducing Topone trader Official Community On Your Dashboard",
      date: "Dec 19, 2023.",
    },
    {
      image: DashboardImage2,
      title: "Introducing Topone trader Official Community On Your Dashboard",
      date: "Dec 19, 2023.",
    },
    {
      image: DashboardImage1,
      title: "Introducing Topone trader Official Community On Your Dashboard",
      date: "Dec 19, 2023.",
    },
    {
      image: DashboardImage2,
      title: "Introducing Topone trader Official Community On Your Dashboard",
      date: "Dec 19, 2023.",
    },
    {
      image: DashboardImage1,
      title: "Introducing Topone trader Official Community On Your Dashboard",
      date: "Dec 19, 2023.",
    },
    {
      image: DashboardImage2,
      title: "Introducing Topone trader Official Community On Your Dashboard",
      date: "Dec 19, 2023.",
    },
  ];
  return (
    <div className="announcements-page">
      <div className="announcements-wrapper">
        <ul className="new-community-wrapper">
          {AnnouncementsContnet.map((details, i) => {
            return (
              <li key={i}>
                <Link to={viewdetails} className="announcements-box bg-white">
                <div className="community-image-wrapper">
                  <span>
                    New <br /> Community
                  </span>
                  <div className="image-box">
                    <img src={details.image} alt="dashboard-image" />
                  </div>
                </div>
                <div className="content">
                  <h5>{details.title}</h5>
                  <p className="date">
                    <i className="date-icon"></i> {details.date}
                  </p>
                </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="custom-pagination-wrapper">
          <ul className="pagination">
            <li>
              <a href="javascript:void(0)" className="prev-btn">
                <i className="prev-btn-icon"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="active">
                1
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">2</a>
            </li>
            <li>
              <a href="javascript:void(0)">3</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="next-btn">
                <i className="next-btn-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
