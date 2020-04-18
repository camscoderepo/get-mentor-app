import React from 'react';
// import React, { useState, useEffect } from 'react';
import { HomePageContainer, HomePageHeading } from './home-styles';
// import { FirebaseContext } from '../Firebase';
// import axios from "axios";
// import Topic from "../../components/topic/topic";

const HomePage = () => {
  // const [helpTopics, setHelpTopics] = useState([]);

  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const result = await axios.get("/help_topics");

  //       setHelpTopics(result.data);
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // let recentTopics = helpTopics ? (
  //   helpTopics.map((topic) => <Topic key={topic.topicId} topic={topic} />)
  // ) : (
  //   <p> ...Loading</p>
  // );
  return (
    <div>
      <HomePageContainer>
        <HomePageHeading>
          Nam Jai Means Helping People
        </HomePageHeading>
      </HomePageContainer>
    </div>
  );
};
export default HomePage;
