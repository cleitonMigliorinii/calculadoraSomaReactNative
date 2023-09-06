import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

export function GroupInputs (props){

    return (
        <View style={styles.group}>
            <Text style={[styles.textLabel, props.color ]}> {props.label}</Text>
            <TextInput keyboardType='decimal-pad' 
            style={styles.inputText} 
            value={props.valueText}
            onChangeText={props.onChangeValue}
            />
        </View>
    )

}