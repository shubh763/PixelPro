import React, { useEffect } from "react";
import InnerBanner from "../Components/InnerBanner";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../../redux/slice/homeSlice/sliceHome";
import moment from "moment";

const WhatsNewDetail = () => {
  const dispatch = useDispatch();
  const { news, loading } = useSelector((state) => state.sliceHome);

  useEffect(() => {
    dispatch(fetchNews("get-news"));
  }, [dispatch]);
  return (
    <>
      <InnerBanner title="Latest News" />
      <div className="about-bg inner-page-section">
        <div className="title-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="page-title">Latest News</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="table-responsive mt-4">
            <table className="table table-bordered whatsnew-tble">
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {news.data && news.data.length > 0 ? (
                  news.data.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <p>{item.title}</p>
                      </td>
                      <td>{moment(item.news_date).format("DD-MM-YYYY")}</td>
                      <td>
                        <a
                          target="_blank"
                          href={
                            process.env.REACT_APP_IMAGE_URL + item.attached_file
                          }
                        >
                          Read&nbsp;More
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div>No data Found</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNewDetail;
