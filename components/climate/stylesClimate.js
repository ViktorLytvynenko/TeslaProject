import {StyleSheet} from "react-native";

const stylesClimate = StyleSheet.create({
    climateContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    climateText: {
        justifyContent: "flex-start",
        textAlign: "center",
        color: "rgba(235, 235, 245, 0.60))",
        fontSize: 17,
        fontWeight: "600",
    },
    climateSVG: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 8,
    },
    climateSlider: {
        width: 180,
    },
    climateIconBorder: {
        width: 50,
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        borderStyle: "solid",
        borderWidth: 2,
    },
    climateIconBorderWhite: {
        borderColor: "white"
    },
    climateIconBorderBlue: {
        borderColor: "#11A8FD"
    },
    climateIcon: {
        width: 25,
        height: 25
    }
});

export default stylesClimate;
