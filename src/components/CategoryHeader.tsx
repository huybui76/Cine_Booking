import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';



const CategoryHeader = (props: any) => {
    return (

        <Text style={styles.container}>{props.title}</Text>

    );
};

export default CategoryHeader;

const styles = StyleSheet.create({
    container: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.White,
        paddingHorizontal: SPACING.space_16,
        paddingVertical: SPACING.space_28,
    }
});
