import React from 'react'
import './Webpage.css'
import ATGLogo from '../assets/ATG logo.svg'
import BackImage from "../assets/backImage.jpg"
import searchIcon from "../assets/searchIcon.png"
import naturePic from "../assets/naturePic.jpg"
import { Link } from 'react-router-dom'


function Webpage() {

    return (
        <>
            <nav className=" navbar  navbar-light bg-light ">
                <div className="container">
                    <Link className="navbar-brand" to="#">
                        <img src={ATGLogo} alt="" width="162.57" height="24" />
                    </Link>
                    <form className="d-flex  box">
                        <button className='btn ' type='button'>
                            <img src={searchIcon} alt="" width="22" height="24" radius="21px" />
                        </button>
                        <input className="form-control searchbox" type="search" placeholder="Search For Your Favourite GROUP In ATG" aria-label="Search" />
                    </form>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                        <button className="btn" type="button">
                            Create account
                            <span className='text-primary fw-bold p-lg-2 '>
                                <Link to="/signup">It's Free!  </Link>
                            </span>
                        </button>

                    </div>

                </div>

            </nav>
            <div className="card bg-dark text-white ">
                <img src={BackImage} className="card-img" alt="..." />
                <div className="content ">
                    <h1 >Computer Engineering</h1>
                    <p>140052666,Computer Engineer follow this</p>
                </div>
            </div>
            <div className=" d-lg-flex justify-content-between mx-auto align-item-center lower">
                <ul className='nav my-2 '>
                    <li className='nav-item1'>
                        <Link className="nav-link active" to="/"><u>All Posts(32)</u></Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#" className="nav-link ">Article</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#" className="nav-link ">Eduaction</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#" className="nav-link">Events</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#" className="nav-link">Job</Link>
                    </li>
                </ul>
                <div className='d-flex my-2 align-item-center'>
                    <button className='btn button'>
                        Write Post <i class="fa-solid fa-angle-down "></i>
                    </button>
                    <button className='btn btn-primary ms-2 gap-2 d-flex align-items-center'>
                        <i class="fa-solid fa-people-group"></i>
                        Join Group
                    </button>
                </div>
            </div>
            <hr className="mx-auto mt-0  line" />

            <div className="mx-auto d-flex gap-5 justify-content-center " style={{ maxWidth: "1040px" }}>
                <div className='posts-center position-relative'>

                    <div className='d-flex flex-column border border-1 rounded-2' style={{ maxWidth: "692px", borderColor: "rgb(224,224,224)", fill: "rgb(255,255,255 )" }}>
                        <img className="imgpost" src={naturePic} alt="Nature" />
                        <div className="p-4">
                            <h3 className="d-flex">
                                <i class="fa-solid fa-pen"></i>Article
                            </h3>
                            <div className='d-flex gap-6 justify-content-between'>
                                <h4>
                                    What if famous brands had regular fonts? Meet RegularBrands!
                                </h4>
                                <div className='btn align-self-start'>
                                    <div className="dropdown">
                                        <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis-vertical"></i>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button className='dropdown-item' type="button">Edit</button>
                                            </li>
                                            <li>
                                                <button className='dropdown-item' type="button">Report</button>
                                            </li>
                                            <li>
                                                <button className='dropdown-item' type="button">Option</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className='d-flex align-item-center gap-5 list-unstyled'></ul>
                            <p>
                                I've worked in UX for the better part of a decade. From now on, I plan to rei….
                            </p>
                            <div className='d-flex justify-content-between align-item-center'>
                                <div className="d-flex align-items-center gap-2">
                                    <img src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" alt="profile" width="48" height="48" />Pankaj Rathi
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-none d-lg-block pe-4">
                                        <i class="fa-solid fa-eye"></i>
                                        <span>1.4k views</span>
                                    </div>
                                    <button className="btn d-flex align-items-center gap-2">
                                        <i class="fa-solid fa-share-nodes"></i>
                                        <span className='d-lg-none'>Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex flex-column border border-1 rounded-2' style={{ maxWidth: "692px", borderColor: "rgb(224,224,224)", fill: "rgb(255,255,255 )" }}>
                        <img className="imgpost" src="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg" alt="Education" />
                        <div className="p-4">
                            <h3 className="d-flex">
                                <i class="fa-solid fa-pen"></i> Education
                            </h3>
                            <div className='d-flex gap-6 justify-content-between'>
                                <h4>
                                    Tax Benefits for Investment under National Pension Scheme launched by Government
                                </h4>
                                <div className='btn align-self-start'>
                                    <div className="dropdown">
                                        <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis-vertical"></i>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button className='dropdown-item' type="button">Edit</button>
                                            </li>
                                            <li>
                                                <button className='dropdown-item' type="button">Report</button>
                                            </li>
                                            <li>
                                                <button className='dropdown-item' type="button">Option</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className='d-flex align-item-center gap-5 list-unstyled'></ul>
                            <p>
                                I've worked in UX for the better part of a decade. From now on, I plan to rei….
                            </p>
                            <div className='d-flex justify-content-between align-item-center'>
                                <div className="d-flex align-items-center gap-2">
                                    <img src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" alt="profile" width="48" height="48" />Sam Root
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-none d-lg-block pe-4">
                                        <i class="fa-solid fa-eye"></i>
                                        <span>1.4k views</span>
                                    </div>
                                    <button className="btn d-flex align-items-center gap-2">
                                        <i class="fa-solid fa-share-nodes"></i>
                                        <span className='d-lg-none'>Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex flex-column border border-1 rounded-2' style={{ maxWidth: "692px", borderColor: "rgb(224,224,224)", fill: "rgb(255,255,255 )" }}>
                        <img className="imgpost" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zTW6GxTE56hjnABR76ftY7FqIrpLouJVwfulYbcSHw&s" alt="software" />
                        <div className="p-4">
                            <h3 className="d-flex">
                                <i class="fa-solid fa-calendar-days"></i>Meetup
                            </h3>
                            <div className='d-flex gap-6 justify-content-between'>
                                <h4>
                                    Finance & Investment Elite Social Mixer @Lujiazui
                                </h4>
                                <div className='btn align-self-start'>
                                    <div className="dropdown">
                                        <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis-vertical"></i>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button className='dropdown-item' type="button">Edit</button>
                                            </li>
                                            <li>
                                                <button className='dropdown-item' type="button">Report</button>
                                            </li>
                                            <li>
                                                <button className='dropdown-item' type="button">Option</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className='d-flex align-item-center gap-5 list-unstyled'></ul>
                            <p >
                                <i class="fa-solid fa-calendar-days"></i>fri,12 Oct,2018 &nbsp;&nbsp; &nbsp;&nbsp;<span><i class="fa-solid fa-location-dot"></i>Ahemdabad,India</span>
                            </p>
                            <button className='custom-post-link btn mb-4 fw-semibold' style={{ color: "rgb(229,97,53)", width: "100%" }}>Visit Website</button>
                            <div className='d-flex justify-content-between align-item-center'>
                                <div className="d-flex align-items-center gap-2">
                                    <img src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" alt="profile" width="48" height="48" />james bond
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-none d-lg-block pe-4">
                                        <i class="fa-solid fa-eye"></i>
                                        <span>1.4k views</span>
                                    </div>
                                    <button className="btn d-flex align-items-center gap-2">
                                        <i class="fa-solid fa-share-nodes"></i>
                                        <span className='d-lg-none'>Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex flex-column border border-1 rounded-2' style={{ maxWidth: "692px", borderColor: "rgb(224,224,224)", fill: "rgb(255,255,255 )" }}>
                        <div className="p-4">
                            <h3 className="d-flex">
                                <i class="fa-solid fa-pen"></i>Job
                            </h3>
                            <div className='d-flex gap-6 justify-content-between'>
                                <h4>
                                    Software Developers
                                </h4>
                                <div className='btn align-self-start'>
                                    <div className="dropdown">
                                        <div type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis-vertical"></i>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button className='dropdown-item' type="button">Edit</button>
                                            </li>
                                            <li>
                                                <button className='dropdown-item' type="button">Report</button>
                                            </li>
                                            <li>
                                                <button className='dropdown-item' type="button">Option</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className='d-flex align-item-center gap-5 list-unstyled'></ul>
                            <p>
                                <i class="fa-solid fa-bag-shopping"></i>Innovaccer Analytics Private Ltd. &nbsp;&nbsp;&nbsp;&nbsp;  <span><i class="fa-solid fa-location-dot"></i>Noida,India</span>
                            </p>
                            <button className='custom-post-link btn mb-4 fw-semibold' style={{ color: "rgb(2,184,117)", width: "100%" }}>Apply for job</button>
                            <div className='d-flex justify-content-between align-item-center'>
                                <div className="d-flex align-items-center gap-2">
                                    <img src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" alt="profile" width="48" height="48" />Williamson
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-none d-lg-block pe-4">
                                        <i class="fa-solid fa-eye"></i>
                                        <span>1.4k views</span>
                                    </div>
                                    <button className="btn d-flex align-items-center gap-2">
                                        <i class="fa-solid fa-share-nodes"></i>
                                        <span className='d-lg-none'>Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="container d-none d-lg-flex flex-column mt-4">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <i class="fa-solid fa-location-dot"> </i><input className='input-text' type='text' placeholder="enter your Location" />
                        </div>
                        <button className='btn'>
                            <i class="fa-solid fa-pen"></i>
                        </button>
                    </div>
                    <hr className='my-1' />
                    <div className="d-flex align-items-center gap-2 mb-4">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <p class="location-info">
                            Your location will help us serve better and extend a personalised experience.
                        </p>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
                        <i class="fa-solid fa-thumbs-up"></i> <span> Recommendation Groups</span>
                    </div>
                    <div className='d-flex flex-column gap-4'>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                                <img src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" alt="profile" width="48" height="48" />
                                <div className="text-wrapper">Leisure</div>
                            </div>
                            <a to="/" className="btn follow rounded-5">Follow</a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                                <img src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" alt="profile" width="48" height="48" />
                                <div className="text-wrapper">Hook</div>
                            </div>
                            <a to="/" className="btn follow rounded-5">Follow</a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                                <img src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" alt="profile" width="48" height="48" />
                                <div className="text-wrapper">Leo</div>
                            </div>
                            <a to="/" className="btn follow rounded-5">Follow</a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                                <img src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" alt="profile" width="48" height="48" />
                                <div className="text-wrapper">Andy</div>
                            </div>
                            <a to="/" className="btn follow rounded-5">Follow</a>
                        </div>
                    </div>
                    <button className='btn text-end mt-5 text-primary text-capitalized'>See more.....</button>
                </div>
            </div>
            <br />
            <br />
            <br /><br />



        </>
    )
}

export default Webpage
