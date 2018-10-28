
import React, { Component } from "react";
import {
    View,
    ART,
    TouchableHighlight
} from "react-native";
const { Surface, Path, Group, Shape } = ART;
const scale = 1;

export default class App extends Component<{}> {
    render() {
        const pathRect = new Path()
            .moveTo(scale * 0, scale * 0)
            .lineTo(scale * 0, scale * 110)
            .lineTo(scale * 110, scale * 110)
            .lineTo(scale * 110, scale * 0)
            .close();

        const pathCircle0 = new Path()
            .moveTo(scale * 30, scale * 5)
            .arc(scale * 0, scale * 50, scale * 25)
            .arc(scale * 0, -scale * 50, scale * 25)
            .close();

        const pathCircle1 = new Path()
            .moveTo(scale * 30, scale * 55)
            .arc(scale * 0, scale * 50, scale * 25)
            .arc(scale * 0, -scale * 50, scale * 25)
            .close();

        const pathCircle2 = new Path()
            .moveTo(scale * 55, scale * 30)
            .arc(scale * 50, scale * 0, scale * 25)
            .arc(-scale * 50, scale * 0, scale * 25)
            .close();

        const pathCircle3 = new Path()
            .moveTo(scale * 55, scale * 80)
            .arc(scale * 50, scale * 0, scale * 25)
            .arc(-scale * 50, scale * 0, scale * 25)
            .close();

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <TouchableHighlight onPress={() => console.log("Pressed!")}>
                    <Surface width={scale * 200} height={scale * 200}>
                        <Group>
                            <Shape
                                d={pathRect}
                                stroke="#2D2416"
                                fill="#2D2416"
                                strokeWidth={scale}
                            />
                            <Shape
                                d={pathCircle0}
                                stroke="#851315"
                                fill="#851315"
                                strokeWidth={scale}
                            />
                            <Shape
                                d={pathCircle1}
                                stroke="#D91E25"
                                fill="#D91E25"
                                strokeWidth={scale}
                            />
                            <Shape
                                d={pathCircle2}
                                stroke="#1F7895"
                                fill="#1F7895"
                                strokeWidth={scale}
                            />
                            <Shape
                                d={pathCircle3}
                                stroke="#5287DD"
                                fill="#5287DD"
                                strokeWidth={scale}
                            />
                        </Group>
                    </Surface>
                </TouchableHighlight>
            </View>
        );
    }
}
