import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./AllJob.css";
import OutlinedCard from "../Components/Card/Card";
import axios from "axios";
import API_ENDPOINTS from "../Api";
import Loader from "../Components/Loader";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReactPaginate from "react-paginate";
import Carousel from "../Components/Carousel/Carousel";

function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(2);

  const indexOfLastJob = (currentPage + 1) * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  let currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [shift, setShift] = useState([]);
  const [locations, setLocations] = useState([]);

  const [checkedLocations, setCheckedLocations] = useState([]);
  const [checkedShifts, setCheckedShifts] = useState([]);

  const [skills, setSkills] = useState([]);

  const handleCheckboxShiftChange = (shift) => {
    if (checkedShifts.includes(shift)) {
      setCheckedShifts(checkedShifts.filter((item) => item !== shift));
    } else {
      setCheckedShifts([...checkedShifts, shift]);
    }
  };

  const handleCheckboxChange = (location) => {
    if (checkedLocations.includes(location)) {
      setCheckedLocations(checkedLocations.filter((item) => item !== location));
    } else {
      setCheckedLocations([...checkedLocations, location]);
    }
  };

  const handleSelectShift = (shift) => {
    let test = currentJobs.filter((obj) => obj.shift === shift);
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        let res = await axios.get(API_ENDPOINTS.getAllJobs);

        if (res && res.data) {
          setLoading(false);
          let available_shifts = res?.data?.data
            .map((s) => {
              return s.shift;
            })
            .filter(function (s, index, self) {
              return index === self.indexOf(s);
            });
          setShift(available_shifts);
          let available_locations = res?.data?.data
            .map((l) => {
              return l.location;
            })
            .filter(function (l, index, self) {
              return index === self.indexOf(l);
            });
          if (available_locations) {
            setLocations(available_locations);
          }

          setJobs(res?.data?.data);
        }
      };
      fetchData();
    } catch (error) {
      setError(true);
    }
  }, []);

  const handleSearch = async () => {
    const allJobs = jobs;

    const filteredAndSortedJobs = allJobs
      .filter((job) => {
        job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase());
      })
      .sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));

    setFilteredJobs(filteredAndSortedJobs);
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Navbar />

      <div className="mt-5">
        <div className="container-fluid">
          <div class="overlay" style={{ display: "none" }}></div>
          <div class="search-section">
            <div class="container-fluid container-xl">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <input
                  type="search"
                  placeholder="Search by keywords (.Net, Nodejs ... etc)"
                  className="form-control search-input p-4"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(235, 243, 241, 0.2), 0 6px 20px 0 rgba(119, 138, 129, 0.19)",
                    height: "40px",
                  }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="searchBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
              <div class="row main-content ml-md-0 mt-4">
                <Carousel />
                <div class="sidebar col-md-3 px-0">
                  <h1 class="border-bottom filter-header d-flex d-md-none p-3 mb-0 align-items-center">
                    <span class="mr-2 filter-close-btn">X</span>
                    Filters
                    <span class="ml-auto text-uppercase">Reset Filters</span>
                  </h1>
                  <div class="sidebar__inner ">
                    <div class="filter-body">
                      <div className="filtercard p-2">
                        <h2 class="border-bottom filter-title">Job Options</h2>
                        <div class="mb-30 filter-options">
                          {shift &&
                            shift.length > 0 &&
                            shift.map((s, index) => (
                              <div
                                key={index}
                                className="custom-control custom-checkbox mb-3"
                              >
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id={`shift-${index}`}
                                  checked={checkedShifts.includes(s)}
                                  onChange={() => {
                                    handleCheckboxShiftChange(s);
                                    handleSelectShift(s);
                                  }}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor={`shift-${index}`}
                                >
                                  {s} Shift
                                </label>
                              </div>
                            ))}
                        </div>

                        <h2 class="font-xbold body-font border-bottom filter-title">
                          Location
                        </h2>
                        <div class="mb-3 filter-options" id="cusine-options">
                          {locations && locations.length > 0 ? (
                            locations.map((location, index) => (
                              <div key={index}>
                                <div className="custom-control custom-checkbox mb-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={location}
                                    checked={checkedLocations.includes(
                                      location
                                    )}
                                    onChange={() =>
                                      handleCheckboxChange(location)
                                    }
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={location}
                                  >
                                    {location}
                                  </label>
                                </div>
                              </div>
                            ))
                          ) : (
                            <>No locations available</>
                          )}
                        </div>

                        <h2 class="font-xbold body-font border-bottom filter-title">
                          Salary Range Range
                        </h2>
                        <div class="mb-3 theme-clr xs2-font d-flex justify-content-between">
                          <span id="slider-range-value1">Min $100</span>
                          <span id="slider-range-value2">Max $10,000</span>
                        </div>
                        <div class="mb-30 filter-options">
                          <div>
                            <div id="slider-range">
                              <form>
                                <div class="form-group">
                                  <input
                                    type="range"
                                    class="form-control-range"
                                    id=""
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <h2 class="border-bottom filter-title">Skills</h2>
                        <div class="mb-3 filter-options" id="services-options">
                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Breakfast"
                              checked
                            />
                            <label class="custom-control-label" for="Breakfast">
                              React JS
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Lunch"
                            />
                            <label class="custom-control-label" for="Lunch">
                              Node JS
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Donner"
                            />
                            <label class="custom-control-label" for="Donner">
                              Mongodb
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Cafe"
                            />
                            <label class="custom-control-label" for="Cafe">
                              Php
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Brunch"
                            />
                            <label class="custom-control-label" for="Brunch">
                              Express JS
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="other"
                            />
                            <label class="custom-control-label" for="other">
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content col-md-9">
                  <div class="d-flex justify-content-between border-bottom align-items-center mt-2">
                    <h2 class="title">All Jobs</h2>

                    <div class="filters-actions">
                      <div>
                        <button class="btn filter-btn d-md-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-2"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
                          </svg>
                          Filter
                        </button>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="dropdown position-relative sort-drop">
                          <button
                            type="button"
                            class="btn btn-transparent dropdown-toggle body-clr p-0 py-1 sm-font fw-400 sort-toggle"
                            data-toggle="dropdown"
                          >
                            <span class="mr-2 d-md-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                enable-background="new 0 0 24 24"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#000000"
                              >
                                <g>
                                  <path d="M0,0h24 M24,24H0" fill="none" />
                                  <path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" />
                                  <path d="M0,0h24v24H0V0z" fill="none" />
                                </g>
                              </svg>
                            </span>
                            <span class="d-md-inline-block ml-md-2 font-semibold">
                              Newest First
                            </span>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right p-0 no-caret">
                            <a
                              class="dropdown-item selected"
                              href="javascript:void(0)"
                            >
                              Newest First
                            </a>
                            <a class="dropdown-item" href="javascript:void(0)">
                              Lowest First
                            </a>
                            <a class="dropdown-item" href="javascript:void(0)">
                              Highest First
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row" style={{ marginLeft: "10px" }}>
                    {loading ? (
                      <Loader class="text-center" />
                    ) : (
                      <div className="row col-md-12">
                        {/* <OutlinedCard data={jobs} className="w-100" /> */}
                        {currentJobs.map((job, index) => (
                          <OutlinedCard
                            key={index}
                            data={job}
                            className="w-100"
                          />
                        ))}
                        <ReactPaginate
                          previousLabel={"Previous"}
                          nextLabel={"Next"}
                          breakLabel={"..."}
                          breakClassName={"break-me"}
                          pageCount={Math.ceil(jobs.length / jobsPerPage)}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={handlePageClick}
                          containerClassName={"pagination"}
                          activeClassName={"active"}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllJobs;
