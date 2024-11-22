import OnboardingScreen from "simple-react-native-onboarding";
import datahell from "../utils/data/originalOnboardSlidesData";
const RealOnboarding = ({ navigation }) => {
  return (
    <OnboardingScreen
      data={datahell}
      dotBackgroundColor="#db08d8"
      buttonBackgroundColor="#b504d8"
      onFinish={() => navigation.replace("Home")}
      buttonIconColor="white"
    />
  );
};

export default RealOnboarding;
