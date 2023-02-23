import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import film from "./assets/film.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={{ height: 25, width: 25 }}
          source={{
            uri: "https://ia.media-imdb.com/images/M/MV5BOTc2MzQ4MjAwM15BMl5BcG5nXkFtZTgwMzY2MzQ2OTE@._V1_.png",
          }}
        />
      </View>

      {/* Titre et informations */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Interstellar</Text>
        <Text style={styles.info}>
          2014 | PG-13 | 2h49 | Adventure, Drama, Science Fi
        </Text>

        {/* Image et description */}
        <View>
          <View style={styles.movieContainer}>
            <Image source={film} style={styles.movieImage} />
            <View style={styles.movieDescription}>
              <Text style={styles.movieText}>
                A team of explorers travel thought a wormhole in space in an
                attempt to ensure humanity's survival
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Étoiles et score board */}
        <View>
          <View style={styles.ratingContainer}>
            <TouchableOpacity>
              <Ionicons name="star" size={30} color="#FFD700" />
              <Text>8,6/10</Text>
              <Text>1,1M</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="star-outline"
                size={30}
                color="#FFFFFF"
                style={styles.starOutline}
              />
              <Text>RATE THIS</Text>
              <Text>{""}</Text>
            </TouchableOpacity>
            <View style={styles.scoreBoard}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="scoreboard"
                  size={24}
                  color="black"
                />
                <Text>Metascore</Text>
                <Text>46 critic review</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.castContainer}>
          <Text style={styles.castTitle}>Top Billed Cast</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllButtonText}>SEE ALL</Text>
          </TouchableOpacity>

          <ScrollView horizontal={true}>
            <View style={styles.actorContainer}>
              <Image
                style={styles.actorImage}
                source={require("./assets/matthew.jpg")}
              />
              <View style={styles.actorDescription}>
                <Text
                  style={styles.actorName}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Matthew McConaughey
                </Text>
                <Text style={styles.actorCharacter}>Cooper</Text>
              </View>
            </View>

            <View style={styles.actorContainer}>
              <Image
                style={styles.actorImage}
                source={require("./assets/anne.jpg")}
              />
              <View style={styles.actorDescription}>
                <Text style={styles.actorName}>Anne Hathaway</Text>
                <Text style={styles.actorCharacter}>Brand</Text>
              </View>
            </View>

            <View style={styles.actorContainer}>
              <Image
                style={styles.actorImage}
                source={require("./assets/mackenzie.jpg")}
              />
              <View style={styles.actorDescription}>
                <Text
                  style={styles.actorName}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Mackenzie Foy
                </Text>
                <Text style={styles.actorCharacter}>Murphy Cooper</Text>
              </View>
            </View>
            <View style={styles.actorContainer}>
              <Image
                style={styles.actorImage}
                source={require("./assets/jessica.jpg")}
              />
              <View style={styles.actorDescription}>
                <Text
                  style={styles.actorName}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Jessica Chastain
                </Text>
                <Text style={styles.actorCharacter}>MurphyCooper</Text>
              </View>
            </View>
          </ScrollView>
          <View>
            <Text>Director</Text>
            <Text>Christopher Nolan</Text>

            <Text>Writers</Text>
            <Text>
              Johnatan Nolan (written by) ans Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    height: 40,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  infoContainer: {
    backgroundColor: "#212121",
    height: 350,
  },
  title: {
    fontSize: 35,
    color: "white",
    marginBottom: 10,
  },
  info: {
    fontSize: 12,
    color: "grey",
    marginBottom: 30,
  },
  movieContainer: {
    flexDirection: "row",
  },
  movieImage: {
    height: 150,
    width: 100,
    marginRight: 20,
  },
  movieDescription: {
    flex: 1,
  },
  movieText: {
    fontSize: 14,
    color: "white",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    marginHorizontal: 5,
  },
  emptyStar: {
    borderWidth: 1,
    borderColor: "white",
    marginHorizontal: 5,
    marginBottom: 10,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreIcon: {
    marginRight: 5,
  },
  scoreText: {
    color: "white",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginStart: 50,
    marginEnd: 50,
  },
  castContainer: {
    backgroundColor: "#212121",
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  castTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
  },
  seeAllButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "absolute",
    right: 20,
    top: 10,
  },
  seeAllButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  actorContainer: {
    marginRight: 10,
  },
  actorImage: {
    height: 200,
    width: 110,
    borderRadius: 5,
  },
  actorDescription: {
    alignItems: "center",
    marginTop: 5,
  },
  actorName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  actorCharacter: {
    color: "grey",
    fontSize: 10,
  },
  actorName: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
    maxWidth: "80%", // maximum width of the text
    overflow: "hidden", // hide any overflowing text
    textOverflow: "ellipsis", // show ellipsis at the end of the line
    whiteSpace: "nowrap", // do not wrap the text to a new line
  },
});

export default App;
