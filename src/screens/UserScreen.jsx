import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";

import Profile from "../components/shared/Profile";
import SafeArea from "../components/shared/SafeArea";
import CoursePreviewList from "../components/shared/CoursePreviewList";

import { selectUser } from "../reducers/userSlice";
import { selectMyCourses } from "../reducers/myCoursesSlice";
import { selectFavoriteCourses } from "../reducers/favoriteCoursesSlice";

function UserScreen({ navigation }) {
  const { name, photoUrl } = useSelector(selectUser);
  const myCourses = useSelector(selectMyCourses);
  const favoriteCourses = useSelector(selectFavoriteCourses);

  function handlePreviewPress(courseId) {
    navigation.navigate("CourseDetail", { id: courseId });
  }

  return (
    <View style={styles.container}>
      <SafeArea />
      <Profile
        name={name}
        photoUrl={photoUrl}
      />
      <CoursePreviewList
        title="나의 일정"
        courses={myCourses}
        onPreviewPress={handlePreviewPress}
      />
      <CoursePreviewList
        title="즐겨찾기"
        courses={favoriteCourses}
        onPreviewPress={handlePreviewPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  listContainer: {
    height: "30%",
    width: "90%",
  },
  previewContainer: {
    paddingVertical: "5%",
  },
});

export default UserScreen;
