import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import ClickableLinkChips from "../Components/Chips/ClickableLinkChips";
import BasicAccordion from "../Components/BasicAccordion/BasicAccordion";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import API_ENDPOINTS from "../Api";
import Loader from "../Components/Loader";

function Profile() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios.get(API_ENDPOINTS.getProfile + `/${id}`).then((resp) => {
        if (resp && resp.status == 200) {
          setUserData(resp?.data?.data);
          setLoading(false);
        }
      });
    };
    fetchData();
  }, []);

  const downloadResume = (resumeFilename) => {
    axios({
      method: "get",
      url: `${API_ENDPOINTS.downloadResume}/${resumeFilename}`,
      responseType: "blob",
    }).then((response) => {
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = resumeFilename;
      link.click();
    });
  };

  const handleDownloadClick = () => {
    if (userData?.resume?.trim() !== "" && userData.resume !== null) {
      downloadResume(userData.resume);
    } else {
      console.log("No resume available for download");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="profile-card mt-4">
                  <div className="container-fluid">
                    <div className="profile-image">
                      <img
                        src="https://www.marcorossini.altervista.org/images/heading-profile.jpg"
                        className="mt-4"
                      />
                    </div>
                    <h5 className="text-center mt-2">{userData?.firstName}</h5>
                    <p className="text-center">{userData?.currentRole}</p>
                    <div className="content">{userData?.about}</div>
                    <div className="mt-3">
                      <h5>Skills</h5>
                      <div>
                        {userData?.skills && userData?.skills?.length > 0 && (
                          <ClickableLinkChips skills={userData?.skills} />
                        )}
                      </div>
                    </div>
                    {/* <div className="mt-3">
                      <h5>About</h5>
                      <div className="content">
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content. Lorem ipsum may be used as a
                        placeholder before final copy is available.
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="profile-card mt-4 p-4">
                  <div className="container-fluid">
                    <div className="mt-3">
                      <h5>Basic Information</h5>
                      <div className="basic-information mt-4">
                        <div className="row">
                          <div className="col-md-4 mt-2">
                            <h5>AGE</h5>
                            <h6>{userData?.age} Years</h6>
                          </div>
                          <div className="col-md-4 mt-2">
                            <h5>YEARS OF EXPERIENCE</h5>
                            <h6>{userData?.yearsOfExp} Years</h6>
                          </div>
                          <div className="col-md-4 mt-2">
                            <h5>PHONE</h5>
                            <h6>{userData?.contact}</h6>
                          </div>
                          <div className="col-md-4 mt-2">
                            <h5>CTC</h5>
                            <h6>{userData?.cctc}</h6>
                          </div>
                          <div className="col-md-4 mt-2">
                            <h5>LOCATION</h5>
                            <h6>{userData?.location}</h6>
                          </div>
                          <div className="col-md-4 mt-2">
                            <h5>EMAIL</h5>
                            <h6>{userData?.email}</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    {userData?.resume?.trim() !== "" ||
                    userData?.resume !== null ? (
                      <button
                        className="dwnd-btn mt-3"
                        onClick={handleDownloadClick}
                      >
                        Download Resume
                      </button>
                    ) : (
                      <button className="dwnd-btn mt-3">Upload Resume</button>
                    )}
                  </div>
                </div>
                <div className="profile-card mt-4 p-4">
                  <div className="container-fluid">
                    <div className="mt-3">
                      <h5>Experiences</h5>
                      <div className=" mt-4">
                        <div className="row p-3">
                          {userData?.experience &&
                          userData?.experience?.length > 0 ? (
                            userData?.experience?.map((experience) => (
                              <div className="mt-4">
                                <div className="row mt-2">
                                  <div className="col-md-4">
                                    <img
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAACMCAMAAACJW6j5AAAAhFBMVEX///8AfMIAdcAAecEAd8AAcr9Dlc0Ad8GHstsdgsWvy+Uwjcq71usAcb/C2e230unY5vMAaryoyeX1+vyEtdzw9vvz+fyOu9/D2+3j7/cjiclMmc/a6fTM4fBwqtd7sdmawuFantFpptWWv+BiotQAZ7o6kcyjxOMbhMVVoNNuqNeLuN7wBDyqAAARWElEQVR4nO1dbYOiLNtOEB2nzNKaMsvs5W56dv7//3vUBE4QFNvKnS6PD+1OKeIhnO/gaDRgwIABAwYMGPAURME+SQ77Sd/9eHus0NzfXK7+HGf1H6MlwEu6E++CzxzBZL2Ll9FLLvkaxN78sC7/N3XmmxqZHz6iIJend2Z7cixC2AUJssbnbPf0y74EMUJr9kfgY5nqD9eiwM6T+xJuiIstERi7hBzjJ1/5BYhwzm1Uovhzi67SAR/2q5gOLSTTTOG/gQpJ57PR6KeQENgpZul6/iMe8Cqm4zHR0JwDTZ945dcgnu9HhUr0rh5Gfk766Dz/Eo54EdMT7Xh+E6ZX80Iur/ww/zySgvXtPBSOeA3Toc+JxiXejenxuPhc+d/5Z0AOxR/XRDjiJUyHTHJgRDZOkjhjLzc83Ddier4oPldktYxnY1SM6dHZEo54BdNrNqLJJaDCK5qFZ1TJlN/PdDTPin9Wbu67ENsrLbzFy5leIiY3ZBtj4hD8Jkyfin9WyNmnqGJ4/3KmnWpEY0/hhO426B2YHqG0+Cw14ti/+WKJJxzxfKY/qZC21d7+irwD00k5gFd+VtxwqRBHdioc8XymafMk0Bywc/3fz3Q4LwZyyXRkk8LnncxFWfl0pr8rKY31UZVlTX7/PkRucX8//8vyzz+lF3MVxfTzmb5SS043pHMs3yDuERY6cRkXEjKK8/tZSEP66UyvmZR+pwCpCongE57mqfT7s5k+2s92i/4ZOPMj1fnLw/wg//xspu3KxHN/2o/97djPSTrZxtvJkdzMawFPZnpHhQcK2w/+9dge0byAmyoUz5OZzmhso0khvhGiXRAGO6VKejLTBxrxeAPn5C/xZKav+L81phvwXKa/eGD0vyCnG/FcpmOfNm7XlfF/DHcx/bWbZKuPNE0/TsG2/nMcVJicWOs4mQSmyBbn5HJxDulK1Xoroni2W0/X690ufrS3RDPf90DL9GLPIDQeh2fPJ8h1bYxt10UEH2VlF8xZDYnFW0fmcG8ZMBshgpLMnO3l+nQe2z5h8C0n/V7/fcVQPDkdnSsmfgFkbZI7WtUybbl2BZ+3GWUbkJSq4BJPFA0Bsh6HIh+WiVlmNbarcf5gpAxlWU+CvGN4z+So7vnz6JHi4cNG814hLw26DHAt0x77HtH7XO7rlTHVIfgTnPpQpouOub7KFYD4yjxf07eiATsn5nCXnTk9+LWhRWEjPzE3qQyYJtWYzpCtul51kMNH/qOZLm6KpA3jOlq4jVUOtyY8fQM6BFfS3K4tVyrpYcx0PG7mz3ZZfd0TmC5klNZOzJB+OAP4a10DGsw2RBZGMvDm4UxP2wcNq/l6CtNFYl2phJYXoToKu8jNdapb5wjXwmvNWAjjOZfNbq1Q5QlMZz5UCHb9kgX8SmgFc6r7gYTDRAOFFMxvqrBtal8jRW5mDYZArv2sZHEKw/D0cfCQPDj8LuZC5IDxkj8763I4ng+XfG7BCfRgpuPRiZfGuAQ75/R4yBV9TWxXSeHlrMKW29PWJp4pEX+KfJRspavstD94fo2rldz/gA9onBsp0MSIg4PYRVQ7u4HojcvbtfbcplvuTg4fHY8e0xlhF92c6M1Eux9P1hdy0fAnGxd4rOnAThjT+QW+uZkRhxfpcZKjePaaE43GdTkcnwXJ0kEncqKRV7Mv4pNFs6MPZdqmRGP/IFWVrx2xglROy7YzPYEPCxP5AqPtH/FpIqHYLeaDnqjdfUFnEGND78hoqU+jEqGHHs+0VclkNJ4p7kQUp5KB0Mr02gcno6tqecBW1HgI6rUxvTgmupUF8Ao40RxUuyt2Sb3BsipkyKOZvt1Lpmzg6yJYGlhwm9qY3kGiyULTx29BXKMz+4FJNUtLNC+DKHkzTMIzpUcaLMM4QY9muvwRa/3ZBEpaJEziFqZjeGbD1N5akGrC5rOtvqoEh5/smunEjHa7JfsZEvfhTNubBhfNgaJWqCdpYfoKT2yKTHxtoGKkhnvISisbPbUtnDhNBzIYHx6PzZWsGdPYa4qlRNC4FuZxM9NHaLE2z+toIwiQ28FMSrekGRJ+LjGplmIGDfpuPdY87G7GdAsPwKi1XChtG5kO+FjDblusLfLg+C9NnJirreaY2g7Y3CYx+JRyQh65QtOI6daRcAF+GjT0mpj+cjtcQJbp2QgYcK30ge4RA51I9WFDKeEdMLI9Wo2jCZADUHI1Mc1NVgvprA4IwVwr5MeCcu/uW04Fc85uvxTrtC0XfP0VTJgm7WF0aIepOl1nGhh4Wv9RxB6MajcBFQ5uqzjlJ1q49Tpj83a7wIBpEyIOnZke8zN8w4SIJyperhA/28488YfUWg6xZRPgsfl8E2/cwAhdgfEGvtYzPeET2jWRHQWAZitk6NWc6SWXbq1Cfc+t9NZ2u8Aku2WQwYHhBfC1nmk+pDE2zsYlwKomsw17VO1j78hHQotOjMDwf/WYVkWFZUw7Mg3UG8qMOxtDpXi4MKbbNKIwHVqO5l02mszm6Inp5J4hLdgruTfF/mfgEgPPx208EOgP44CUEfpheskHZ6fC6hl0rDmIIsgoIeQdbJSGWxg4dE2qH0zRD9NAgZqG1264CDFadc+VAOK30SHZwwCLYUDKDP0wzUNLHYsBNclg1D4xUn6jDf5BJD5JA0/CGL0wDaZoR0sq0qTd/VZLEVzT1ft+odg+xo9bVdYL0xnPeKKOQZyzphgCJW0yFQY/tAdtpOax3bVIRItemAaWR9cgjraWxG6bHSD4oTWUtzWNi/12E9IMvTANTNauZdVLHdP5SB0371IGzDddfCG9TTYxR2w9ZjlDH0zP+OhqyP9pMNaIj+IaxGlqbgH8RLVZGJVk4I0kotoeoRn6YBqonZYYvgKCGVbj2k/0pMQgdqrWibfu2itZiGBy+Xuu+2AakNW9/vMTio+rJaOJFJjlUj7h23whsZiEvjXbOF1M0AfTPMOLz7WW2gBET94zxQDH/kVjL0yBTlSFnm9DufDB47o2yJv9O677YJofandf4xyBmY3WU5V7no9rNdfgEFWo5ObclCUeIenQrBl6YBr4YfdEgIG2yq21UBkJwWSjMhhAQkChim/6sBJoe9VGijnX9+9E0gPTYGres/IWGB9FdCrw1aEQYmW1U4GJaB9rv94661Z2517zCK/3Bq37YPpvjDzBSyxNiK2nWYeCyEn2G8G59QqD2yNkTutJHTe0kHu6a6VcD0xDc/qOCE7Kia0GZqoe1iUp4rkwIZBJ7Vb6kBdY7rDaoMQI37OMtQemwe2aVF/IAClySstMuz2t7OCB+jTZwLw9QTjLoj+69UTiWjUz/D6mF6DHbAAGns5LJxd4DeA0SWWkUVlIIVX45Y9QzTUm467TsWfpcQ/TYEwDc/yztkCBHlTsrEYBoq7SAqPbM6glNScbLdemKf0KPTC9/Ts5va/J6QrBWCOvScJVGEgIiNmeSh/WY68T3bhG404R399newCu5DT3LvGVSsy9Mk7AhBJyV5U+rNt+o3KNidqStLt0vwemgVWL7nC6QOlGPc8X723VwkmQO4G5b3Di7fn5mtTvNq0tuSvRZfPK3+cjgjiRKqIfZZZiBGKLjmoQoQIVrlE51BvKGZYnXOcad5mUfcQ9uhWiyQDVeZqeTS51rjmJynqOSh82+n+BSmCb6/Q+mOaj0v5j2k8OYDprFWousGVSEJXpwEokokxpLfJZO7VmzZcU9cE0v9cOS58oYMVYQ+XLzJGdmWoBsJAQoIbaTU+aVJ3VuDYogLihD6aBqPQNu6m8UvNzWm9EwcpuD67lqr6q4qUmNud6Iz1C0yUafTANDer2Oi8JIPLZVrOfiXKVai9QUFwVjlX60DBPH7qCKWkwE0r0khvna70MVkdJSDpYLuKeJJgqBfDVjdxKH5rmwJeJ0KxhCWcvTPMVBF333BhF4B4NSvqOcKqj6ktQFXgTGFU9jXkvVsLaYLPsQC9MgzhPl5reAnDFm0m6dwGopn7JkgvwcupX+rBLpg2s8DNdeNQL09Af7+gl/uh9cTVSRY3/WdSJlX/YKdr12XlBVD+1prxGzu6YHQcBZkP/jLvfzHmHcdtptfy8a1k6CCk2l75T9MM02J8AdRIfsAbBsFaEn8JrTIGXmlaLl833/qi14RsVtPfD9JdBNaISMJBn6skz/cvD2bB4t5IvnWt8eEWlmUfe0zqXM3cTzXecy58Q3KvDNDrMFgBzSQXaQbOy4FHOOBqANfFPMw3zLh1KKIDb4hrbh2wCgSgLnxvYEVPi5jjTzpg9856YhhVj5rEPuDaig3fJ1pdzOw486bLNroq5wInenFlIoS+mwbJx7WuiagAuh93B5aG3AgsPpOLge5I/fCMXo8P7YhrGeUy9lyX0QjpkINmNAPNCKFk1c4JkUKYN4yW9Mb3l4UdkGKMB2wC4XQLb9AFB30RcpAVS4v9n7MBQ6YH/YR+xBMhxm+3t+glkK85N2MxQifHQIfx2AWvMQKDbQaazhXqahim6/piGm26YLGaFNc2kuLm94RK2b1c19kBEQEj9JNg0jUwZMkxw9cg03EvFQNRt5ATgApmVqtITJa0HFAW0YxKMfaNQLt0XyzDsITAt3O7dTENN3Ly3GIiztVvHYEFEKTvK+a/ZClMAC/xLWg/saATtzCL+TUwkL31Spk7u45k2HtOj0QVsxaSsaeE4Q9lxG5yFpEVJm7BmW8zVGOHXhoK2zDSgTatEYM64aeCmV6YjsPIPNY7qA3TDK8pKnWbbLdY4DxvKv1CHU0ya3HI6uG2kbmmMu3H7SYhemR7FYNdsV71leoHlGG5WQxPalfVAkqbx59Az6+VGdLmuGOem2TPiNDUbswSdsSXeL9P50ODnYVdzoQncxRwxGUrtNOynumc08+jtKVblM00pUMrylNjfax99wLI2vrFz2TPToxlkkRwU4yg+wxQ3UFbcInbRH1UUJD6yMxXBFWr6SPtegIywjdQvN4kPPGBqnhLrm2kwDwuJSVLJb4hTH7oYPrgz6HvY5LoSyV4GoPAUe3WDnVIq3V4CnUfXv4TywJ4efNblNj0O0TvTuRCGVGJyyRhl20zcvR4LG4kLXt7tBQb772C9262D73QMi0Pta10OUM8FS5pSYLpQjWSchrt4+RV9LeNpdsBghpEuEcD+mR6N/oivCUEEXZPzMbm6RKxCsi1h2C5qS46xixAh+fnIxtCscRSGGM3kyq9pkJgumy0adW9tY94wbt++BeJfYHoU4Dpp9ZeM+GeRsIVuaYvUlPINAmz/WjkFcCaNrXHYbrfdKP4JpkdfZ91CN94LSw5HZK3nFNfVWGvMmK6Z8YuWF0BV5/mHjlmaD5+9K48IZFjs+7nBs5vyF/Uh8HXIWictmZWZouYZ8qxaArhN6q+UkXnWLfWmSk2RAtjWS4Jl2HdsjbALPxkERkOGb4NYVQyagZ0O1Y0re+L4sgyhfOU8q13eWVp/iSA7y0bkqEuBsSi+Ml88OxD9y68KsX1+xNYqPSL+8eqvBcQIHZrE16R4e6Es1AuWvWPDw6UFOjqn+yt0EKmrirxhYifho18l2gdmJwf5uZ53XdsulL1/TSetsevt5z6x/OJVn6WcIn5u7n02TkQW32sIjH+tfxLXL5vMu4PK3uDDav0ONFfYTrPV/s8x/Th9zjrcVjzbTSfBdDczEHY0X9tavPg1m4ann4+Pj59TOJ09cvPN/wZYDqJL3nfAHaDeyWNfuTCgBlZWY15pMuAu8KLAvnvy5mDr7IwXuA24D2xj9m6rAAZ0BSv06LyaaUA3sIJe88TUgHvApPQdK6kHdAEb0o99W8sAGbwcr9tSpgFdwWxp0+XeA+4Dr/AdTLznguVj3Ye+f2iADL64tvNCzwGdwMsh71nYMsAYa254ZH335b3h2bjCYOI9FRNvXGEzRPEGDBgwYMCAV+P/AdXa97/+gQJpAAAAAElFTkSuQmCC"
                                      className="w-75 com-logo"
                                    />
                                  </div>
                                  <div className="col-md-8">
                                    <div>
                                      <h5 style={{ marginLeft: "20px" }}>
                                        {experience?.jobTitle}
                                      </h5>
                                      <div
                                        className="basic-information mt-4"
                                        style={{ marginLeft: "20px" }}
                                      >
                                        <h6>{experience?.role}</h6>
                                        <h5>
                                          {experience?.startDate} -{" "}
                                          {experience?.endDate}
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr />
                              </div>
                            ))
                          ) : (
                            <>No experience added</>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BasicAccordion />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
