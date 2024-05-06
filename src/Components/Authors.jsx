import { useContext,useState } from "react"
import { PostContext } from '../Store/Post.store'
import facebook from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import linkdin from '../assets/linkdin.svg'
import twitter from '../assets/twitter.svg'
function Authors({visible}) {
  let authors = useContext(PostContext).author
  let [currentPage, setCurrentPage] = useState(1)
  let postOnPage = visible
  let lastIndexOfPost = currentPage * postOnPage
  let firstIndexOfPost = lastIndexOfPost - postOnPage
  let listOfAuthors=authors.slice(firstIndexOfPost,lastIndexOfPost)
  return (
    listOfAuthors.map(author =>
      <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3 mb-lg-4">
        <div className="pt-lg-4 pt-3 pb-3 pb-lg-4 bg_dull">
          <div className="pt-3 pb-3 mt-1 pt-1 text-center">
            <img src={author.author_img} alt="" className="pb-2" />
            <p className="pt-3 fw-bold ff_sen lh_40 clr_primary fs_xl">{author.name}</p>
            <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pb-3">{author.about}</p>
            <div>
              <a href={author.facebook_profile} className="pe-3"> <img src={facebook} alt="" /></a>
              <a href={author.twitter_profile} className="ps-2 pe-3"> <img src={twitter} alt="" /></a>
              <a href={author.insta_prfile} className="ps-2 pe-3"><img src={insta} alt="" /></a>
              <a href={author.linkdin_profile} className="ps-2"><img src={linkdin} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
export default Authors