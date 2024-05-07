import Catagory from '../Category'
import pattern_img from '../../assets/pattern_img.png'
import business_icon from '../../assets/business_icon.png'
import economy_icon from '../../assets/economy_icon.svg'
import startup_icon from '../../assets/startup_icon.svg'
import tech_icon from '../../assets/tech_icon.png'
import group_photo from '../../assets/group_photo.png'
import Authors from "../Authors"
import featured_logo from '../../assets/feature_logo.svg'
import leftArrow from '../../assets/left_arrow.png'
import rightArrow from '../../assets/right_arrow.svg'
import { useContext, useState } from "react"
import { PostContext } from "../../Store/Post.store"
import JoinNow from "../JoinNow"
import Button from "../Button"
function Home() {
  let category_data = [
    {
      title: 'Business',
      body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      img: business_icon
    },
    {
      title: 'Startup',
      body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      img: startup_icon
    },
    {
      title: 'Economy',
      body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      img: economy_icon
    },
    {
      title: 'technology',
      body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      img: tech_icon
    }
  ]
  let contextData = useContext(PostContext)
  let allPost = contextData.item
  let singlePost = allPost.find(item => item.id === 11)
  let featured_post = allPost.find(item => item.id === 1)
  function view_all() {
    setCurrentPost(allPost)
  }
  let [currentPage, setCurrentPage] = useState(1)
  let postOnPage = 4
  let lastIndexOfPost = currentPage * postOnPage
  let firstIndexOfPost = lastIndexOfPost - postOnPage
  let [currentPost, setCurrentPost] = useState(allPost.slice(firstIndexOfPost, lastIndexOfPost))
  let reviews = contextData.review
  let [currentReview, setCurrentReview] = useState(0)
  let review = reviews[currentReview]
  function pre() {
    if (currentReview < 1) {
      currentReview
    } else {
      setCurrentReview(currentReview - 1)
    }

  }
  function next() {
    if ((reviews.length - 1) == currentReview) {
      currentReview
    } else {
      setCurrentReview(currentReview + 1)
    }
  }
  return (
    < >
      {/* -----------------header---------------- */}
      <header className=" d-flex flex-column min-vh-100 min_sm_90 mb-3 pb-3 mb-lg-5 pb-lg-5 text_sm_cntr">
        <div className="hero_image flex-grow-1 d-flex" style={{ backgroundImage: `url(${singlePost.img})` }}>
          <div className="container d-flex flex-column flex-grow-1 justify-content-center">
            <div className="position-absolute z-1 w_sm_50">
              <p className="ff_inter clr_powder fw_600 fs_sm ltr_spc_3 text_sm_cntr">Posted on <span className="fw_900">startup</span></p>
              <p className="ff_sen fw-bold fs_4xl clr_powder lh_64 pt-4 ps-0 ps-md-5 text_sm_cntr">Step-by-step guide to choosing great font pairs</p>
              <p className="ff_inter fw-normal fs_sm clr_powder pt-4 text_sm_cntr">By <span className="clr_highlight">James West</span>  |  May 23, 2022 </p>
              <p className="ff_inter fw-normal fs_sm clr_powder pt_16 text_sm_cntr">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

              <Button content={'Read More >'} classname={'mt-4'} />
            </div>
          </div>
        </div>
      </header>
      {/* ---------featured post and all post--------- */}
      <section className="container min-vh-120 d-flex ">
        <div className="d-flex flex-grow-1 flex-column justify-content-center">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-7">
              <div className="">
                <p className="ff_sen fs_2xl fw-bold clr_primary pb-3 pb-lg-4 mb-2">Featured Post</p>
                <div className='bg_powder brdr_grey p_32'>
                  <img src={featured_post.img} alt="" className='w-100 h-100' />
                  <p className='pt-3 pt-lg-4 mt-2 ff_inter fs_xsm clr_parasecond fw_500 pb-3'>By <span className='clr_tertiary'>{featured_post.username}</span>   l   {featured_post.date}</p>
                  <p className='clr_primary ff_sen fs_xl fw-bold lh_40 pt-1 pb-2 pb-lg-3'>{featured_post.heading}</p>
                  <p className='clr_secondary ff_inter lh_32 fw-normal fs_sm pt-1 pb-2'>{featured_post.body}</p>
                  <a href="#" className="bg_highlight clr_primary pt_16 pb_16 ps-5 pe-5 fs_md fw-bold ff_sen text-decoration-none d-inline-block mt-2 mt-lg-4">Read More &gt;</a>
                </div>
              </div>
            </div>
            <div className="col-10 col-lg-5">
              <div>
                <div className="d-flex align-items-center justify-content-between pb-2 pb-lg-4 mb-2 pt-3 pt-lg-0">
                  <p className="ff_sen fs_2xl fw-bold clr_primary ">All Posts</p>
                  <a href="#" className="clr_tertiary ff_inter fw-normal text-decoration-none fs_sm " onClick={view_all}>View All</a>
                </div>
                {currentPost.map(item =>
                  <div className="p_32 post">
                    <p className='ff_inter fs_xsm clr_parasecond fw_500 pb-2'>By <span className='clr_tertiary'>{item.username}</span>   l   {item.date}</p>
                    <p className='clr_primary ff_sen fs_lg fw-bold lh_32 pt-1 pb-3 '>8 Figma design systems that you can download for free today.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ---------------about us and our mission----------- */}
      <section>
        <div className="container mt-3 mt-lg-5">
          <div className="bg_sky pt-3 pb-3 ps-2 pe-2 pt-lg-5 pb-lg-5 ps-lg-4 pe-lg-4 position-relative">
            <div className="row justify-content-between p-3 p-lg-5">
              <div className="col-12 col-md-6 col-xl-4">
                <div>
                  <p className="ff_inter fw_600 fs_sm ltr_spc_3 clr_primary pb-4 text_md_cntr">ABOUT US</p>
                  <p className="ff_sen fw-bold fs_2xl clr_primary lh_48 pb-3 text_md_cntr"> We are a community of content writers who share their learnings</p>
                  <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-1 pb-3 text_md_cntr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Button content={'Read More >'} classname={'mt-1 mb-3 d-flex justify-content-center d-md-inline-block'} />
                  <hr className=" d-block d-md-none" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-5">
                <div>
                  <p className="ff_inter fw_600 fs_sm ltr_spc_3 clr_primary pb-4 text_md_cntr">Our mision</p>
                  <p className="ff_sen fw-bold fs_xl clr_primary lh_40 pb-3 text_md_cntr">Creating valuable content for creatives all around the world</p>
                  <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-1 pb-3 text_md_cntr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


                </div>
              </div>

            </div>
            <img src={pattern_img} alt="" className="position-absolute pattern w_xl_75 d-none d-md-block" />
          </div>
        </div>
      </section>
      {/* Choose a category */}
      <section>
        <div className='pt-3 pb-3 pt-lg-5 container pb-lg-5'>
          <p className='ff_sen clr_primary fw-bold lh_48 fs_2xl pb-3 pb-lg-5 text_sm_cntr'>Choose A Catagory</p>
          <div className="row pb-3 pb-lg-5 justify-content-between align-items-center">
            {/* fetch category data */}
            {
              category_data.map(items =>
                <Catagory data={items} />
              )
            }
          </div>
        </div>
      </section>
      {/* ------------why we started--------- */}
      <section>
        <div className="container pt-3 pb-3 pt-lg-5 pb-lg-5">
          <div className=" position-relative">
            <img src={group_photo} alt="" className="d-none d-lg-block" />
            <div className="bg_powder p-0 p-lg-5 w-57 group psn_lg_abs">
              <div className="p-2 p-lg-4">
                <p className="ff_inter fw_600 fs_sm ltr_spc_3 clr_primary text_sm_cntr">Why we started </p>
                <p className="ff_sen fw-bold fs_3xl clr_primary lh_64 pt-4 pb-2 text_sm_cntr">It started out as a simple idea and evolved into our passion</p>
                <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-2 pb-2 text_sm_cntr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <div className="text_sm_cntr"> 
                  <Button content={'Discover our story >'} classname={'mt-3 mt-lg-4'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------list of authors-------- */}
      <section>
        <div className="container pb-3 pb-lg-5">
          <p className="ff_sen fs_2xl fw-bold clr_primary pb-3 pb-lg-5 pt-3 pt-lg-5 text-center ">List of Authors</p>
          <div className="row pb-3 pb-lg-5 align-items-center justify-content-center">
            <Authors visible={4} />
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-6 col-4 col-lg-2 pb-3 pb-lg-0">
              <p className="ff_inter fw-normal clr_secondary fs_xsm">We are <br /><span className="ff_sen lh_32 fs_lg clr_secondary fw-bold">Featured in</span></p>
            </div>
            <div className="col-6 col-4 col-lg-2 pb-3 pb-lg-0 txt_aln_ryt">
              <img src={featured_logo} alt="" />
            </div>
            <div className="col-6 col-4 col-lg-2 pb-3 pb-lg-0">
              <img src={featured_logo} alt="" />
            </div>
            <div className="col-6 col-4 col-lg-2 pb-3 pb-lg-0 txt_aln_ryt">
              <img src={featured_logo} alt="" />
            </div>
            <div className="col-6 col-4 col-lg-2 pb-3 pb-lg-0">
              <img src={featured_logo} alt="" />
            </div>
            <div className="col-6 col-4 col-lg-2 pb-3 pb-lg-0 txt_aln_ryt">
              <img src={featured_logo} alt="" className="" />
            </div>
          </div>
        </div>
      </section>
      {/* --------review section---------- */}
      <section>
        <div className="min-vh-100 d-flex flex-column">
          <div className="container bg_yellowish p-3 p-lg-5 ">
            <div className="row justify-content-between p-0 p-md-3 p-lg-5">
              <div className="col-12 col-md-5 brdr_ryt pe-3 pe-lg-5 pb-3 pb-md-0">
                <div className="pe-3 pe-lg-5 ">
                  <p className="ff_inter fw_600 fs_sm ltr_spc_3 clr_primary pb-1 text_md_cntr">TESTIMONIALS</p>
                  <p className="ff_sen fw-bold fs_2xl clr_primary lh_48 pt-2 pb-2 text_md_cntr">What people say about our blog</p>
                  <p className="ff_inter fw-normal clr_secondary pt-2 lh_32 text_md_cntr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
              <div className="col-10 col-md-5 pe-0 me-0 pe-md-3 me-md-3 pe-xl-5 me-xl-5">
                <div className="d-flex flex-column justify-content-between ">
                  <p className="ff_sen fw-bold fs_lg clr_primary lh_32 pb-3 pb-lg-5 text_md_cntr ps-5 ps-md-0">{review.body}</p>
                  <div className="d-flex pt-3 pt-lg-5 align-items-center justify-content-between flex-column flex-lg-row">
                    <div className="d-flex">
                      <img src={review.user_img} alt="" className="pe-2 wh_56" />
                      <div className="ps-2 pe-2">
                        <p className="ff_sen  fw-bold fs_lg lh_32 text-nowrap">{review.username}</p>
                        <p className="ff_inter fs_sm fw-normal clr_secondary">{review.city}</p>
                      </div>
                    </div>
                    <div className="d-flex mt-3 mt-lg-0">
                      <img src={leftArrow} alt="" className="pe-4" onClick={pre} />
                      <img src={rightArrow} alt="" onClick={next} className="img_bg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <JoinNow />

        </div>
      </section>

    </>
  )
}
export default Home