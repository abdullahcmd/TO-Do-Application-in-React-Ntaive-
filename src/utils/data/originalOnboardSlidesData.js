import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

// Constants
const SCREEN_WIDTH = Dimensions.get("window").width;



const datahell = [
    {
        _id: '1',
        title: 'Welcome to Taskify',
        description: 'Your ultimate task manager designed to help you stay organized and boost your productivity.',
        image: <Image  
          style={{width: SCREEN_WIDTH*0.9, height: SCREEN_WIDTH}}
        source={{uri:'https://img.freepik.com/free-vector/onboarding-concept-illustration_114360-4120.jpg?t=st=1729943000~exp=1729946600~hmac=f25a86e039627d81b0fbd671b35c6a56dd52e9061934d7aac22b8721d3e85ba6&w=996'}} />
    },
    {
        _id : '2',
        title: 'Your Personalized Task Manager!',
        description: 'Streamlines the process of organizing and managing meetings within an organization. It allows you to easily create, view, and update meeting schedules.',
        image: <Image
            source={{ uri: 'https://img.freepik.com/free-vector/onboarding-concept-illustration_114360-1000.jpg?t=st=1729942991~exp=1729946591~hmac=6f34315d93c7fd9b6711d232d42f3c5b8a2ac3cb022bb8fe530f476a0f75ec3b&w=996' }}
            style={{width: SCREEN_WIDTH*0.9, height: SCREEN_WIDTH}}
        />
    },
    {
      _id : '3',
      title: 'Categorize to focus on what matters.',
      description: 'Office Meetings Schedule.',
      image: <Image
        source={{ uri: 'https://img.freepik.com/free-vector/onboarding-concept-illustration_114360-2092.jpg?t=st=1729942876~exp=1729946476~hmac=6ad9afc9cf8264dadb896286ed3c06afef78a0a55252bc6b4830a2e8d38f08de&w=740' }}
        style={{width: SCREEN_WIDTH*0.9, height: SCREEN_WIDTH}}
      /> 
    },
  ]

  export default datahell;