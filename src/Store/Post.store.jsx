import { createContext } from "react";
import post_img from '../assets/post_img.png';
import author1 from '../assets/author1.png';
import profile from '../assets/profile.svg';
import man_on_pc from '../assets/man_on_pc.png';
import two_girl from '../assets/two_women.png';
import group_of_people from '../assets/photo-of-people.png';
import two_people from '../assets/two_people.png'
import home_hero from '../assets/home_hero.png'
import sunaina_img from '../assets/sunaina.jpg'
export const PostContext = createContext({ item: [], author: [], review: [] })
function ItemStore({ children }) {
  let data = [
    {
      id: 1,
      img: post_img,
      username: "John Doe",
      date: "May 23, 2022",
      post_on:"startup",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 2,
      img: post_img,
      username: "John Doe",
      post_on: "startup",
      date: "May 23, 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 3,
      img: post_img,
      username: "John Doe",
      post_on: "startup",
      date: "May 23, 2022",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 4,
      img: post_img,
      username: "John Doe",
      date: "May 23, 2022",
      post_on: "business",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 5,
      img: man_on_pc,
      username: "John Doe",
      date: "May 23, 2022",
      post_on: "business",
      title: "Step-by-step guide to choosing great font pairs",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }, {
      id: 6,
      img: two_girl,
      username: "John Doe",
      date: "May 23, 2022",
      post_on: "startup",
      title: "Design tips for designers that cover everything you need",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }, {
      id: 7,
      img: group_of_people,
      username: "John Doe",
      date: "May 23, 2022",
      post_on: "BUSINESS",
      title: "How to build rapport with your web design clients",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }, {
      id: 8,
      img: group_of_people,
      username: "John Doe",
      date: "May 23, 2022",
      post_on: "startup",
      title: "Logo design trends to avoid in 2022",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }, {
      id: 9,
      img: two_people,
      username: "John Doe",
      date: "May 23, 2022",
      post_on: "technology",
      title: "8 Figma design systems you can download for free today",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }, {
      id: 10,
      img: two_girl,
      username: "John Doe",
      date: "May 23, 2022",
      post_on: "economy",
      title: "Font sizes in UI design: The complete guide to follow",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 11,
      img: home_hero,
      username: "John Doe",
      date: "May 23, 2022",
      post_on: "business",
      title: "Step-by-step guide to choosing great font pairs",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }
  ]
  let authors = [
    {
      author_img: author1,
      name: "Floyd Miles",
      about: "Content Writer @Company",
      insta_profile: "#",
      twitter_profile: "#",
      facebook_profile: "#",
      linkedin_profile: "#"
    },
    {
      author_img: author1,
      name: "Floyd Miles",
      about: "Content Writer @Company",
      insta_profile: "#",
      twitter_profile: "#",
      facebook_profile: "#",
      linkedin_profile: "#"
    },
    {
      author_img: author1,
      name: "Floyd Miles",
      about: "Content Writer @Company",
      insta_profile: "#",
      twitter_profile: "#",
      facebook_profile: "#",
      linkedin_profile: "#"
    },
    {
      author_img: author1,
      name: "Floyd Miles",
      about: "Content Writer @Company",
      insta_profile: "#",
      twitter_profile: "#",
      facebook_profile: "#",
      linkedin_profile: "#"
    },
    {
      author_img: author1,
      name: "Floyd Miles",
      about: "Content Writer @Company",
      insta_profile: "#",
      twitter_profile: "#",
      facebook_profile: "#",
      linkedin_profile: "#"
    },
    {
      author_img: author1,
      name: "Floyd Miles",
      about: "Content Writer @Company",
      insta_profile: "#",
      twitter_profile: "#",
      facebook_profile: "#",
      linkedin_profile: "#"
    },
    {
      author_img: author1,
      name: "Floyd Miles",
      about: "Content Writer @Company",
      insta_profile: "#",
      twitter_profile: "#",
      facebook_profile: "#",
      linkedin_profile: "#"
    },
    {
      author_img: author1,
      name: "Floyd Miles",
      about: "Content Writer @Company",
      insta_profile: "#",
      twitter_profile: "#",
      facebook_profile: "#",
      linkedin_profile: "#"
    }
  ]
  let reviews = [
    {
      user_img: profile,
      username: "Jonathan Vallem",
      city: "New york, USA",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      user_img: sunaina_img,
      username: "Sunaina Ralia",
      city: "New york, USA",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      user_img: profile,
      username: "OmParkash Ralia",
      city: "New york, USA",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
  return <>
    <PostContext.Provider value={{ item: data, author: authors, review: reviews }}>
      {children}
    </PostContext.Provider>
  </>
}
export default ItemStore